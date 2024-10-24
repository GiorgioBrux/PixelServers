<script lang="ts">
	import { geoOrthographic, geoPath, geoGraticule, type GeoPermissibleObjects } from 'd3-geo';
	import { drag } from 'd3-drag';
	import { select } from 'd3-selection';
	import { onMount } from 'svelte';
	import { feature } from 'topojson-client';
	import { fade } from 'svelte/transition';

	import dataCenters from '$lib/data/datacenters.json';
	import world from '$lib/data/countries-110m.json';

	// Map setup & rendering
	let localDataCenters = dataCenters;
	let projection = geoOrthographic();
	let path = geoPath().projection(projection);
	let rotation: [number, number, number] = [0, -30, 0]; // Initial rotation for the default rotation effect
	let sphere: GeoPermissibleObjects = { type: 'Sphere', geometries: [] }; // Globe Outline
	let land: GeoPermissibleObjects;

	let rotating = true; // Default state for rotation
	let rotationAngle = 0;

	projection.scale(150).translate([150, 150]);

	// Calculate projection for each point
	function projectPoint([longitude, latitude]: [number, number]) {
		const coords = projection([longitude, latitude]);
		return coords && coords[0] && coords[1] ? coords : null;
	}

	// Reactive code to update on map rotation
	$: {
		rotationAngle = rotation[0];
		projection.rotate(rotation);
		path = geoPath().projection(projection);
		localDataCenters = [...localDataCenters];
	}

	function isVisible([longitude, latitude]: [number, number]): boolean {
		// Convert the point to cartesian coordinates
		const point = projection([longitude, latitude]);

		// If the point is not projectable, it's not visible
		if (!point) return false;

		// Get the current rotation
		const [lambda, phi] = projection.rotate().map((d: number) => (-d * Math.PI) / 180);

		// Convert latitude and longitude to radians
		const lambda0 = (longitude * Math.PI) / 180;
		const phi0 = (latitude * Math.PI) / 180;

		// Calculate the cosine of the angle between the point and the visible hemisphere
		const cosAngle = Math.sin(phi0) * Math.sin(phi) + Math.cos(phi0) * Math.cos(phi) * Math.cos(lambda0 - lambda);

		// The point is visible if it's on the front half of the sphere
		return cosAngle > 0;
	}

	/**
	 * Calculates the rotation of the globe when the user drags on the map
	 */
	function dragged(event: { dx: any; dy: any }) {
		const dx = event.dx;
		const dy = event.dy;
		const currentRotation = projection.rotate();
		const radius = projection.scale();
		const scale = 360 / (2 * Math.PI * radius);

		rotation = [(currentRotation[0] + dx * scale + 360) % 360, Math.max(-90, Math.min(90, currentRotation[1] - dy * scale)), currentRotation[2]];

		rotating = false; // Stop rotation during drag
	}
	/**
	 * Starts a slow rotation for the globe
	 */
	function startRotation() {
		function rotate() {
			if (rotating) {
				rotationAngle = (rotationAngle + 0.1) % 360;
				rotation[0] = rotationAngle;
			}
			requestAnimationFrame(rotate);
		}
		rotate();
	}

	

	onMount(async () => {
		// Geo Data from World-Atlas
		land = feature(world as any, world.objects.land as any);

		const globe = select<Element, unknown>('.globe-path');

		// Define drag behavior
		const dragHandler = drag()
			.on('drag', (event) => {
				dragged({ dx: event.dx, dy: event.dy });
			})
			.on('end', () => {
				rotating = true; // Resume rotation after drag ends
			});

		// Apply the drag behavior
		dragHandler(globe);

		// Start the rotation loop
		startRotation();

		dragHandler(select('.draggable-area'));
	});
</script>

<div class="h-full w-full  ">
	<svg class="block h-full w-full" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
		<g class="draggable-area">
			<!-- Globe outline with transparent fill -->
			<path d={path(sphere)} fill="rgba(0,0,0,0)" stroke="#4F46E5" />

			<!-- Land with color fill matching the theme -->
			<path d={path(land)} fill="#6D28D9" stroke="#312E81" />
		</g>

		<!-- Data centers with pulsing effect -->
		{#each localDataCenters as center (center.city)}
			{@const point = projectPoint(center.coordinates as [number, number])}
			{@const visible = point && isVisible(center.coordinates as [number, number])}
			{#if visible}
				<g transition:fade={{ duration: 300 }}>
					<circle
						cx={point![0]}
						cy={point![1]}
						r="3"
						class="animate-pulse fill-gray-300 stroke-indigo-500 transition-opacity duration-300"
						class:opacity-70={visible}
						class:opacity-0={!visible}
						stroke-width="2"
					/>
					<text
						x={point![0] + 5}
						y={point![1] + 5}
						fill="white"
						class="text-xs transition-opacity duration-300"
						class:opacity-100={visible}
						class:opacity-0={!visible}
					>
						{center.city}
					</text>
				</g>
			{/if}
		{/each}
	</svg>
</div>

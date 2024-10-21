<script>
	import { geoOrthographic, geoPath, geoGraticule } from 'd3-geo';
	import { drag } from 'd3-drag';
	import { json } from 'd3-fetch';
	import { select } from 'd3-selection';
	import { onMount } from 'svelte';
	import { feature, mesh } from 'topojson-client';

	// Map setup & rendering
	let projection = geoOrthographic();
	let path = geoPath().projection(projection);
	let rotation = [0, -30, 0]; // Initial rotation for the default rotation effect
	let sphere = { type: 'Sphere' }; // Globe Outline
	let land, borders;
	let graticule = geoGraticule(); // Creates the latitude and longitude lines
	let dataCenters = []; // Holds the loaded data center points

	let rotating = true; // Default state for rotation

	// Load data center points from a JSON file
	async function loadDataCenters() {
		const points = await json('/path-to-your-datacenters.json');
		dataCenters = points;
	}

	// Calculate projection for each point
	function projectPoint([longitude, latitude]) {
		return projection([longitude, latitude]);
	}

	// Reactive code to update on map dragging
	$: if (projection) {
		projection.rotate(rotation);
		path = geoPath().projection(projection);
	}

	/**
	 * Calculates the rotation of the globe when the user drags on the map
	 *
	 * @param event
	 */
	function dragged(event) {
		const dx = event.dx;
		const dy = event.dy;
		const currentRotation = projection.rotate();
		const radius = projection.scale();
		const scale = 360 / (2 * Math.PI * radius);

		rotation = [
			currentRotation[0] + dx * scale,
			currentRotation[1] - dy * scale,
			currentRotation[2]
		];

		projection.rotate(rotation);
		rotating = false; // Stop rotation during drag
	}

	/**
	 * Starts a slow rotation for the globe
	 */
	function startRotation() {
		function rotate() {
			if (rotating) {
				rotation[0] += 0.1; // Adjust this value to change rotation speed
				if (rotation[0] > 180) rotation[0] -= 360; // Keep the rotation within bounds
				projection.rotate(rotation);
			}
			requestAnimationFrame(rotate);
		}
		rotate();
	}

	onMount(async () => {
		// Geo Data from World-Atlas
		const world = await json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
		land = feature(world, world.objects.land);
		borders = mesh(world, world.objects.countries, (a, b) => a !== b);

		// Load data center points
		await loadDataCenters();

		const globe = select('.globe-path');

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
	});
</script>

<style>
	/* Add pulsing effect for the data center points */
	.pulse {
		animation: pulse 2s infinite;
		fill: #E5E7EB;
		stroke: #6366F1;
		stroke-width: 2;
		opacity: 0.7;
	}
	@keyframes pulse {
		0% {
			r: 2;
			opacity: 0.7;
		}
		50% {
			r: 6;
			opacity: 0.3;
		}
		100% {
			r: 2;
			opacity: 0.7;
		}
	}
</style>

<!-- Container and styling to match the theme -->
<div class="relative flex justify-center items-center py-12 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl shadow-lg overflow-hidden">
	<svg class="w-full h-full" viewBox="0 0 960 960" preserveAspectRatio="xMidYMid meet">
		<!-- Globe outline with transparent fill to make it completely draggable -->
		<path d={path(sphere)} fill="rgba(0,0,0,0)" stroke="#4F46E5" class="globe-path" />

		<!-- Land with color fill matching the theme -->
		<path d={path(land)} fill="#6D28D9" stroke="#312E81" />

		<!-- Latitude and Longitude lines styled similarly -->
		<path d={path(graticule())} fill="none" stroke="rgba(156,163,175,0.5)" />

		<!-- Data centers with pulsing effect -->
		{#each dataCenters as center}
			{#if projectPoint(center.coordinates)}
				<circle cx={projectPoint(center.coordinates)[0]} cy={projectPoint(center.coordinates)[1]} r="3" class="pulse" />
				<text x={projectPoint(center.coordinates)[0] + 5} y={projectPoint(center.coordinates)[1] + 5} fill="white" font-size="10">
					{center.city}
				</text>
			{/if}
		{/each}
	</svg>
</div>

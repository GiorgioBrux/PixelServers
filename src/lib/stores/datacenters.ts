// src/lib/stores/datacenters.ts
import { writable } from 'svelte/store';

// @TODO: Fetch datacenters in a better way instead of JSONs + store
import dataCenters from '$lib/data/datacenters.json';

export const dataCentersStore = writable<any[]>(dataCenters);

export const pingDataCenters = async () => {
    const ping_test = async (url: string): Promise<number> => {
        if (typeof window === 'undefined') return 0;
        const built_url = new URL(url);
        built_url.searchParams.set('t', Date.now().toString());
        return 0; // Placeholder for actual ping implementation
    };

    const updatedCenters = await Promise.all(
        dataCenters.map(async (center) => {
            if (!center.coming_soon && center.testing_ip) {
                const latency = await ping_test(center.testing_ip);
                return { ...center, latency };
            }
            return center;
        })
    );
    dataCentersStore.set(updatedCenters);
};

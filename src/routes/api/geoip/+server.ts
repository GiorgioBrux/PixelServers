// src/routes/api/geolocation/+server.ts
import { json } from '@sveltejs/kit';
import { SECRET_IPINFO_TOKEN } from '$env/static/private';

export async function GET({ request, getClientAddress }) {
    try {
        const ip = getClientAddress();
        
        if(ip == '127.0.0.1' || ip == '::1') {
            // if we are in development, return a default country
            return json({ country: 'IT' });
        }

        // Optional: Add rate limiting here
        const response = await fetch(`https://ipinfo.io/${ip}?token=${SECRET_IPINFO_TOKEN}`);
        const data = await response.json();
        

        if (data.country && typeof data.country === 'string') {
            return json({ country: data.country.toUpperCase() });
        }

        return json({ country: 'US' });
    } catch (error) {
        console.error('Server-side geolocation error:', error);
        return json({ country: 'US' });
    }
}

import type { RequestHandler } from './$types';
import { storeEvent, cleanupOldRawData } from '$lib/server/analytics/analyticsStore';

type Payload = {
	path: string;
	timestamp: number;
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = (await request.json()) as Partial<Payload>;
		if (!data || typeof data.path !== 'string' || typeof data.timestamp !== 'number') {
			return new Response('Bad Request', { status: 400 });
		}

		// Optional: basic UA-based exclusion kept minimal
		// Excluded for now - reenable after testing
		// const ua = request.headers.get('user-agent') ?? '';
		// const isBot = /(bot|spider|crawler|headlesschrome|puppeteer|playwright)/i.test(ua);
		// if (isBot) return new Response(null, { status: 204 });

		storeEvent({ path: data.path, timestamp: data.timestamp });

		// Fire-and-forget cleanup occasionally
		if (Math.random() < 0.02) {
			try {
				cleanupOldRawData();
			} catch {
				console.error('Error cleaning up old raw data');
			}
		}

		return new Response(null, { status: 204 });
	} catch {
		console.error('Error storing event');
		return new Response('Bad Request', { status: 400 });
	}
};

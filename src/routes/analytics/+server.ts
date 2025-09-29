import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	// For now, just log
	console.log('Analytics:', data);

	// TODO: persist to DB or service
	return new Response(null, { status: 204 });
};

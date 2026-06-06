import { env } from '$env/dynamic/private';

export function getStrapiUrl() {
	const url = env.STRAPI_URL;
	if (!url) {
		throw new Error('STRAPI_URL is not set. Check your .env file (see .env.example).');
	}

	return url;
}

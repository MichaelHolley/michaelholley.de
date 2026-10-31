import type { Formats, Image } from '#lib/server/types.js';

/** Returns the URL of the requested Strapi format, falling back to the original upload. */
export function getImageUrl(
	image: Image | null | undefined,
	format: keyof Formats = 'small'
): string | undefined {
	return image?.formats?.[format]?.url ?? image?.url;
}

import type { Image } from '$lib/server/types';

export function getThumbnailImageUrl(image: Image | null | undefined): string | undefined {
	if (image?.formats?.small) {
		return image.formats.small.url;
	}

	return image?.url;
}

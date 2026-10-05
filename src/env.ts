import { defineEnvVars } from '@sveltejs/kit/env';
import z from 'zod';

export const variables = defineEnvVars({
	CACHE_INVALIDATION_TIME_IN_SECONDS: {
		schema: z.coerce
			.number<string>()
			.int()
			.positive()
			.default(60 * 10)
	},
	STRAPI_URL: {
		schema: z.url()
	}
});

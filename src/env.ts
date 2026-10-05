import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	CACHE_INVALIDATION_TIME_IN_SECONDS: { schema: (input) => input },
	STRAPI_URL: { schema: (input) => input }
});

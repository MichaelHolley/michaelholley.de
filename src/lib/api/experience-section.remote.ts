import { query } from '$app/server';
import { fetchExperienceSection } from '$lib/server/services/strapi.service';

export const getExperienceSection = query(async () => {
	const experienceSection = await fetchExperienceSection();
	return { experienceSection };
});

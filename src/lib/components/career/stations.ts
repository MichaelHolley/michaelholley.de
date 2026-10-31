import type { ExperienceStep } from '#lib/server/types.js';

export type Station = {
	/** Employer without its legal form ("Peerigon GmbH" → "Peerigon"), or the role when no employer is set. */
	name: string;
	steps: ExperienceStep[];
};

const LEGAL_FORM = /\s+(GmbH(\s*&\s*Co\.\s*KG)?|AG|SE|KG|UG)$/;

/** Formats a CMS timeframe for display: "Mai 2023 - Sept. 2025" → "Mai 2023 – Sept. 2025". */
export function formatTimeframe(timeframe: string): string {
	return timeframe.replace(/\s+-\s+/g, ' – ');
}

/**
 * Groups consecutive career steps at the same employer into one station, keeping the CMS order
 * (newest first).
 */
export function groupStations(steps: ExperienceStep[]): Station[] {
	const groups: ExperienceStep[][] = [];
	for (const step of steps) {
		const last = groups.at(-1);
		if (last && step.Employer && last[0].Employer === step.Employer) last.push(step);
		else groups.push([step]);
	}

	return groups.map((group) => ({
		name: (group[0].Employer ?? group[0].Role).replace(LEGAL_FORM, ''),
		steps: group
	}));
}

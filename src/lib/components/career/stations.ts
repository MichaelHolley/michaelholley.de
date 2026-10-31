import type { ExperienceStep } from '#lib/server/types.js';

export type Station = {
	/** Employer without its legal form ("Peerigon GmbH" → "Peerigon"), or the role when no employer is set. */
	name: string;
	/** Years covered by all steps at this employer: "seit 2025", "2019 – 2025" or "2017". */
	span: string;
	steps: ExperienceStep[];
};

const LEGAL_FORM = /\s+(GmbH(\s*&\s*Co\.\s*KG)?|AG|SE|KG|UG)$/;
const YEAR = /\b(?:19|20)\d{2}\b/g;
const ONGOING = /^\s*seit\b/i;

/** Formats a CMS timeframe for display: "Mai 2023 - Sept. 2025" → "Mai 2023 – Sept. 2025". */
export function formatTimeframe(timeframe: string): string {
	return timeframe.replace(/\s+-\s+/g, ' – ');
}

function spanOf(steps: ExperienceStep[]): string {
	const years = steps.flatMap((s) => s.Timeframe.match(YEAR) ?? []).map(Number);
	if (years.length === 0) return formatTimeframe(steps[0].Timeframe);

	const from = Math.min(...years);
	const to = Math.max(...years);
	if (steps.some((s) => ONGOING.test(s.Timeframe))) return `seit ${from}`;
	return from === to ? `${from}` : `${from} – ${to}`;
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
		span: spanOf(group),
		steps: group
	}));
}

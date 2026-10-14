/**
 * Serializes structured data into a JSON-LD script tag for use with `{@html}` inside `<svelte:head>`.
 */
export function jsonLdScript(data: Record<string, unknown>): string {
	// Escaping `<` prevents CMS content from closing the script tag early
	const json = JSON.stringify({ '@context': 'https://schema.org', ...data }).replace(
		/</g,
		'\\u003c'
	);
	return `<script type="application/ld+json">${json}</script>`;
}

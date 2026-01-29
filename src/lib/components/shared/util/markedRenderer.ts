import { type Renderer } from 'marked';

export const renderer: Partial<Renderer> = {
	link({ href, title, text }) {
		const titleAttr = title ? ` title="${title}"` : '';
		return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
	}
};

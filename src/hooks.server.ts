import type { Handle } from '@sveltejs/kit';

const themes = ['light', 'dark'];
const locales = ['fr', 'en'];

export const handle: Handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('theme');
	const locale = event.cookies.get('locale');

	const transformations: Array<(html: string) => string> = [];

	// Handle theme
	if (theme && themes.includes(theme)) {
		transformations.push((html) => 
			html.replace('data-theme=""', `data-theme="${theme}"`)
		);
	}

	// Handle locale
	if (locale && locales.includes(locale)) {
		transformations.push((html) => 
			html.replace('<html lang="fr"', `<html lang="${locale}"`)
		);
	}

	if (transformations.length === 0) {
		return await resolve(event);
	}

	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return transformations.reduce((acc, transform) => transform(acc), html);
		}
	});
};

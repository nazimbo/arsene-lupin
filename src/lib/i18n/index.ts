import { browser } from '$app/environment';
import { init, register, locale } from 'svelte-i18n';

const defaultLocale = 'fr';

register('fr', () => import('./locales/fr.json'));
register('en', () => import('./locales/en.json'));

// Get the initial locale based on environment
const getInitialLocale = () => {
	if (browser) {
		return localStorage.getItem('locale') || 
			window.navigator.language.split('-')[0] || 
			defaultLocale;
	}
	return defaultLocale;
};

const initialLocale = getInitialLocale();

// Initialize with proper initial locale
init({
	fallbackLocale: defaultLocale,
	initialLocale: initialLocale,
	loadingDelay: 200
});

// Set the locale immediately
locale.set(initialLocale);
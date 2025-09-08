import { browser } from '$app/environment';
import { locale as svelteI18nLocale } from 'svelte-i18n';
import { writable, get } from 'svelte/store';

export type Locale = 'fr' | 'en';

const defaultLocale: Locale = 'fr';
const initialLocale: Locale = browser
	? (localStorage.getItem('locale') as Locale) || defaultLocale
	: defaultLocale;

export const locale = writable<Locale>(initialLocale);

// Function to set locale with persistence
export function setLocale(newLocale: Locale) {
	if (browser) {
		// Update localStorage
		localStorage.setItem('locale', newLocale);

		// Update cookie for SSR
		document.cookie = `locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
	}

	// Update svelte-i18n locale
	svelteI18nLocale.set(newLocale);
	
	// Update our store
	locale.set(newLocale);
}

// Function to toggle locale
export function toggleLocale() {
	const current = get(locale);
	const newLocale = current === 'fr' ? 'en' : 'fr';
	setLocale(newLocale);
}
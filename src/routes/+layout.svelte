<script lang="ts">
	import '../app.css';
	import '$lib/i18n'; // Initialize i18n
	import favicon from '$lib/assets/favicon.svg';
	import { setTheme } from '$lib/theme';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import LanguageToggle from '$lib/components/LanguageToggle.svelte';
	import { _, locale } from 'svelte-i18n';

	let { children } = $props();

	// Initialize theme and locale on component mount
	onMount(() => {
		if (browser) {
			const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
			if (savedTheme) {
				setTheme(savedTheme);
			}

			const savedLocale = localStorage.getItem('locale') as 'fr' | 'en';
			if (savedLocale) {
				locale.set(savedLocale);
			}
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white"
>
	<header class="container mx-auto flex items-center justify-between px-4 py-6">
		<nav class="flex gap-6">
			<a href="/" class="font-serif-fine hover:underline" data-sveltekit-preload-data>
				{$_('nav.home')}
			</a>
			<a href="/personnage" class="font-serif-fine hover:underline" data-sveltekit-preload-data>
				{$_('nav.character')}
			</a>
			<a href="/oeuvres" class="font-serif-fine hover:underline" data-sveltekit-preload-data>
				{$_('nav.works')}
			</a>
		</nav>
		<div class="flex items-center gap-2">
			<LanguageToggle />
			<ThemeToggle />
		</div>
	</header>

	<main class="container mx-auto px-4">
		{@render children?.()}
	</main>
</div>

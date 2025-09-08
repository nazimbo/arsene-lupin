<script lang="ts">
	import { locale, toggleLocale } from '$lib/stores/locale';
</script>

<button
	onclick={toggleLocale}
	class="rounded-full px-3 py-1 text-sm font-serif-fine transition-colors duration-200 
		   hover:bg-gray-100 dark:hover:bg-gray-900"
	aria-label={$locale === 'fr' ? 'Switch to English' : 'Passer en français'}
>
	{$locale === 'fr' ? 'EN' : 'FR'}
</button>
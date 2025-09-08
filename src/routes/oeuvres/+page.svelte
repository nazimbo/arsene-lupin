<script lang="ts">
	import ArabesqueS from '$lib/components/ArabesqueS.svelte';
	import { oeuvresTranslated } from '$lib/data/oeuvres-i18n.js';
	import { locale } from '$lib/stores/locale';
	import { _ } from 'svelte-i18n';
	import { SvelteSet } from 'svelte/reactivity';

	let expandedRecueils = new SvelteSet<number>();

	function toggleRecueil(index: number) {
		if (expandedRecueils.has(index)) {
			expandedRecueils.delete(index);
		} else {
			expandedRecueils.add(index);
		}
	}
</script>

<svelte:head>
	<title>{$_('works.title')} - Arsène Lupin</title>
	<meta name="description" content={$_('meta.worksDescription')} />
</svelte:head>

<div class="min-h-screen py-12">
	<div class="mx-auto max-w-4xl px-6">
		<header class="mb-16 text-center">
			<h1 class="font-manuscript mb-6 text-6xl text-black md:text-7xl lg:text-8xl dark:text-white">
				{$_('works.title')}
			</h1>
			<p class="font-serif-fine text-xl font-light text-black dark:text-white">
				{$_('works.subtitle')}
			</p>
		</header>

		<div class="relative">
			{#each oeuvresTranslated as oeuvre, index (oeuvre.titre[$locale])}
				<article class="relative text-center">
					<div class="inline-block">
						{#if oeuvre.type === 'recueil'}
							<button
								onclick={() => toggleRecueil(index)}
								class="text-center transition-opacity hover:opacity-70"
								aria-expanded={expandedRecueils.has(index)}
								aria-controls="recueil-{index}"
							>
								<h2
									class="font-serif-fine text-2xl font-light text-black md:text-3xl dark:text-white"
								>
									{oeuvre.titre[$locale]}
									<span
										class="ml-2 inline-block transition-transform duration-300 {expandedRecueils.has(
											index
										)
											? 'rotate-90'
											: ''}"
									>
										▸
									</span>
								</h2>
								{#if oeuvre.annee}
									<span class="font-serif-fine text-lg text-black dark:text-white">
										{oeuvre.annee}
									</span>
								{/if}
							</button>
						{:else}
							<h2
								class="font-serif-fine text-2xl font-light text-black md:text-3xl dark:text-white"
							>
								{oeuvre.titre[$locale]}
							</h2>
							{#if oeuvre.annee}
								<span class="font-serif-fine text-lg text-black dark:text-white">
									{oeuvre.annee}
								</span>
							{/if}
						{/if}
					</div>

					{#if oeuvre.type === 'recueil' && oeuvre.nouvelles}
						<div
							id="recueil-{index}"
							class="overflow-hidden transition-all duration-500 ease-in-out {expandedRecueils.has(
								index
							)
								? 'mt-4 max-h-[500px] opacity-100'
								: 'max-h-0 opacity-0'}"
						>
							<ul class="space-y-1">
								{#each oeuvre.nouvelles[$locale] as nouvelle (nouvelle)}
									<li
										class="font-serif-fine list-none text-lg font-light text-black dark:text-white"
									>
										{nouvelle}
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</article>

				{#if index < oeuvresTranslated.length - 1}
					<div class="my-24 flex justify-center">
						<ArabesqueS class="rotate-90 text-black dark:text-white" />
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>


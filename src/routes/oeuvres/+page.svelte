<script lang="ts">
	import ArabesqueS from '$lib/components/ArabesqueS.svelte';
	import { oeuvres } from '$lib/data/oeuvres.js';
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
	<title>Les Œuvres - Arsène Lupin</title>
	<meta
		name="description"
		content="Découvrez toutes les aventures d'Arsène Lupin par Maurice Leblanc"
	/>
</svelte:head>

<div class="min-h-screen py-12">
	<div class="mx-auto max-w-4xl px-6">
		<!-- Titre principal -->
		<header class="mb-16 text-center">
			<h1 class="font-manuscript mb-6 text-6xl text-black md:text-7xl lg:text-8xl dark:text-white">
				Les Œuvres
			</h1>
			<p class="font-serif-fine text-xl font-light text-black dark:text-white">
				Le canon lupinien par ordre de parution
			</p>
		</header>

		<!-- Liste des œuvres avec arabesques S verticales -->
		<div class="relative">
			{#each oeuvres as oeuvre, index (oeuvre.titre)}
				<!-- Œuvre -->
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
									{oeuvre.titre}
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
								{oeuvre.titre}
							</h2>
							{#if oeuvre.annee}
								<span class="font-serif-fine text-lg text-black dark:text-white">
									{oeuvre.annee}
								</span>
							{/if}
						{/if}
					</div>

					<!-- Nouvelles (pour les recueils) -->
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
								{#each oeuvre.nouvelles as nouvelle (nouvelle)}
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

				<!-- Arabesque S vertical entre les œuvres (sauf après la dernière) -->
				{#if index < oeuvres.length - 1}
					<div class="my-24 flex justify-center">
						<ArabesqueS class="rotate-90 text-black dark:text-white" />
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	/* Animation subtile pour les arabesques au scroll */
	@keyframes gentle-sway {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(2px);
		}
	}
</style>

<!-- src/routes/oeuvres/+page.svelte -->
<script lang="ts">
    import ArabesqueS from '$lib/components/ArabesqueS.svelte';

	interface Oeuvre {
		titre: string;
		annee?: string;
		type: 'roman' | 'recueil';
		nouvelles?: string[];
	}

	const oeuvres: Oeuvre[] = [
		{
			titre: "Arsène Lupin, gentleman cambrioleur",
			annee: "1907",
			type: "recueil",
			nouvelles: [
				"L'Arrestation d'Arsène Lupin",
				"Arsène Lupin en prison",
				"L'Évasion d'Arsène Lupin",
				"Le Mystérieux Voyageur",
				"Le Collier de la reine",
				"Le Sept de cœur",
				"Le Coffre-fort de madame Imbert",
				"La Perle noire",
				"Herlock Sholmes arrive trop tard"
			]
		},
		{
			titre: "Arsène Lupin contre Herlock Sholmès",
			annee: "1908",
			type: "recueil",
			nouvelles: ["La Dame blonde", "La Lampe juive"]
		},
		{
			titre: "L'Aiguille creuse",
			annee: "1909",
			type: "roman"
		},
		{
			titre: "813",
			annee: "1910",
			type: "roman"
		},
		{
			titre: "Le Bouchon de cristal",
			annee: "1912",
			type: "roman"
		},
		{
			titre: "Les Confidences d'Arsène Lupin",
			annee: "1913",
			type: "recueil",
			nouvelles: [
				"Les Jeux du soleil",
				"L'Anneau nuptial",
				"Le Signe de l'ombre",
				"Le Piège infernal",
				"L'Écharpe de soie rouge",
				"La Mort qui rôde",
				"Édith au cou de cygne",
				"Le Fétu de paille",
				"Le Mariage d'Arsène Lupin"
			]
		},
		{
			titre: "L'Éclat d'obus",
			annee: "1916",
			type: "roman"
		},
		{
			titre: "Le Triangle d'or",
			annee: "1918",
			type: "roman"
		},
		{
			titre: "L'Île aux trente cercueils",
			annee: "1919",
			type: "roman"
		},
		{
			titre: "Les Dents du tigre",
			annee: "1921",
			type: "roman"
		},
		{
			titre: "Les Huit Coups de l'horloge",
			annee: "1923",
			type: "recueil",
			nouvelles: [
				"Au sommet de la tour",
				"La Carafe d'eau",
				"Thérèse et Germaine",
				"Le Film révélateur",
				"Le Cas de Jean-Louis",
				"La Dame à la hache",
				"Des Pas sur la neige",
				"Au dieu Mercure"
			]
		},
		{
			titre: "La Comtesse de Cagliostro",
			annee: "1924",
			type: "roman"
		},
		{
			titre: "La Demoiselle aux yeux verts",
			annee: "1927",
			type: "roman"
		},
		{
			titre: "L'Homme à la peau de bique",
			annee: "1927",
			type: "roman"
		},
		{
			titre: "L'Agence Barnett et Cie",
			annee: "1928",
			type: "roman"
		},
		{
			titre: "La Demeure mystérieuse",
			annee: "1929",
			type: "roman"
		},
		{
			titre: "La Barre-y-va",
			annee: "1931",
			type: "roman"
		},
		{
			titre: "La Femme aux deux sourires",
			annee: "1933",
			type: "roman"
		},
		{
			titre: "Victor de la Brigade mondaine",
			annee: "1933",
			type: "roman"
		},
		{
			titre: "La Cagliostro se venge",
			annee: "1935",
			type: "roman"
		},
		{
			titre: "Les Milliards d'Arsène Lupin",
			annee: "posthume, 1941",
			type: "roman"
		}
	];

	let expandedRecueils: Set<number> = $state(new Set());

	function toggleRecueil(index: number) {
		const newSet = new Set(expandedRecueils);
		if (newSet.has(index)) {
			newSet.delete(index);
		} else {
			newSet.add(index);
		}
		expandedRecueils = newSet;
	}
</script>

<svelte:head>
	<title>Les Œuvres - Arsène Lupin</title>
	<meta name="description" content="Découvrez toutes les aventures d'Arsène Lupin par Maurice Leblanc" />
</svelte:head>

<div class="min-h-screen py-12">
	<div class="max-w-4xl mx-auto px-6">
		<!-- Titre principal -->
		<header class="text-center mb-16">
			<h1 class="font-manuscript text-6xl md:text-7xl lg:text-8xl mb-6 text-black dark:text-white">
				Les Œuvres
			</h1>
			<p class="font-serif-fine text-xl font-light text-black dark:text-white">
				Le canon lupinien par ordre de parution
			</p>
		</header>

		<!-- Liste des œuvres avec arabesques S verticales -->
		<div class="relative">
			{#each oeuvres as oeuvre, index}
				<!-- Œuvre -->
				<article class="relative text-center">
					<div class="inline-block">
						{#if oeuvre.type === 'recueil'}
							<button
								onclick={() => toggleRecueil(index)}
								class="text-center hover:opacity-70 transition-opacity"
								aria-expanded={expandedRecueils.has(index)}
								aria-controls="recueil-{index}"
							>
								<h2 class="font-serif-fine text-2xl md:text-3xl font-light text-black dark:text-white">
									{oeuvre.titre}
									<span class="inline-block ml-2 transition-transform duration-300 {expandedRecueils.has(index) ? 'rotate-90' : ''}">
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
							<h2 class="font-serif-fine text-2xl md:text-3xl font-light text-black dark:text-white">
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
							class="overflow-hidden transition-all duration-500 ease-in-out {expandedRecueils.has(index) ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}"
						>
							<ul class="space-y-1">
								{#each oeuvre.nouvelles as nouvelle}
									<li class="font-serif-fine text-lg font-light text-black dark:text-white list-none">
										{nouvelle}
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</article>

				<!-- Arabesque S vertical entre les œuvres (sauf après la dernière) -->
				{#if index < oeuvres.length - 1}
					<div class="flex justify-center my-24">
						<ArabesqueS class="text-black dark:text-white rotate-90" />
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	/* Animation subtile pour les arabesques au scroll */
	@keyframes gentle-sway {
		0%, 100% { transform: translateX(0); }
		50% { transform: translateX(2px); }
	}
	
	svg {
		animation: gentle-sway 4s ease-in-out infinite;
	}
</style>
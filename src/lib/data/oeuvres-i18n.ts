// src/lib/data/oeuvres-i18n.ts
export interface OeuvreTranslated {
	titre: { fr: string; en: string };
	annee?: string;
	type: 'roman' | 'recueil';
	nouvelles?: { fr: string[]; en: string[] };
}

export const oeuvresTranslated: OeuvreTranslated[] = [
	{
		titre: { 
			fr: 'Arsène Lupin, gentleman cambrioleur',
			en: 'Arsène Lupin, Gentleman Burglar'
		},
		annee: '1907',
		type: 'recueil',
		nouvelles: {
			fr: [
				"L'Arrestation d'Arsène Lupin",
				'Arsène Lupin en prison',
				"L'Évasion d'Arsène Lupin",
				'Le Mystérieux Voyageur',
				'Le Collier de la reine',
				'Le Sept de cœur',
				'Le Coffre-fort de madame Imbert',
				'La Perle noire',
				'Herlock Sholmes arrive trop tard'
			],
			en: [
				"The Arrest of Arsène Lupin",
				'Arsène Lupin in Prison',
				"The Escape of Arsène Lupin",
				'The Mysterious Traveller',
				"The Queen's Necklace",
				'The Seven of Hearts',
				"The Safe of Madame Imbert",
				'The Black Pearl',
				'Sherlock Holmes Arrives Too Late'
			]
		}
	},
	{
		titre: { 
			fr: 'Arsène Lupin contre Herlock Sholmès',
			en: 'Arsène Lupin versus Herlock Sholmes'
		},
		annee: '1908',
		type: 'recueil',
		nouvelles: {
			fr: ['La Dame blonde', 'La Lampe juive'],
			en: ['The Blonde Lady', 'The Jewish Lamp']
		}
	},
	{
		titre: { 
			fr: "L'Aiguille creuse",
			en: 'The Hollow Needle'
		},
		annee: '1909',
		type: 'roman'
	},
	{
		titre: { 
			fr: '813',
			en: '813'
		},
		annee: '1910',
		type: 'roman'
	},
	{
		titre: { 
			fr: 'Le Bouchon de cristal',
			en: 'The Crystal Stopper'
		},
		annee: '1912',
		type: 'roman'
	},
	{
		titre: { 
			fr: "Les Confidences d'Arsène Lupin",
			en: 'The Confessions of Arsène Lupin'
		},
		annee: '1913',
		type: 'recueil',
		nouvelles: {
			fr: [
				'Les Jeux du soleil',
				"L'Anneau nuptial",
				"Le Signe de l'ombre",
				'Le Piège infernal',
				"L'Écharpe de soie rouge",
				'La Mort qui rôde',
				'Édith au cou de cygne',
				'Le Fétu de paille',
				"Le Mariage d'Arsène Lupin"
			],
			en: [
				'The Solar Games',
				'The Wedding Ring',
				'The Sign of the Shadow',
				'The Infernal Trap',
				'The Red Silk Scarf',
				'Death on the Prowl',
				'Edith with the Swan Neck',
				'The Straw',
				'The Marriage of Arsène Lupin'
			]
		}
	},
	{
		titre: { 
			fr: "L'Éclat d'obus",
			en: 'The Shell Shard'
		},
		annee: '1916',
		type: 'roman'
	},
	{
		titre: { 
			fr: "Le Triangle d'or",
			en: 'The Golden Triangle'
		},
		annee: '1918',
		type: 'roman'
	},
	{
		titre: { 
			fr: "L'Île aux trente cercueils",
			en: 'The Island of the Thirty Coffins'
		},
		annee: '1919',
		type: 'roman'
	},
	{
		titre: { 
			fr: 'Les Dents du tigre',
			en: 'The Teeth of the Tiger'
		},
		annee: '1921',
		type: 'roman'
	},
	{
		titre: { 
			fr: "Les Huit Coups de l'horloge",
			en: 'The Eight Strokes of the Clock'
		},
		annee: '1923',
		type: 'recueil',
		nouvelles: {
			fr: [
				'Au sommet de la tour',
				"La Carafe d'eau",
				'Thérèse et Germaine',
				'Le Film révélateur',
				'Le Cas de Jean-Louis',
				'La Dame à la hache',
				'Des Pas sur la neige',
				'Au dieu Mercure'
			],
			en: [
				'At the Top of the Tower',
				'The Water Decanter',
				'Thérèse and Germaine',
				'The Revealing Film',
				'The Case of Jean-Louis',
				'The Lady with the Hatchet',
				'Footprints in the Snow',
				'To the God Mercury'
			]
		}
	},
	{
		titre: { 
			fr: 'La Comtesse de Cagliostro',
			en: 'The Countess of Cagliostro'
		},
		annee: '1924',
		type: 'roman'
	},
	{
		titre: { 
			fr: 'La Demoiselle aux yeux verts',
			en: 'The Girl with the Green Eyes'
		},
		annee: '1927',
		type: 'roman'
	},
	{
		titre: { 
			fr: "L'Homme à la peau de bique",
			en: 'The Man in the Skin of a Goat'
		},
		annee: '1927',
		type: 'roman'
	},
	{
		titre: { 
			fr: "L'Agence Barnett et Cie",
			en: 'The Barnett Agency'
		},
		annee: '1928',
		type: 'roman'
	},
	{
		titre: { 
			fr: 'La Demeure mystérieuse',
			en: 'The Mysterious Mansion'
		},
		annee: '1929',
		type: 'roman'
	},
	{
		titre: { 
			fr: 'La Barre-y-va',
			en: 'The Mystery of the Green Ruby'
		},
		annee: '1931',
		type: 'roman'
	},
	{
		titre: { 
			fr: 'La Femme aux deux sourires',
			en: 'The Woman with Two Smiles'
		},
		annee: '1933',
		type: 'roman'
	},
	{
		titre: { 
			fr: 'Victor de la Brigade mondaine',
			en: 'Victor of the Vice Squad'
		},
		annee: '1933',
		type: 'roman'
	},
	{
		titre: { 
			fr: 'La Cagliostro se venge',
			en: 'The Revenge of the Countess of Cagliostro'
		},
		annee: '1935',
		type: 'roman'
	},
	{
		titre: { 
			fr: "Les Milliards d'Arsène Lupin",
			en: 'The Billions of Arsène Lupin'
		},
		annee: 'posthume, 1941',
		type: 'roman'
	}
];
export interface Oeuvre {
	titre: string;
	annee?: string;
	type: 'roman' | 'recueil';
	nouvelles?: string[];
}

export const oeuvres: Oeuvre[] = [
	{
		titre: 'Arsène Lupin, gentleman cambrioleur',
		annee: '1907',
		type: 'recueil',
		nouvelles: [
			"L'Arrestation d'Arsène Lupin",
			'Arsène Lupin en prison',
			"L'Évasion d'Arsène Lupin",
			'Le Mystérieux Voyageur',
			'Le Collier de la reine',
			'Le Sept de cœur',
			'Le Coffre-fort de madame Imbert',
			'La Perle noire',
			'Herlock Sholmes arrive trop tard'
		]
	},
	{
		titre: 'Arsène Lupin contre Herlock Sholmès',
		annee: '1908',
		type: 'recueil',
		nouvelles: ['La Dame blonde', 'La Lampe juive']
	},
	{
		titre: "L'Aiguille creuse",
		annee: '1909',
		type: 'roman'
	},
	{
		titre: '813',
		annee: '1910',
		type: 'roman'
	},
	{
		titre: 'Le Bouchon de cristal',
		annee: '1912',
		type: 'roman'
	},
	{
		titre: "Les Confidences d'Arsène Lupin",
		annee: '1913',
		type: 'recueil',
		nouvelles: [
			'Les Jeux du soleil',
			"L'Anneau nuptial",
			"Le Signe de l'ombre",
			'Le Piège infernal',
			"L'Écharpe de soie rouge",
			'La Mort qui rôde',
			'Édith au cou de cygne',
			'Le Fétu de paille',
			"Le Mariage d'Arsène Lupin"
		]
	},
	{
		titre: "L'Éclat d'obus",
		annee: '1916',
		type: 'roman'
	},
	{
		titre: "Le Triangle d'or",
		annee: '1918',
		type: 'roman'
	},
	{
		titre: "L'Île aux trente cercueils",
		annee: '1919',
		type: 'roman'
	},
	{
		titre: 'Les Dents du tigre',
		annee: '1921',
		type: 'roman'
	},
	{
		titre: "Les Huit Coups de l'horloge",
		annee: '1923',
		type: 'recueil',
		nouvelles: [
			'Au sommet de la tour',
			"La Carafe d'eau",
			'Thérèse et Germaine',
			'Le Film révélateur',
			'Le Cas de Jean-Louis',
			'La Dame à la hache',
			'Des Pas sur la neige',
			'Au dieu Mercure'
		]
	},
	{
		titre: 'La Comtesse de Cagliostro',
		annee: '1924',
		type: 'roman'
	},
	{
		titre: 'La Demoiselle aux yeux verts',
		annee: '1927',
		type: 'roman'
	},
	{
		titre: "L'Homme à la peau de bique",
		annee: '1927',
		type: 'roman'
	},
	{
		titre: "L'Agence Barnett et Cie",
		annee: '1928',
		type: 'roman'
	},
	{
		titre: 'La Demeure mystérieuse',
		annee: '1929',
		type: 'roman'
	},
	{
		titre: 'La Barre-y-va',
		annee: '1931',
		type: 'roman'
	},
	{
		titre: 'La Femme aux deux sourires',
		annee: '1933',
		type: 'roman'
	},
	{
		titre: 'Victor de la Brigade mondaine',
		annee: '1933',
		type: 'roman'
	},
	{
		titre: 'La Cagliostro se venge',
		annee: '1935',
		type: 'roman'
	},
	{
		titre: "Les Milliards d'Arsène Lupin",
		annee: 'posthume, 1941',
		type: 'roman'
	}
];

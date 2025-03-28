import { PaintingStyle } from '../types';

export const paintingCollections: PaintingStyle[] = [
  {
    id: 'impressionism',
    name: 'Impressionnisme',
    description: "Caractérisé par de petits coups de pinceau et l'accent mis sur la lumière",
    paintings: [
      {
        id: 'monet-1',
        title: 'Les Nymphéas',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Claude_Monet_038.jpg/2880px-Claude_Monet_038.jpg',
        artist: 'Claude Monet',
        year: '1916',
        description: "Une interprétation des célèbres nymphéas de Giverny, capturant la lumière et les reflets sur l'eau."
      },
      {
        id: 'monet-2',
        title: "Le Jardin de l'artiste à Giverny",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg/700px-Monet_-_Monets_Garten_in_Giverny.jpg',
        artist: 'Claude Monet',
        year: '1900',
        description: 'Un chemin de jardin paisible, peint dans le style impressionniste caractéristique de Monet.'
      },
      {
        id: 'monet-3',
        title: 'Impression, Soleil Levant',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/520px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg',
        artist: 'Claude Monet',
        year: '1872',
        description: "Un lever de soleil vibrant, œuvre fondatrice de l'impressionnisme."
      },
      {
        id: 'monet-4',
        title: 'La Gare Saint-Lazare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/La_Gare_Saint-Lazare_-_Claude_Monet.jpg/540px-La_Gare_Saint-Lazare_-_Claude_Monet.jpg',
        artist: 'Claude Monet',
        year: '1877',
        description: 'Une scène animée représentant le dynamisme urbain avec un jeu de lumière caractéristique de Monet.'
      }
    ]
  },
  {
    id: 'abstract',
    name: 'Art Abstrait',
    description: 'Art non représentatif utilisant formes, couleurs et compositions',
    paintings: [
      {
        id: 'kandinsky-1',
        title: 'Composition VIII',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Vassily_Kandinsky%2C_1923_-_Composition_8%2C_huile_sur_toile%2C_140_cm_x_201_cm%2C_Mus%C3%A9e_Guggenheim%2C_New_York.jpg/520px-Vassily_Kandinsky%2C_1923_-_Composition_8%2C_huile_sur_toile%2C_140_cm_x_201_cm%2C_Mus%C3%A9e_Guggenheim%2C_New_York.jpg',
        artist: 'Vassily Kandinsky',
        year: '1923',
        description: 'Composition géométrique, emblématique du mouvement abstrait.'
      },
      {
        id: 'mondrian-1',
        title: 'Broadway Boogie Woogie',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg/500px-Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg',
        artist: 'Piet Mondrian',
        year: '1942',
        description: 'Une œuvre abstraite célébrant le dynamisme urbain par des couleurs primaires.'
      },
      {
        id: 'abstract-3',
        title: 'Victory Boogie Woogie',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Piet_Mondriaan_Victory_Boogie_Woogie.jpg/960px-Piet_Mondriaan_Victory_Boogie_Woogie.jpg',
        artist: 'Piet Mondrian',
        year: '1944',
        description: 'Dernière œuvre inachevée de Mondrian.'
      },
      {
        id: 'abstract-4',
        title: 'Jaune-Rouge-Bleu',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kandinsky_-_Jaune_Rouge_Bleu.jpg/520px-Kandinsky_-_Jaune_Rouge_Bleu.jpg',
        artist: 'Vassily Kandinsky',
        year: '1925',
        description: 'Une étude abstraite de couleurs et de formes géométriques.'
      }
    ]
  },
  {
    id: 'surrealism',
    name: 'Surréalisme',
    description: 'Imagerie onirique et inconsciente',
    paintings: [
      {
        id: 'dali-1',
        title: 'La Persistance de la mémoire',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
        artist: 'Salvador Dalí',
        year: '1931',
        description: 'Une exploration surréaliste du temps et de la réalité, dans le style caractéristique de Dalí.'
      },
      {
        id: 'magritte-1',
        title: 'Le Fils de l\'Homme',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Magritte_TheSonOfMan.jpg',
        artist: 'René Magritte',
        year: '1964',
        description: 'Une œuvre énigmatique jouant sur la perception et la réalité, typique de Magritte.'
      },
      {
        id: 'surreal-3',
        title: 'La Bohémienne endormie',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/La_Boh%C3%A9mienne_endormie.jpg/700px-La_Boh%C3%A9mienne_endormie.jpg',
        artist: 'Henri Rousseau',
        year: '1897',
        description: 'Un paysage surréaliste où une bohémienne dort paisiblement sous un ciel étoilé.'
      },
      {
        id: 'surreal-4',
        title: 'Les Éléphants',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/43/Dali_Elephants.jpg',
        artist: 'Salvador Dalí',
        year: '1948',
        description: 'Une représentation étrange et fascinante d\'éléphants aux longues pattes.'
      }
    ]
  },
  {
    id: 'renaissance',
    name: 'Renaissance',
    description: 'Renouveau classique avec perspective et réalisme',
    paintings: [
      {
        id: 'davinci-1',
        title: 'La Joconde',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_natural_color.jpg/520px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_natural_color.jpg',
        artist: 'Léonard de Vinci',
        year: '1503',
        description: 'Le portrait le plus célèbre du monde, avec son regard énigmatique et son sfumato.'
      },
      {
        id: 'botticelli-1',
        title: 'La Naissance de Vénus',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/520px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
        artist: 'Sandro Botticelli',
        year: '1485',
        description: 'Une représentation emblématique de la beauté et de la mythologie.'
      },
      {
        id: 'renaissance-3',
        title: 'L\'École d\'Athènes',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/520px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
        artist: 'Raphaël',
        year: '1511',
        description: 'Une fresque rassemblant les grands philosophes de l\'Antiquité.'
      },
      {
        id: 'renaissance-4',
        title: 'David',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/%27David%27_by_Michelangelo_Fir_JBU004.jpg/520px-%27David%27_by_Michelangelo_Fir_JBU004.jpg',
        artist: 'Michel-Ange',
        year: '1504',
        description: 'Une sculpture magistrale représentant la force et la beauté humaine.'
      }
    ]
  },
  {
    id: 'postimpressionism',
    name: 'Post-Impressionnisme',
    description: 'Couleurs audacieuses et impact émotionnel',
    paintings: [
      {
        id: 'vangogh-1',
        title: 'La Nuit étoilée',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/520px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
        artist: 'Vincent van Gogh',
        year: '1889',
        description: 'Un paysage nocturne tourbillonnant et vibrant de mouvement.'
      },
      {
        id: 'cezanne-1',
        title: 'Les Joueurs de cartes',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg/520px-Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg',
        artist: 'Paul Cézanne',
        year: '1892',
        description: 'Un chef-d\'œuvre du post-impressionnisme représentant des joueurs de cartes.'
      },
      {
        id: 'postimpressionism-3',
        title: 'Les Tournesols',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/520px-Vincent_Willem_van_Gogh_127.jpg',
        artist: 'Vincent van Gogh',
        year: '1888',
        description: 'Une série de tableaux représentant des tournesols vibrants de lumière et de texture.'
      },
      {
        id: 'postimpressionism-4',
        title: 'Le Café de nuit',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vincent_Willem_van_Gogh_076.jpg/600px-Vincent_Willem_van_Gogh_076.jpg',
        artist: 'Vincent van Gogh',
        year: '1888',
        description: 'Une scène nocturne éclairée par la lumière chaude du café.'
      }
    ]
  },
  {
    id: 'cubism',
    name: 'Cubisme',
    description: 'Perspectives multiples et formes géométriques',
    paintings: [
           {
        id: 'cubism-2',
        title: 'Portrait de Pablo Picasso',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg/520px-Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg',
        artist: 'Juan Gris',
        year: '1912',
        description: 'Un exemple du cubisme synthétique où formes géométriques et aplats de couleur s’unissent pour représenter Picasso.'
      },
        {
        id: 'cubism-4',
        title: 'Femme au cheval',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Jean_Metzinger%2C_1911-12%2C_La_Femme_au_Cheval_-_The_Rider.jpg/960px-Jean_Metzinger%2C_1911-12%2C_La_Femme_au_Cheval_-_The_Rider.jpg',
        artist: 'Jean Metzinger',
        year: '1911–1912',
        description: 'Un chef-d’œuvre du cubisme analytique, combinant fragmentation de la forme, perspective multiple et élégance féminine.'
      },

      {
        id: 'cubism-3',
        title: 'Homme à la guitare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Georges_Braque%2C_1911-12%2C_Man_with_a_Guitar_%28Figure%2C_L%E2%80%99homme_%C3%A0_la_guitare%29%2C_oil_on_canvas%2C_116.2_x_80.9_cm_%2845.75_x_31.9_in%29%2C_Museum_of_Modern_Art%2C_New_York.jpg/852px-thumbnail.jpg?20150406124530',
        artist: 'Georges Braque',
        year: '1911',
        description: 'Un chef-d\'œuvre du cubisme analytique.'
      },
      {
      id: 'cubism-1',
      title: 'Maisons et arbre',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Georges_Braque%2C_1908%2C_Maisons_et_arbre%2C_oil_on_canvas%2C_40.5_x_32.5_cm%2C_Lille_M%C3%A9tropole_Museum_of_Modern%2C_Contemporary_and_Outsider_Art.jpg/540px-Georges_Braque%2C_1908%2C_Maisons_et_arbre%2C_oil_on_canvas%2C_40.5_x_32.5_cm%2C_Lille_M%C3%A9tropole_Museum_of_Modern%2C_Contemporary_and_Outsider_Art.jpg',
      artist: 'Georges Braque',
      year: '1908',
      description: 'Une œuvre cubiste précoce montrant la décomposition des formes naturelles en volumes géométriques simples.'
    },
    ]
  },
  {
    id: 'contemporary',
    name: 'Art Contemporain',
    description: 'Interprétations modernes et techniques mixtes',
    paintings: [
      {
        id: 'contemporary-1',
        title: 'Campbell\'s Soup Cans',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Campbells_Soup_Cans_MOMA.jpg',
        artist: 'Andy Warhol',
        year: '1962',
        description: 'Une icône du pop art représentant des boîtes de soupe Campbell.'
      },
      {
        id: 'contemporary-2',
        title: 'Balloon Dog',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/65/Balloon_Dog_%28Blue%29_by_Jeff_Koons%2C_The_Broad.jpg',
        artist: 'Jeff Koons',
        year: '1994',
        description: 'Une sculpture en acier inoxydable brillant.'
      },
      {
        id: 'contemporary-3',
        title: 'Love',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/LOVE_%281967%29.jpg/440px-LOVE_%281967%29.jpg',
        artist: 'Robert Indiana',
        year: '1967',
        description: 'Une sculpture emblématique avec le mot "LOVE".'
      },
      {
        id: 'contemporary-4',
        title: 'Untitled (1981)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/11/Untitled-Head-Jean-Michel_Basquiat-1981.jpg',
        artist: 'Jean-Michel Basquiat',
        year: '1981',
        description: 'Une œuvre emblématique de Basquiat, mêlant graffiti, abstraction et art contemporain.'
      }
    ]
  }
];

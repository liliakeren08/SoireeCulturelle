export const dishes = [
  {
    id: 1,
    name: "Mini Pizza",
    category: "entree",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    story: "Symbole universel de partage et de fête, la pizza est revisitée ici en format miniature. Une bouchée croustillante et chaleureuse pour ouvrir l'appétit de vos invités avec une touche familière et réconfortante.",
    ingredients: [
      "Pâte à pizza fine artisanale",
      "Sauce tomate mijotée aux herbes de Provence",
      "Mozzarella fondante et dorée",
      "Olives noires parfumées",
      "Origan sauvage"
    ],
    allergens: ["Gluten", "Lactose"],
    badges: ["🥦 Végétarien"],
    spicyLevel: 0
  },
  {
    id: 2,
    name: "Samoussa",
    category: "entree",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80",
    story: "Importé d'Asie centrale et devenu un pilier des célébrations en Afrique et en Europe, ce triangle croustillant renferme une farce savoureuse et délicatement parfumée aux épices douces.",
    ingredients: [
      "Feuilles de brick croustillantes",
      "Farce de bœuf haché et oignons confits",
      "Coriandre fraîche ciselée",
      "Mélange d'épices douces (curry, cumin)"
    ],
    allergens: ["Gluten"],
    badges: ["🌶️ Épicé Doux"],
    spicyLevel: 1
  },
  {
    id: 3,
    name: "Salade Verte",
    category: "entree",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    story: "Une touche de fraîcheur indispensable pour équilibrer la richesse de notre buffet culinaire. Une salade croquante et colorée agrémentée de notre vinaigrette secrète.",
    ingredients: [
      "Laitue romaine et frisée croquante",
      "Tomates cerises juteuses",
      "Concombres émincés",
      "Oignons rouges doux",
      "Vinaigrette maison à l'huile d'olive extra-vierge"
    ],
    allergens: [],
    badges: ["🥦 Végétarien", "🌱 Végan", "🌾 Sans Gluten"],
    spicyLevel: 0
  },
  {
    id: 4,
    name: "Nems",
    category: "entree",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    story: "Emblème de la cuisine d'Asie du Sud-Est adopté aux quatre coins du globe, ces rouleaux impériaux sont frits jusqu'à obtention d'une texture dorée et croustillante irrésistible.",
    ingredients: [
      "Feuilles de riz croustillantes",
      "Farce de poulet haché fondant",
      "Vermicelles de soja",
      "Champignons noirs sauvages",
      "Carottes râpées",
      "Menthe fraîche pour l'accompagnement"
    ],
    allergens: [],
    badges: ["🌾 Sans Gluten"],
    spicyLevel: 0
  },
  {
    id: 5,
    name: "Attiéké Poulet",
    category: "plat",
    image: "/imageAttiekePoulet.jpg",
    story: "Le trésor culinaire incontournable de la Côte d'Ivoire ! L'attiéké est une semoule fine de manioc fermentée à la vapeur, offrant une texture légère et un goût délicatement acidulé. Il est servi ici avec du poulet braisé croustillant et une garniture d'oignons doux grillés.",
    ingredients: [
      "Semoule de manioc fermentée (attiéké)",
      "Poulet mariné aux épices ivoiriennes et braisé au feu",
      "Oignons confits et tomates fraîches en dés",
      "Piment frais moulu",
      "Bouillon aromatique traditionnel"
    ],
    allergens: [],
    badges: ["👑 Populaire", "🌾 Sans Gluten", "🌶️ Épicé Moyen"],
    spicyLevel: 2
  },
  {
    id: 6,
    name: "Alloco",
    category: "plat",
    image: "https://images.unsplash.com/photo-1628294895550-9ecb3c2ee17b?auto=format&fit=crop&w=600&q=80",
    story: "Le roi de la street-food en Afrique de l'Ouest ! L'Alloco se compose de bananes plantains bien mûres frites dans une huile dorée. Tendres, sucrées et fondantes, elles incarnent le partage et la convivialité festive.",
    ingredients: [
      "Bananes plantains très mûres (jaunes à points noirs)",
      "Huile de friture dorée",
      "Pincée de sel marin",
      "Sauce tomate-piment maison en accompagnement"
    ],
    allergens: [],
    badges: ["🥦 Végétarien", "🌱 Végan", "🌾 Sans Gluten"],
    spicyLevel: 1
  },
  {
    id: 7,
    name: "Pâté Chinois",
    category: "plat",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b98c6?auto=format&fit=crop&w=600&q=80",
    story: "Le réconfort absolu venu tout droit du Québec. Un classique traditionnel construit en trois couches sacrées : bœuf haché assaisonné, maïs crémeux et maïs en grains doux, le tout surmonté d'une onctueuse purée de pommes de terre gratinée au beurre.",
    ingredients: [
      "Viande de bœuf hachée mijotée aux oignons",
      "Maïs en grains et maïs en crème fondant",
      "Purée de pommes de terre maison riche au beurre",
      "Pincée de paprika fumé pour gratiner"
    ],
    allergens: ["Lactose"],
    badges: ["🏠 Réconfortant"],
    spicyLevel: 0
  },
  {
    id: 8,
    name: "Tchep (Tiep Bou Dienn)",
    category: "plat",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=600&q=80",
    story: "Plat national du Sénégal et classé au patrimoine mondial de l'UNESCO sous le nom de Tiebou Dienn. C'est un riz mijoté dans une sauce tomate parfumée à l'ail et aux piments, accompagné de légumes tropicaux gorgés de sauce.",
    ingredients: [
      "Riz brisé cuit dans le bouillon aromatique",
      "Concentré de tomate de qualité",
      "Légumes mijotés (carotte, chou, manioc, aubergine)",
      "Herbes aromatiques, oignons et ail caramélisés",
      "Piment antillais pour parfumer la sauce"
    ],
    allergens: ["Céleri"],
    badges: ["👑 Populaire", "🌶️ Épicé Moyen"],
    spicyLevel: 2
  },
  {
    id: 9,
    name: "Poulet Mayo",
    category: "plat",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
    story: "Une merveille de la culture urbaine de Kinshasa (RDC). Ce plat combine la tendreté du poulet grillé au charbon de bois avec l'onctuosité et la gourmandise d'une mayonnaise épicée maison, mélangée avec des poivrons frais croustillants.",
    ingredients: [
      "Poulet rôti et effiloché",
      "Mayonnaise crémeuse de qualité",
      "Poivrons verts, jaunes et rouges croquants",
      "Oignons doux émincés",
      "Mélange secret d'épices congolaises"
    ],
    allergens: ["Œufs"],
    badges: ["✨ Gourmand"],
    spicyLevel: 1
  },
  {
    id: 10,
    name: "Foufou Sauce Claire",
    category: "plat",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    story: "Le foufou est une pâte onctueuse à base de manioc cuit et pilé, véritable pilier de la table dans de nombreux pays d'Afrique centrale. Il est ici servi avec la traditionnelle sauce claire, un bouillon d'aubergines et de tomates parfumé.",
    ingredients: [
      "Boule de foufou de manioc lisse et chaude",
      "Viande de bœuf mijotée",
      "Bouillon clair à base de tomates et d'aubergines africaines",
      "Piment rouge frais et oignons",
      "Épices et herbes aromatiques locales"
    ],
    allergens: [],
    badges: ["🌍 Traditionnel", "🌾 Sans Gluten"],
    spicyLevel: 1
  },
  {
    id: 11,
    name: "Foutou Graine",
    category: "plat",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
    story: "Plat de fête ivoirien. Le foutou (banane plantain et manioc pilés) est nappé d'une sauce onctueuse extraite des noix de palme, offrant des arômes boisés et riches.",
    ingredients: [
      "Foutou de banane plantain et manioc pilés",
      "Sauce graine de palme onctueuse et veloutée",
      "Tripes et morceaux de bœuf tendres",
      "Poisson fumé émietté",
      "Écrevisses séchées pour aromatiser"
    ],
    allergens: ["Poissons"],
    badges: ["🌍 Traditionnel", "🍲 Copieux"],
    spicyLevel: 1
  },
  {
    id: 12,
    name: "Eru Foufou",
    category: "plat",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    story: "Une icône culturelle et culinaire de la cuisine camerounaise. Le Eru est un ragoût de feuilles sauvages d'eru et de waterleaf sautées à l'huile de palme rouge avec de la peau de bœuf fondante. Il s'accompagne d'un foufou de manioc élastique.",
    ingredients: [
      "Feuilles d'eru finement ciselées",
      "Feuilles de waterleaf (épinards sauvages)",
      "Peau de bœuf tendre (kanda) et morceaux de viande",
      "Huile de palme rouge naturelle",
      "Écrevisses séchées moulues",
      "Servi avec son foufou de manioc"
    ],
    allergens: ["Crustacés"],
    badges: ["🌍 Traditionnel", "🌶️ Épicé Moyen"],
    spicyLevel: 2
  },
  {
    id: 13,
    name: "Tiramisu",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
    story: "Le dessert italien de renommée mondiale, combinant à la perfection le goût robuste du café fort et l'onctuosité aérienne du mascarpone sucré.",
    ingredients: [
      "Crème onctueuse au mascarpone et œufs frais",
      "Biscuits cuillères italiens",
      "Café expresso serré non sucré",
      "Cacao amer en poudre pour la finition"
    ],
    allergens: ["Lactose", "Œufs", "Gluten"],
    badges: ["🥦 Végétarien", "🇮🇹 Classique"],
    spicyLevel: 0
  },
  {
    id: 14,
    name: "Deguê",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80",
    story: "Une douceur lactée incontournable de l'Afrique de l'Ouest. Rafraîchissant et onctueux, il marie des grumeaux de couscous de mil cuits à la vapeur avec un yaourt sucré parfumé à la vanille et à la muscade.",
    ingredients: [
      "Couscous de mil cuit à la vapeur (grumeaux fins)",
      "Lait caillé ou yaourt nature crémeux",
      "Lait concentré sucré",
      "Extrait naturel de vanille",
      "Une pincée de noix de muscade râpée"
    ],
    allergens: ["Lactose"],
    badges: ["🥦 Végétarien", "🍃 Rafraîchissant"],
    spicyLevel: 0
  },
  {
    id: 15,
    name: "Cheese cake",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=600&q=80",
    story: "Originaire de New York, ce gâteau est célèbre pour son contraste de textures : un fond croustillant à base de biscuits et de beurre fondant, surmonté d'un appareil crémeux et velouté au fromage frais.",
    ingredients: [
      "Base biscuitée croustillante de Spéculoos au beurre",
      "Appareil au fromage frais (cream cheese)",
      "Sucre fin et zeste de citron vert",
      "Coulis de framboises sauvages acidulé"
    ],
    allergens: ["Lactose", "Gluten"],
    badges: ["🥦 Végétarien", "🇺🇸 Classique"],
    spicyLevel: 0
  },
  {
    id: 16,
    name: "Brochette de Fruits",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80",
    story: "Une explosion de fraîcheur, de couleurs et de vitamines pour clore notre festin de la plus légère des manières, accompagnée d'un filet de chocolat noir intense.",
    ingredients: [
      "Fraises juteuses et fraîches",
      "Dés d'ananas rôti sucré",
      "Billes de melon rafraîchissantes",
      "Kiwi acidulé",
      "Raisin noir sans pépins",
      "Sauce au chocolat noir pour le nappage"
    ],
    allergens: [],
    badges: ["🥦 Végétarien", "🌱 Végan", "🌾 Sans Gluten", "🎈 Léger"],
    spicyLevel: 0
  }
];

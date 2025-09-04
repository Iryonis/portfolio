export default {
  en: 'Anglais',
  fr: 'Français',
  home_link: 'Accueil',
  about_link: 'À propos',
  projects_link: 'Projets',
  links_link: 'Liens',
  about_text:
    "Je suis Guilhem BONNEFOUS, actuellement étudiant en master d'Informatique à l'Université de Bordeaux, FRANCE, de 21 ans. Sur mon temps libre, j'aime lire de la fantaisie et de la science-fiction, jouer en ligne avec des amis, et avancer mes projets de programmation. Concernant l'informatique, j'aime particulièrement le développement web et la découverte de toutes technologies permettant d'obtenir un résultat visuel et concret.",
  about_text2:
    "Sur cette page, vous allez pouvoir découvrir mon parcours dans l'informatique, mes compétences ainsi que les liens vers mes réseaux. Vous pouvez également voir mes projets personnels, réalisés dans le cadre de mes études ou de mon temps libre, sur la page suivante.",
  skills: 'Compétences',
  see_more: 'En savoir plus...',
  tools: 'Outils',

  // SKILLS

  tier_1: "J'ai utilisé ces outils à plusieurs reprises ET de façon avancée...",
  tier_2: "J'ai utilisé ces outils à plusieurs reprises de façon basique...",
  tier_3: "J'ai déjà utilisé ces outils...",
  title_text_skills: "En utilisant {lang}, j'ai...",
  text_one_skills: 'réalisé {count} projet(s)',
  text_two_skills: 'suivi {count} cours',

  // CAREER

  career: 'Parcours',
  colon: ' :',
  2021: {
    1: "Première année de licence en informatique à l'",
    2: "Interviews de développeurs d'Asobo Studio et d'Ubisoft Bordeaux",
    3: "Travail d'été à la Paierie Régionale de Nouvelle-Aquitaine"
  },
  2022: {
    1: 'Deuxième année de licence en informatique',
    2: "Stage d'un mois en été pour la création d'un site web permettant de visionner les émissions de CO2 des membres du ",
    3: 'Participation à '
  },
  2023: {
    1: 'Troisième année de licence en informatique',
    2: "Job étudiant à temps partiel tout au long de l'année pour continuer le site commencé durant le stage de 2022 au LaBRI",
    3: 'Participation à la '
  },
  2024: {
    1: 'Première année de master en informatique',
    2: 'Participation à la ',
    3: "Développement d'un addon pour le jeu vidéo World of Warcraft en Lua",
    4: "Développement d'une extension Chrome"
  },
  2025: {
    1: 'Deuxième année de master en informatique... (en cours)'
  },

  // PROJECTS

  project_more: 'En savoir plus sur Github',
  project_site: 'Voir le site',
  show_more: 'Voir plus',
  show_less: 'Voir moins',
  projects: [
    {
      title: 'SWYT : Stop Wasting Your Time',
      date: 'Été 2025',
      image: 'swyt.webp',
      description:
        "SWYT (Stop Wasting Your Time) est une extension Chrome, développée en Javascript. Elle permet de limiter le temps passé chaque jour à visionner des YouTube Shorts. L'utilisateur peut choisir un temps quotidien à ne pas dépasser, et l'extension va chronométrer le temps passé à visionner des YouTube Shorts, et si ce temps est dépassé, elle va rediriger l'utilisateur et l'empêcher de visionner plus de Shorts jusqu'au lendemain. C'est un projet personnel me permettant à la fois de développer un outil m'étant utile, et à la fois de découvrir le développement d'extension Chrome (et donc les manifest et l'API Chrome).",
      github: 'https://github.com/Iryonis/stop-wasting-your-time',
      site: '',
      type: 'Extension de navigateur',
      tool: 'HTML, CSS & JavaScript',
      lang: 'Anglais & français',
      access: 'Accessibilité ? Oui'
    },
    {
      title: 'EMH : Earthen Master Hammer Addon',
      date: 'Printemps 2025',
      image: 'emh.webp',
      description:
        "Earthen Master Hammer Addon (EMH) est un addon pour le jeu vidéo World of Warcraft, développé en Lua. Il permet de simplifier l'utilisation de l'objet de forgeron Marteau de maître terrestre. C'était mon premier vrai projet personnel et la première fois que j'ai programmé un addon pour Wow (j'ai donc découvert à la fois le langage Lua et l'API de Wow). Ce fut au début un peu compliqué à cause du manque de documentation et de tutoriels poussés, mais ce fut très gratifiant de réussir à créer un addon m'étant utile au quotidien en jeu.",
      github: 'https://github.com/Iryonis/EarthenMasterHammerAddon',
      site: 'https://www.curseforge.com/wow/addons/emh',
      type: 'Addon pour jeu vidéo',
      tool: 'Lua',
      lang: 'Anglais, français & plus',
      access: 'Accessibilité ? Non'
    },
    {
      title: 'LaBRI GHG Viewer',
      date: 'Juin 2023 à Juin 2024',
      image: 'ghg_viewer.webp',
      description:
        "Site web réalisé pour le LaBRI (Laboratoire Bordelais de Recherche en Informatique) durant un stage d'un mois en juin 2023, puis continué en job étudiant à temps partiel durant l'année universitaire 2023-2024. Le but était de créer un site web permettant aux membres du laboratoire de visionner les émissions de CO2 qu'ils ont générées par leurs déplacements professionnels. Le but était également d'organiser des données provenant de plusieurs fichiers .csv en une sorte de base de données locales, grâce au langage Python. Une fois cela fait, j'ai donc pu codé le site web et j'ai notamment utilisé des technologies comme Tailwind, Parcel ou encore ChartJS. Le site permet donc de visualiser les émissions globales, par personne, par département et par équipe, ainsi que de permettre de faire des prévisions pour les années à venir. J'ai codé le site et les scripts Python entièrement seul, avec l'aide et les conseils de deux tuteurs. Ce projet fut très enrichissant, car il m'a permis d'améliorer mes compétences en développement web et de créer un projet de A à Z, en suivant un cahier des charges et les retours de mes tuteurs, chaque semaine. Afin de ne pas révéler de données sensibles, le site et le Github sont en privé, et l'image est censurée.",
      github: '',
      site: '',
      type: 'Site web & Scripts',
      tool: 'HTML, Tailwind CSS, Javascript, Python & Parcel',
      lang: 'Anglais',
      access: 'Accessibilité ? Oui'
    },
    {
      title: 'Takuzu, version site web',
      date: 'De mars à juin 2023',
      image: 'takuzu_web.webp',
      description:
        "Takuzu est un projet réalisé par quatre étudiants lors de leur deuxième année en informatique. L'objectif était de créer un site web permettant à l'utilisateur de jouer au jeu Takuzu (également connu sous le nom de Unruly ou Binairo), codé précédemment en C. Il s'agit de la troisième partie du projet (après les versions en terminal et en interface graphique). J'ai codé la majeure partie du site web, et c'était la première fois que je mettais en place un mode nuit fait maison.",
      github: 'https://github.com/Iryonis/takuzu-06c',
      site: 'https://guilhem-bonnefous.emi.u-bordeaux.fr/refeartgui2306c/',
      type: 'Jeu vidéo sur site web',
      tool: 'HTML, CSS & JavaScript',
      lang: 'Anglais',
      access: 'Accessibilité ? Oui'
    },
    {
      title: 'Takuzu, version bureau',
      date: 'De septembre 2022 à mars 2023',
      image: 'takuzu_desktop.webp',
      description:
        "Takuzu est un projet réalisé par quatre étudiants lors de leur deuxième année en informatique. L'objectif était de créer le jeu Takuzu (également connu sous le nom de Unruly ou Binairo) en utilisant le langage C, et d'explorer les bibliothèques et outils utilisés dans le développement de projets. Il s'agit des première et deuxième parties du projet, que l'on peut résumer comme étant 'jeu en terminal' et 'jeu avec interface graphique'. L'interface graphique a été réalisée avec un thème Le Seigneur des Anneaux en tête, et tous les assets graphiques ont été faits à la main par un ami (sauf le fond).",
      github: 'https://github.com/Iryonis/takuzu-06c',
      site: '',
      type: 'Jeu vidéo sur ordinateur',
      tool: 'C, Cmake & SDL2',
      lang: 'Anglais',
      access: 'Accessibilité ? Non'
    },
    {
      title: 'NDI2023',
      date: '7 et 8 décembre 2023',
      image: 'NDI2023.webp',
      description:
        "Site web réalisé pour la Nuit de l'Info 2023, par l'équipe \"Gragas 404 Not Found\". La Nuit de l'Info est un événement annuel organisé en décembre dans les universités françaises qui dure une nuit et où le but est de coder un site web avec des défis, de s'amuser et de rencontrer des entreprises. Le sujet de cette année était \"Faire face au changement climatique : le vrai du faux\", et était parrainé par l'association Réseau Action Climat.",
      github: 'https://github.com/Roirtur/NDI2023',
      site: 'https://roirtur.github.io/NDI2023/',
      type: 'Site web',
      tool: 'Angular',
      lang: 'Français',
      access: 'Accessibilité ? Non'
    },
    {
      title: 'UBGarden',
      date: 'Mai à Juin 2023',
      image: 'UBGarden.webp',
      description:
        "UBGarden est un projet Java réalisé en deuxième année d'informatique à l'Université de Bordeaux, lors de l'Unité d'Enseignement (UE) Programmation Orientée Objet. Il consista à créer un petit jeu vidéo 2D type \"Zelda\", à partir d'un code de base fourni. Il fut précédé de plusieurs semaines de tutoriaux pour apprendre à développer en Java et à utiliser IntelliJ Idea et Gradle, et a duré quelques semaines. Ce projet fut notre première approche de Java et de la Programmation Orientée Objet.",
      github: 'https://github.com/Iryonis/poo-project',
      site: '',
      type: 'Jeu vidéo sur ordinateur',
      tool: 'Java, Gradle & IntelliJ Idea',
      lang: 'Français',
      access: 'Accessibilité ? Non'
    },
    {
      title: 'Wiki For Honor',
      date: 'Décembre 2022',
      image: 'WikiFH.webp',
      description:
        "WikiFH (pour 'Wiki For Honor') est un site web créé par un étudiant en informatique durant sa deuxième année à l'université. C'était un petit projet visant à enseigner aux étudiants comment créer un site web avec des technologies de base telles que HTML, CSS, Javascript et PHP. J'ai décidé de créer un site web en l'honneur de For Honor, un jeu créé par Ubisoft, que j'aime beaucoup. Sa réalisation est très basique, mais c'était le premier site web sérieux que j'ai réalisé.",
      github: 'https://github.com/Iryonis/wikiFH',
      site: 'https://guilhem-bonnefous.emi.u-bordeaux.fr/Reseau/index.html',
      type: 'Site web',
      tool: 'HTML, CSS, JavaScript & PHP',
      lang: 'Français',
      access: 'Accessibilité ? Non'
    },
    {
      title: 'VideoTracker',
      date: 'Avril 2022',
      image: 'Videotracker.webp',
      description:
        "Videotracker est un projet Python développé par deux étudiants lors de leur première année d'études en informatique. Il respecte un ensemble de spécifications incluant des exigences telles que l'affichage de vidéo, la pause, la navigation image par image, le dessin de points sur la vidéo et la création d'un fichier CSV pour montrer l'évolution de ces points. Le projet a été réalisé en suivant les méthodologies SCRUM, visant à familiariser les étudiants avec les principes de gestion de projet agile.",
      github: 'https://github.com/Iryonis/videotracker',
      site: '',
      type: 'Application de bureau',
      tool: 'Python',
      lang: 'Français',
      access: 'Accessibilité ? Non'
    }
  ]
}

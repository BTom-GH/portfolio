export const ui = {
  fr: {
    langSwitch: "English",
    langLink: "/portfolio/en",
    status: "🟢 Open to internship",
    hero1: "Salut, moi c'est Tom.",
    hero2: "Je crée des jeux (entre autres).",
    sectionMain: "Projet Principal",
    wipBadge: "Work in progress",
    wipTitle: "Le trailer n'est pas encore sorti",
    wipDesc: "Ca arrive très bientot. ⏳",
    webgl: "Jouable dans le navigateur",
    btnPlay: "JOUER",
    btnOnePager: "ONE PAGER",
    btnOnePagerSoon: "ONE PAGER BIENTOT",
    sectionOther: "Autres Expérimentations & Code",
    bonusTitle: "Bonus",
    bonusDesc:
      "J'ai également un GitLab étudiant contenant des projets plus académiques et variés (comme par exemple un <span class='text-purple-400 font-mono text-sm bg-purple-400/10 px-2 py-0.5 rounded'>compilateur Mini-Python</span> ou un <span class='text-purple-400 font-mono text-sm bg-purple-400/10 px-2 py-0.5 rounded'>CodeNames en JavaFX</span>).",
    btnAccess: "Me demander l'accès",
    footer: "© 2026 Tom. Construit avec Astro & Tailwind.",
  },
  en: {
    langSwitch: "Français",
    langLink: "/portfolio/",
    status: "🟢 Open to internship",
    hero1: "Hi, I'm Tom.",
    hero2: "I make games (among other things).",
    sectionMain: "Main Projects",
    wipBadge: "Work in progress",
    wipTitle: "The trailer is not out yet",
    wipDesc: "Coming very soon. ⏳",
    webgl: "Playable in browser",
    btnPlay: "PLAY",
    btnOnePager: "ONE PAGER",
    btnOnePagerSoon: "ONE PAGER SOON",
    sectionOther: "Other Experiments & Code",
    bonusTitle: "Bonus",
    bonusDesc:
      "I also have a student GitLab containing more academic and varied projects (such as a <span class='text-purple-400 font-mono text-sm bg-purple-400/10 px-2 py-0.5 rounded'>Mini-Python compiler</span> or a <span class='text-purple-400 font-mono text-sm bg-purple-400/10 px-2 py-0.5 rounded'>CodeNames game in JavaFX</span>).",
    btnAccess: "Request access",
    footer: "© 2026 Tom. Built with Astro & Tailwind.",
  },
};

export const projects = [
  {
    title: "Panik At The Market",
    role: {
      fr: "<strong>Programmation Gameplay / Trailer</strong> <br/><span class='text-purple-300/70 text-xs'>Placement des items dans le caddie, grab, aide et bugfixs...</span>",
      en: "<strong>Gameplay Programming / Trailer</strong> <br/><span class='text-purple-300/70 text-xs'>Item placement in the cart, grab, help and bugfixes...</span>",
    },
    description: {
      fr: "PATM : Le chaos en rayon ! PATM est un party game survolté où faire ses courses devient un sport extrême. Votre mission : compléter votre liste et foncer à la caisse avant la fin du chrono. Mais attention, la physique est contre vous !",
      en: "PATM: Chaos in the aisles! PATM is a frantic party game where grocery shopping becomes an extreme sport. Your mission: complete your list and rush to checkout before the timer ends. But beware, physics are against you!",
    },
    tags: {
      fr: ["Party game", "Unreal Engine 5", "Versus Local", "C++"],
      en: ["Party game", "Unreal Engine 5", "Local Versus", "C++"],
    },
    videoUrl: "https://www.youtube.com/watch?v=6Y2qBJB8Yyc",
    playUrl: "https://stolgatt.itch.io/panik-at-the-market",
    isWebGL: false,
    onePager: "/portfolio/docs/OnePager_PATM.pdf",
  },
  {
    title: "Mountain Mayhem",
    role: {
      fr: "<strong>Programmation Gameplay & UI / Trailer</strong> <br/><span class='text-purple-300/70 text-xs'>Boue glissante, roches qui tombent, système de chute... </span>",
      en: "<strong>Gameplay & UI Programming / Trailer</strong> <br/><span class='text-purple-300/70 text-xs'>Slipping mud, falling rocks, fall system... </span>",
    },
    description: {
      fr: "Deux secouristes maladroits, un brancard primitif et une victime à ramener de toute urgence à l'hôpital ! Mountain Mayhem est un party game coopératif où la physique et la coordination sont vos pires ennemis !",
      en: "Two clumsy rescuers, a primitive stretcher, and a victim to get to the hospital urgently! Mountain Mayhem is a cooperative party game where physics and coordination are your worst enemies !",
    },
    tags: {
      fr: ["Party game", "Coop en ligne", "Unreal Engine 5", "C++"],
      en: ["Party game", "Online Co-op", "Unreal Engine 5", "C++"],
    },
    videoUrl: "https://www.youtube.com/watch?v=DdCYg0SgFIk",
    playUrl:
      "https://drive.google.com/file/d/1Q0qaS_miRwYtH3T7s_ynh1LNjr12saxS/view?usp=drive_link",
    isWebGL: false,
    onePager: "",
  },

  {
    title: "Broloc",
    role: {
      fr: "<strong>Programmation Gameplay</strong> <br/><span class='text-purple-300/70 text-xs'>Grab, Meubles</span>",
      en: "<strong>Gameplay Programming</strong> <br/><span class='text-purple-300/70 text-xs'>Grab, Furniture </span>",
    },
    description: {
      fr: "Broloc est un party game stratégique et compétitif, mais avec une particularité : ici, le meilleur colocataire n'est pas celui qui range… c'est celui qui sabote !",
      en: "Broloc is a strategic and competitive party game, but with a twist: here, the best roommate isn't the one who cleans... it's the one who sabotages!",
    },
    tags: {
      fr: ["Unreal Engine 5", "Coop Local", "C++", "Party game"],
      en: ["Unreal Engine 5", "Local Co-op", "C++", "Party game"],
    },
    videoUrl:
      "https://drive.google.com/file/d/1BITt79XeqNWvfl0EwJt67RNAx3eJHLTb/preview",
    playUrl:
      "https://drive.google.com/file/d/1JWwJ79N0e4MmdFoURaYLSReWqtVd7i_L/view?usp=drive_link",
    isWebGL: false,
    onePager: "/portfolio/docs/OnePager_BROLOC.pdf",
  },

  {
    title: "Network Shooter",
    role: {
      fr: "<strong>Projet Solo</strong> <br/><span class='text-purple-300/70 text-xs'>Développement de A à Z</span>",
      en: "<strong>Solo Project</strong> <br/><span class='text-purple-300/70 text-xs'>Full development</span>",
    },
    description: {
      fr: "Implémentation d'un petit jeu de tir en réseau avec Unreal Engine 5 pour se familiariser avec la réplication et les concepts de base du networking avec UE5. Le projet inclut des mécaniques de tir, de déplacement et de synchronisation des états entre les clients et le serveur avec du lag compensation.",
      en: "Implementation of a small networked shooter using Unreal Engine 5 to get familiar with replication and core networking concepts in UE5. The project includes shooting mechanics, movement, and state synchronization between clients and server with lag compensation.",
    },
    tags: {
      fr: [
        "Unreal Engine 5",
        "Réseau",
        "Réplication",
        "Lag compensation",
        "C++",
      ],
      en: [
        "Unreal Engine 5",
        "Networking",
        "Replication",
        "Lag compensation",
        "C++",
      ],
    },
    videoUrl:
      "https://drive.google.com/file/d/1aX4XXdPQhqUeCLQn_Q3b4uEY5pOmr7Nv/preview",
    playUrl:
      "https://drive.google.com/file/d/1rLPAmNh2pA_oKraQniBGph4UiLyNU3kB/view?usp=drive_link",
    isWebGL: false,
    onePager: "/portfolio/docs/OnePager_Network Shooter.pdf",
  },
  {
    title: "Doom-2077",
role: {
      fr: "<strong>Système d'armes & Aide au développement</strong> <br/><span class='text-purple-300/70 text-xs'>Notamment les animations</span>",
      en: "<strong>Weapon System & Development Assistance</strong> <br/><span class='text-purple-300/70 text-xs'>Particularly animations</span>",
    },
    description: {
      fr: "Doom-2077 est un jeu vidéo multijoueur inspiré des principes du Doom original de 1993. Le jeu propose des graphismes rétro similaires, mais avec des mécaniques de gameplay modernes.\n Dans Doom2077, le but est simple : tuer autant de joueurs ennemis que possible. Le jeu se joue en ligne, de 2 à 4 joueurs. Le mode solo permet de découvrir la carte.",
      en: "Doom-2077 is a multiplayer video game inspired by the principles of the original Doom, released in 1993. The game features retro graphics similar to Doom, but with modern gameplay mechanics.\n In Doom2077, the goal is simple: kill as many enemy players as possible. The game is played online, with 2 to 4 players. The single player mode allows you to discover the map.",
    },
    tags: {
      fr: ["C", "Multijoueur", "SDL2"],
      en: ["C", "Multiplayer", "SDL2"],
    },
    videoUrl:
      "https://drive.google.com/file/d/1O8ei8NHAw6zsIEx1JeqVfvLRoma8hb3r/preview",
    playUrl: "https://github.com/Esteban795/DOOM-2077",
    isWebGL: false,
    onePager: "",
  },
];

export const experiments = [
  {
    name: "Weather app in VR",
    tech: "Unity & C#",
    url: "https://github.com/Esteban795/vreather",
  },
  {
    name: {
      fr: "Vérification formelle de protocole crypto : Tamarin",
      en: "Formal verification of crypto protocol: Tamarin",
    },
    tech: "Haskell",
    url: "https://github.com/tamarin-prover/tamarin-prover",
  },
  {
    name: "Portfolio V1",
    tech: "Astro",
    url: "https://github.com/BTom-GH/portfolio",
  },
];

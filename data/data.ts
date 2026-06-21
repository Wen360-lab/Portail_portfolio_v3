
/**
 * Le type qui definie un profile
 */
type ProfileType = {
    id: number,
    firstname: string,
    lastname: string,
    job: string,
    desc: string,
    portfolio: string,
    photo: string
}

/**
 * type pour designer un tableau contenant des profils
 */
type ArrayProfilesType = ProfileType[];


const jobs: string[] = [
    "Développeur Frontend",
    "Développeur Backend",
    "Développeur Fullstack",
]


const profiles: ArrayProfilesType = [
    {
        id:1,
        firstname: "Enock Japhet",
        lastname: "KOMBILA NZIENGUI",
        job: jobs[0],
        desc: "Developpeur Front-end responsive design et accessibilité.",
        portfolio: "https://nejdev241.github.io/portfolio/",
        photo: "/profile/photos/profile-japhet.png",
    },
    {
        id: 2,
        firstname: "Glaine Benoit",
        lastname: "MONDJO MONDJO",
        job: jobs[1],
        desc: "Développeur polyvalent. Je developpe des API REST robuste ...",
        portfolio: "https://benoitmondjo.github.io/integration_portfolio/",
        photo: "/profile/photos/profile-benoit.jpg",
    },
    {
        id: 3,
        firstname: "Rony Gael",
        lastname: "OBIANG",
        job: jobs[0],
        desc: "Du terrain au code : je crée des solutions numériques utiles et concrètes.",
        portfolio: "https://robiang.github.io/portfolio_rony/",
        photo: "/profile/photos/profile-rony-gael.jpg",
    },
    {
        id: 4,
        firstname: "Gédéon",
        lastname: "Ndong",
        job: jobs[0],
        desc: "Spécialisé dans l'intégration web, je transforme des maquettes en pages fonctionnelles grâce à HTML, CSS et JavaScript...",
        portfolio: "https://furickndong.github.io/portfolio",
        photo: "/profile/photos/profile-gedeon.png",
    },
    {
        id: 5,
        firstname: "Astuce Freeman",
        lastname: "TENGO",
        job: jobs[2],
        desc: "Développeur full-stack orienté backend. Je me concentre sur la création d'APIs robustes et l'optimisation des performances avec Node.js.",
        portfolio: "https://freemanastuce20-star.github.io/portfolio/",
        photo: "/profile/photos/profile-astuce.jpg",
    },
    {
        id:6,
        firstname: "PAUL YURICK",
        lastname: "NDONDY",
        job: jobs[0],
        desc: "Je suis NDONDY PAUL YURICK développeur web débutant Je conçois des plateformes mobiles Simple et structurés ...",
        portfolio: "https://paulyurick.github.io/Mon-portfolio/",
        photo: "/profile/photos/profile-paul-yurick.png",
    },
    {
        id: 7,
        firstname: "Wen Joanel",
        lastname: "MAKANAGA ETCHOU ",
        job: jobs[0],
        desc: "Passionné par le web design, les interfaces interactives, élégantes et aux animations web, je me spécialise dans la ...",
        portfolio: "https://wen360-lab.github.io/portfolio/",
        photo: "/profile/photos/profile-wen-jaonel.jpg",
    },
    {
        id: 8,
        firstname: "Franclin Levy",
        lastname: "MOUBILOBA TSIAKONGA",
        job: jobs[0],
        desc: "Spécialiste en intégration web, je met en œuvre des maquettes pour créer des pages web interactives en utilisant HTML, CSS ...",
        portfolio: "https://moubilobalevy-netizen.github.io/mon-portfolio/",
        photo: "/profile/photos/profile-levy.png",
    },
    {
        id:9,
        firstname: "Jean Junior ",
        lastname: "IRAMBA MAMBOUNDOU",
        job: jobs[0],
        desc: "En formation intensive à l'Ecole {241}, je transforme des maquettes en interfaces propres et structurées. Rigoureux et ...",
        portfolio: "https://jj-dev625.github.io/Mon-portfolio/",
        photo: "/profile/photos/profile-jean-junior.png",
    },

    // {
    //     initials: "AUR",
    //     name: "Asseekome Ulrich Romaric",
    //     role: "Développeur web",
    //     desc: "Ulrich, licence pro en informatique de gestion, developpeur web et web mobile junior (Front-end), certifié D-clic. Promo 14 école 241.",
    //     tags: ["HTML", "CSS", "Node.js"],
    //     link: "https://asseekomeulrichromaric-lang.github.io/Portfolio/",
    //     photo: "/profile/photos/profile-ulrich.jpg",
    // },
    // {
    //     initials: "AMV",
    //     name: "Vanelie ABANG MINKO",
    //     role: "Développeur web",
    //     desc: "Je m'appelle Vanelie ABANG MINKO, nouvelle dans le domaine du développement web et passionnée par les technologies numériques. Je suis développeuse web back-end et infographe. Curieuse et motivée, j'aime apprendre de nouvelles technologies, relever des défis et améliorer mes compétences à travers différents projets web. Cette aventure dans le développement me permet de découvrir chaque jour de nouvelles connaissances et de progresser continuellement.",
    //     tags: ["HTML", "CSS", "Node.js"],
    //     link: "https://akatsuki-png.github.io/MonPortfolio2.0/",
    //     photo: "/profile/photos/profile-vanelie.png",
    // },
    // {
    //     initials: "MDB",
    //     name: "MOUNDOUNGA DIBANGOU Beeve",
    //     role: "Front-end",
    //     desc: "Développeur attiré par le code, designer graphique, penchant pour l'esthétique visuel, crée des interfaces modernes et professionnels.",
    //     tags: ["HTML", "CSS", "Node.js"],
    //     link: "https://wwwyurysherman777-glitch.github.io/portfolio/",
    //     photo: "/profile/photos/profile-beev.jpg",
    // },
    // {
    //     initials: "MBO",
    //     name: "MBA Osuris",
    //     role: "Développeur Web",
    //     desc: "Passionné par la création numérique, mon portfolio illustre mes compétences, qui vont de l'UI/UX Design (Zoning, Wireframe, Maquettage sur des projets comme PrimePrompts) jusqu'à l'intégration front-end moderne (HTML5, CSS3, JavaScript) pour des sites fluides et responsives.",
    //     tags: ["HTML", "CSS", "JS"],
    //     link: "https://bekerosuris-tech.github.io/portfolio/",
    //     photo: "/profile/photos/profile-osirus.png",
    // },
    // {
    //     initials: "MK",
    //     name: "Konda ndoundou rucia berlina",
    //     role: "Développeur Web",
    //     desc: "Passionnée par la création d'interfaces modernes, élégantes et intuitives. Je conçois des expériences web dynamiques et responsives en mettant l'accent sur la qualité, la performance et l'expérience utilisateur de site web et application web mobile, tout en développant des solutions fonctionnelles côté back-end.",
    //     tags: ["HTML", "CSS", "JS", "Figma", "Git", "Github"],
    //     link: "https://kondarucia-cell.github.io/mon-portefolio/",
    //     photo: "/profile/photos/profile-rusia.jpg",
    // },
    // {
    //     initials: "MY",
    //     name: "AKENDENGUE Marcy Yolene",
    //     role: "Développeur Web",
    //     desc: "Je suis AKENDENGUE Marcy Yolene, developpeuse web/web mobile en formation. Je crée des interfaces web, simples, modernes et structurées.",
    //     tags: ["HTML", "CSS", "JS"],
    //     link: "https://marcy1999.github.io/portfolio/",
    //     photo: "/profile/photos/profile-yolaine.png",
    // },
    // {
    //     initials: "EM",
    //     name: "Elie Martial",
    //     role: "Frontend",
    //     desc: "Développeur Frontend passionné par la création de sites web modernes, élégants et responsives.",
    //     tags: ["HTML", "CSS", "JS"],
    //     link: "https://elie82428.github.io/portfolio-elie/",
    //     photo: "/profile/photos/profile-martiale.png",
    // },
    // {
    //     initials: "NK",
    //     name: "Noé-Ken",
    //     role: "Développeur frontend web et mobile",
    //     desc: "Je transforme des idées en interfaces rapides avec un focus sur la performance centrée sur l'expérience utilisateur.",
    //     tags: ["HTML", "CSS", "JS"],
    //     link: "https://noekenmoukakou6-sys.github.io/noe-ken-portfolio/",
    //     photo: "/profile/photos/profile-ken-noe.jpeg",
    // },
];


export {type ProfileType, type ArrayProfilesType, jobs, profiles}
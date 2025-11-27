export const personalInfo = {
  name: "Pablo Ortiz",
  age: 23,
  roles: [
    { key: "hero.roles.mobile", text: "Desarrollador Mobile" },
    { key: "hero.roles.software", text: "Desarrollador de Software" },
    { key: "hero.roles.fullstack", text: "Desarrollador Full Stack" },
  ],
  photo: "/foto.png",
};

export const technologies = [
  { name: "React", icon: "SiReact" },
  { name: "React Native", icon: "SiReact" },
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "Python", icon: "SiPython" },
  { name: "PostgreSQL", icon: "SiPostgresql" },
  { name: "Apache Cordova", icon: "SiApachecordova" },
  { name: "C", icon: "SiC" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "Jest", icon: "SiJest" },
  { name: "Redux", icon: "SiRedux" },
  { name: "Zustand", icon: "SiReact" },
  { name: "Zod", icon: "SiZod" },
  { name: "Storybook", icon: "SiStorybook" },
  { name: "Firebase", icon: "SiFirebase" },
  { name: "Prisma", icon: "SiPrisma" },
  { name: "Git", icon: "SiGit" },
  { name: "Jetpack Compose", icon: "SiJetpackcompose" },
  { name: "Kotlin", icon: "SiKotlin" },
  { name: "Swift", icon: "SiSwift" },
];

export const projects = [
  {
    id: 1,
    titleKey: "projects.items.alramed.title",
    descriptionKey: "projects.items.alramed.description",
    title: "Alramed S.R.L.",
    description:
      "Página web desarrollada en React para empresa de insumos médicos",
    image: "/projects/alramed.png",
    link: "https://www.alramed.com.ar",
    type: "web" as const,
    icon: "Heart" as const, // Icono médico/salud
  },
  {
    id: 2,
    titleKey: "projects.items.pablovazquez.title",
    descriptionKey: "projects.items.pablovazquez.description",
    title: "Pablo Vázquez Propiedades",
    description: "Página web desarrollada en React para inmobiliaria",
    image: "/projects/pablovazquezprop.png",
    link: "https://www.pablovazquezprop.com.ar",
    type: "web" as const,
    icon: "Home" as const, // Icono de casa/propiedades
  },
  {
    id: 3,
    titleKey: "projects.items.beatfit.title",
    descriptionKey: "projects.items.beatfit.description",
    title: "BeatFit",
    description: "Aplicación móvil para ejercicios físicos",
    image: "/projects/pablovazquezprop.png",
    link: "https://github.com/pablonortiz/BeatFit",
    videoUrl: "/projects/beatfit.mp4",
    type: "mobile" as const,
    icon: "/projects/icons/beatfit.png", // Icono de fitness
  },
  {
    id: 4,
    titleKey: "projects.items.catalogador.title",
    descriptionKey: "projects.items.catalogador.description",
    title: "Catalogador de extractos",
    description:
      "App desarrollada en Electron para catalogar extractos bancarios",
    image: "/projects/catalogador.png",
    link: "https://github.com/pablonortiz",
    videoUrl: "/projects/catalogador.mp4",
    type: "web" as const,
    icon: "FileText" as const, // Icono de documentos/extractos
  },
  {
    id: 5,
    titleKey: "projects.items.metalurgica.title",
    descriptionKey: "projects.items.metalurgica.description",
    title: "Administrador de metalurgica",
    description:
      "App desarrollada en Electron para administrar los gastos, trabajos y clientes de una metalurgica",
    image: "/projects/metalurgica.png",
    link: "https://github.com/pablonortiz",
    videoUrl: "/projects/administrador-metalurgica.mkv",
    type: "web" as const,
    icon: "Factory" as const, // Icono de industria/metalúrgica
  },
  {
    id: 6,
    titleKey: "projects.items.perfumario.title",
    descriptionKey: "projects.items.perfumario.description",
    title: "Perfumario",
    description: "Aplicación móvil para administrar los perfumes y sus ventas",
    image: "/projects/perfumario.png",
    videoUrl: "/projects/perfumario.mp4",
    link: "https://github.com/pablonortiz/Perfumario",
    type: "mobile" as const,
    icon: "/projects/icons/perfumario.png",
  },
];

export const timeline = [
  {
    id: 1,
    year: "2019",
    titleKey: "journey.items.secundaria.title",
    descriptionKey: "journey.items.secundaria.description",
    title: "Secundaria",
    description: "Secundaria completa en Instituto Inmaculada Concepción",
    type: "education" as const,
    logo: "🎓",
  },
  {
    id: 2,
    year: "2021",
    titleKey: "journey.items.ingles.title",
    descriptionKey: "journey.items.ingles.description",
    title: "Inglés",
    description:
      "Aprobado el First Certificate in English (FCE) con 180 puntos",
    type: "education" as const,
    logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  },
  {
    id: 3,
    year: "2021",
    titleKey: "journey.items.primerTrabajo.title",
    descriptionKey: "journey.items.primerTrabajo.description",
    title: "Primer Trabajo",
    description: "Desarrollador Mobile y de Software en Radio Nacional",
    type: "work" as const,
    logo: "💼",
  },
  {
    id: 4,
    year: "2022",
    titleKey: "journey.items.janis.title",
    descriptionKey: "journey.items.janis.description",
    title: "Desarrollador Mobile",
    description: "Desarrollador Mobile en Janis Commerce",
    type: "work" as const,
    logo: "🚀",
  },
];

export const socialLinks = {
  github: "https://github.com/pablonortiz",
  linkedin: "https://linkedin.com/in/pablo-ortiz-7884751aa",
  email: "pablonortiz05@hotmail.com",
};

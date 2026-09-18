export const career = {
  name: "HGH.",
  role: "Software Integration & Validation Engineer",
  headline:
    "De la validation logicielle à l’intégration logicielle, avec une forte expertise en QA Automation.",
  summary:
    "Ingénieur spécialisé en validation système, intégration logicielle et automatisation des tests. Mon parcours couvre les secteurs médical et automobile, de l’analyse des exigences à l’intégration firmware/software, au CI/CD et à la validation fonctionnelle ou SIL.",
  years: "7+",
  domains: ["Médical", "Automobile"],
  core: [
    "Software Integration",
    "System Validation",
    "Embedded Systems",
    "Test Automation",
    "CI/CD",
  ],
} as const;

export const experiences = [
  {
    period: "02/2026 — Actuel",
    company: "Astemo",
    location: "Drancy",
    domain: "Automobile",
    role: "Ingénieur validation système",
    summary:
      "Validation système et intégration en simulation SIL, avec analyse des exigences, couverture de test, exécution automatisée et diagnostic des anomalies.",
    highlights: [
      "Analyse des exigences sous DOORS et préparation de la couverture de test",
      "Rédaction et exécution de tests fonctionnels et d’intégration en simulation SIL",
      "Lancement des campagnes via Jenkins, analyse des résultats et diagnostic des anomalies",
      "Suivi des anomalies et des corrections sous Jira avec les équipes software et système",
    ],
    tools: [
      "Python",
      "C",
      "Batch",
      "Jenkins",
      "TeamCity",
      "Git",
      "DOORS",
      "Jira",
      "SIL",
    ],
  },
  {
    period: "10/2019 — 01/2026",
    company: "Stago",
    location: "Gennevilliers",
    domain: "Médical",
    role: "Ingénieur validation et intégration",
    summary:
      "Validation fonctionnelle et tests d’intégration sur des produits médicaux critiques mêlant software et hardware, avec industrialisation des campagnes et intégration continue.",
    highlights: [
      "Analyse des spécifications, définition des tests, rédaction et exécution des protocoles puis rapports de validation",
      "Automatisation des campagnes avec TeamCity et Git, maintien des environnements de test et simulateurs logiciels",
      "Configuration et utilisation de pipelines TeamCity pour l’exécution automatisée et le suivi des résultats",
      "Root Cause Analysis, suivi des corrections et amélioration de la couverture de test",
      "Coordination transverse avec les équipes logiciel et spécifications en Agile/Scrum",
    ],
    tools: [
      "Python",
      "Batch",
      "TeamCity",
      "Git",
      "DOORS",
      "Mantis",
      "Functional Validation",
    ],
  },
  {
    period: "03/2019 — 08/2019",
    company: "QENVI Robotics",
    location: "Sophia Antipolis",
    domain: "Médical · Robotique",
    role: "Stagiaire — Ingénieur robotique",
    summary:
      "Développement logiciel embarqué sous ROS pour un fauteuil roulant robotisé en environnement médicalisé, avec mise en place des tests et validation du produit.",
    highlights: [
      "Développement logiciel embarqué sous ROS",
      "Rédaction et exécution de protocoles de tests fonctionnels et d’intégration",
      "Identification, diagnostic et reporting des anomalies",
      "Mise en place de simulateurs et d’environnements de test",
      "Validation de la conformité du produit final",
    ],
    tools: [
      "Linux",
      "ROS",
      "Python",
      "C++",
      "Raspberry Pi",
      "Arduino",
      "Rplidar",
      "Git",
      "Série",
    ],
  },
  {
    period: "01/2016 — 06/2016",
    company: "Green Control",
    location: "Tunis",
    domain: "Automobile · Informatique industrielle",
    role: "Projet de fin d’études",
    summary:
      "Conception d’un système de diagnostic automobile basé sur STM32F4 avec acquisition OBD-II/CAN et visualisation des données sur une application Android.",
    highlights: [
      "Conception et développement d’un système de diagnostic automobile sur STM32F4",
      "Programmation C++ pour la lecture des données véhicule via OBD-II / CAN",
      "Développement d’une application Android en Java pour l’affichage temps réel via Bluetooth",
      "Communication série entre la carte et l’application mobile",
      "Tests manuels et validation du fonctionnement de bout en bout",
    ],
    tools: [
      "STM32F4",
      "C++",
      "Java",
      "Android Studio",
      "OBD-II",
      "CAN",
      "Bluetooth",
      "Keil",
      "IAR",
    ],
  },
] as const;

export const education = [
  {
    year: "2019",
    degree: "Master Mécatronique : Robotique",
    school: "Polytech Orléans",
    location: "Orléans",
  },
  {
    year: "2016",
    degree: "Licence Informatique industrielle",
    school: "Institut Supérieur d’Informatique",
    location: "Tunis",
  },
] as const;

export const personalProjects = [
  {
    title: "Blassa.fr",
    subtitle:
      "Solution digitale pour améliorer la dépose des passagers en aéroport",
    summary:
      "Conception d’un service digital visant à fluidifier la dépose-minute, avec formalisation du besoin, parcours utilisateur, réflexion B2B2C et mise en ligne du site de présentation.",
    highlights: [
      "Formalisation du besoin et définition du parcours utilisateur",
      "Réflexion sur le modèle de service B2B2C avec les acteurs aéroportuaires",
      "Création et mise en ligne du site de présentation",
      "Recueil de retours utilisateurs et amélioration progressive du concept",
    ],
    tools: ["Web", "Conception produit", "UX", "Gestion de projet"],
  },
] as const;

export const expertise = [
  {
    index: "01",
    title: "Software Integration",
    text: "Assembler et fiabiliser les livraisons software et firmware avant leur passage en validation.",
    tags: ["Builds", "Firmware", "Software", "Release"],
  },
  {
    index: "02",
    title: "System & Software Validation",
    text: "Analyser les exigences, construire la couverture de test, exécuter les scénarios et investiguer les écarts.",
    tags: ["DOORS", "SIL", "Functional", "Coverage"],
  },
  {
    index: "03",
    title: "QA & Test Automation",
    text: "Automatiser les campagnes, fiabiliser les environnements de test et accélérer l’analyse des résultats.",
    tags: ["Python", "Batch", "Automation", "Reporting"],
  },
  {
    index: "04",
    title: "CI/CD & Industrialisation",
    text: "Industrialiser l’exécution des campagnes et rendre les builds, résultats et artefacts plus reproductibles et traçables.",
    tags: ["Jenkins", "TeamCity", "Git", "CI/CD"],
  },
] as const;

export const caseStudies = [
  {
    eyebrow: "Médical · intégration",
    title: "Sécuriser une chaîne d’intégration logiciel + firmware",
    problem:
      "Plusieurs composants doivent être assemblés et vérifiés avant de pouvoir lancer la validation sur un système embarqué.",
    contribution:
      "Réception des livraisons, construction des builds, installation, tests d’intégration et décision de passage vers les testeurs.",
    result:
      "Un flux d’intégration plus lisible et reproductible, avec une frontière claire entre build, intégration et validation.",
    stack: ["TeamCity", "Firmware", "Software", "Embedded"],
  },
  {
    eyebrow: "Automobile · validation",
    title: "Qualifier des régressions SIL sans confondre test et logiciel",
    problem:
      "Lors d’une évolution de configuration, un échec peut provenir du logiciel, du paramétrage ou du test lui-même.",
    contribution:
      "Croisement exigences, paramètres, traces et scénarios pour distinguer mise à jour de test et régression potentielle.",
    result:
      "Des diagnostics argumentés et des tests prêts à réintégrer dans les campagnes automatisées.",
    stack: ["SIL", "DOORS", "Jenkins", "Regression"],
  },
  {
    eyebrow: "CI/CD · industrialisation",
    title: "Automatiser l’exécution et rendre les résultats exploitables",
    problem:
      "Une campagne de tests manuelle ou fragmentée ralentit l’analyse et rend les artefacts difficiles à retrouver.",
    contribution:
      "Structuration de pipelines pour déclencher les tests, centraliser les résultats et conserver les artefacts utiles à l’investigation.",
    result:
      "Une boucle de feedback plus courte entre intégration, exécution, analyse et correction.",
    stack: ["Jenkins", "TeamCity", "Artifacts", "Automation"],
  },
] as const;

export const toolGroups = [
  {
    label: "Programmation",
    items: ["Python", "C", "C++", "Java", "Batch"],
  },
  {
    label: "CI/CD & outils",
    items: ["Git", "Jenkins", "TeamCity", "DOORS", "Jira", "Mantis"],
  },
  {
    label: "Embedded & hardware",
    items: ["STM32", "ROS", "Raspberry Pi", "Arduino"],
  },
  {
    label: "Réseaux & protocoles",
    items: ["CAN", "OBD-II", "Bluetooth", "Série"],
  },
  {
    label: "Méthodologies",
    items: ["Agile/Scrum", "ISTQB", "Tests", "CI/CD"],
  },
  {
    label: "Systèmes",
    items: ["Windows", "Linux"],
  },
] as const;

export const languages = [
  { language: "Anglais", written: "Intermédiaire", spoken: "Intermédiaire" },
] as const;

export const career = {
  name: "Hamza Ghourabi",
  role: "Software Integration & Validation Engineer",
  headline:
    "J’intègre, sécurise et valide des logiciels embarqués jusqu’à une release vérifiable.",
  summary:
    "Ingénieur spécialisé en intégration logicielle, validation système et automatisation des tests. Mon parcours couvre des environnements MedTech et automobile, de l’analyse des exigences à l’intégration firmware/software, au CI/CD et à la validation fonctionnelle ou SIL.",
  years: "7+",
  domains: ["MedTech", "Automobile"],
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
    period: "2026",
    company: "Astemo",
    domain: "Automobile",
    role: "Software Integration & Validation Engineer",
    summary:
      "Validation et intégration de fonctions logicielles embarquées dans un environnement automobile exigeant, avec analyse d’exigences, tests SIL et industrialisation Jenkins.",
    highlights: [
      "Analyse et revue d’exigences système / logiciel",
      "Conception, maintenance et investigation de tests SIL",
      "Qualification de régressions et analyse de traces",
      "Automatisation et exécution via Jenkins",
    ],
    tools: ["DOORS", "Jenkins", "SIL", "Test Automation"],
  },
  {
    period: "2019 — 2026",
    company: "Stago",
    domain: "MedTech",
    role: "Validation fonctionnelle → Intégration logicielle",
    summary:
      "Évolution de la validation fonctionnelle vers un rôle d’intégration logicielle sur des systèmes embarqués de diagnostic in vitro, au contact des équipes logiciel, firmware et système.",
    highlights: [
      "Plans de tests à partir des exigences et validation sur systèmes embarqués",
      "Intégration de livraisons firmware + software",
      "Builds, tests d’intégration et sécurisation des livraisons",
      "Industrialisation et suivi d’intégration continue avec TeamCity",
    ],
    tools: [
      "TeamCity",
      "Embedded Systems",
      "Functional Validation",
      "Integration",
    ],
  },
] as const;

export const expertise = [
  {
    index: "01",
    title: "Software Integration",
    text: "Assembler des livraisons firmware et software, vérifier leur cohérence et sécuriser leur passage vers les équipes de validation.",
    tags: ["Builds", "Firmware", "Software", "Release"],
  },
  {
    index: "02",
    title: "System & Software Validation",
    text: "Transformer les exigences en stratégies de test, exécuter les scénarios et investiguer les écarts jusqu’à une conclusion exploitable.",
    tags: ["Requirements", "SIL", "Functional", "Regression"],
  },
  {
    index: "03",
    title: "Test Automation",
    text: "Rendre les contrôles répétables et plus fiables en structurant les tests, les données d’entrée, les rapports et l’analyse des résultats.",
    tags: ["Automation", "Trace analysis", "Reporting", "Quality"],
  },
  {
    index: "04",
    title: "CI/CD & Industrialisation",
    text: "Faire du pipeline un outil de confiance : builds reproductibles, campagnes automatisées, artefacts traçables et feedback rapide.",
    tags: ["Jenkins", "TeamCity", "CI/CD", "Artifacts"],
  },
] as const;

export const caseStudies = [
  {
    eyebrow: "MedTech · intégration",
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
  { label: "CI/CD", items: ["Jenkins", "TeamCity"] },
  {
    label: "Requirements & validation",
    items: ["DOORS", "SIL", "Functional Validation"],
  },
  {
    label: "Engineering",
    items: [
      "Embedded Systems",
      "Firmware / Software Integration",
      "Test Automation",
    ],
  },
] as const;

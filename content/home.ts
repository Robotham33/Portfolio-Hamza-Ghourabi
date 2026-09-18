export const primaryNavigation = [
  { label: "Expérience", href: "/experience" },
  { label: "Projets", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const proofPoints = [
  {
    value: "02",
    label: "Domaines techniques",
    detail: "MedTech + automobile",
  },
  {
    value: "CI/CD",
    label: "Industrialisation",
    detail: "Jenkins + TeamCity",
  },
  {
    value: "E2E",
    label: "Cycle couvert",
    detail: "Intégration → validation",
  },
] as const;

export const pipelineSteps = [
  {
    index: "01",
    label: "Requirements",
    detail: "DOORS",
  },
  {
    index: "02",
    label: "Integration",
    detail: "Firmware + Software",
  },
  {
    index: "03",
    label: "CI/CD",
    detail: "Jenkins · TeamCity",
    emphasis: true,
  },
  {
    index: "04",
    label: "Validation",
    detail: "Functional · SIL",
  },
  {
    index: "05",
    label: "Release",
    detail: "Verified build",
  },
] as const;

export const primaryNavigation = [
  { label: "Expérience", href: "/experience" },
  { label: "Projets", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const proofPoints = [
  {
    value: "02",
    label: "Domaines techniques",
    detail: "Médical + automobile",
  },
  {
    value: "CI/CD",
    label: "Industrialisation",
    detail: "Jenkins + TeamCity",
  },
  {
    value: "I→V",
    label: "Continuum métier",
    detail: "Intégration → validation",
  },
] as const;

export const pipelineSteps = [
  {
    index: "01",
    label: "Requirements",
    detail: "DOORS",
    emphasis: false,
  },
  {
    index: "02",
    label: "Integration",
    detail: "Firmware + Software",
    emphasis: false,
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
    emphasis: false,
  },
  {
    index: "05",
    label: "Release",
    detail: "Verified build",
    emphasis: false,
  },
] as const;

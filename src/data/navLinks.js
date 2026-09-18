export const RESEARCH_LINKS = [
  { to: '/research', label: 'Research Problem' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/design', label: 'Design Process' },
  { to: '/comparison', label: "What's Actually Different?" },
];

export const PRIMARY_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/ab-testing', label: 'A/B Testing' },
  { to: '/results', label: 'Results' },
  { to: '/about', label: 'About' },
];

export const ALL_LINKS = [
  { to: '/', label: 'Home' },
  ...RESEARCH_LINKS,
  { to: '/ab-testing', label: 'A/B Testing' },
  { to: '/results', label: 'Results' },
  { to: '/about', label: 'About' },
];
export const site = {
  name: 'Play Pilates',
  description: 'Reformer Pilates Studio – modern, klar, effektiv.',
  nav: [
    { label: 'Start', href: '/' },
    { label: 'Kurse', href: '/kurse' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Preise', href: '/preise' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  footer: {
    email: 'hello@playpilates.example',
    phone: '+49 30 123 456 78',
    address: 'Studio Straße 12, 10115 Berlin',
  },
} as const;

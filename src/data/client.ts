/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'EV Raptors Eisenstadt',
  email: 'info@raptors-eissenstadt.at',
  phoneForTel: '0664-306-10-49',
  phoneFormatted: '0664 306 10 49',
  address: {
    lineOne: 'Bad-Kissingen-Platz 1',
    lineTwo: 'Sportzentrum Eisenstadt - Kunsteisbahn',
    city: 'Eisenstadt',
    state: 'Styria',
    zip: '7000',
    country: 'AT',
    mapLink: 'https://maps.app.goo.gl/1Zd3RiohaXJmqGaP6',
  },
  socials: {
    facebook: 'https://www.facebook.com/RapsEisenstadt/',
    instagram: 'https://www.instagram.com/raptors.eisenstadt',
    google: 'https://maps.app.goo.gl/1Zd3RiohaXJmqGaP6',
  },
  domain: 'https://jano-kucera.github.io/',
} as const;

export type Client = typeof client;

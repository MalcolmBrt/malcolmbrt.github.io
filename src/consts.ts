// Site-wide settings. Edit this file to rebrand the theme — every page,
// the RSS feed, and Open Graph tags read from here.

export const SITE = {
  /** Site name — used in the header brand, <title>, and og:site_name. */
  title: 'Malcolm Bertaina',
  /** Default meta description for pages that don't set their own. */
  description: 'Portfolio de Malcolm Bertaina — Étudiant en Sciences du Numérique à ENSEEIHT, spécialisé en Sécurité Réseaux et Systèmes.',
  /** Default social share image, relative to the site root (see public/). */
  ogImage: '/og.jpg',
  /** Footer credit line. */
  footerText: 'Built with Astro Keel.',
} as const;

/** Header navigation. `href` is relative to the site root; the configured
 *  `base` is applied automatically via `withBase()`. */
export const NAV_ITEMS = [
  { href: '/', label: 'Accueil' },
  { href: '/projets/', label: 'Projets' },
  { href: '/engagement-civique/', label: 'Engagement civique' },
  { href: '/ppp/', label: 'PPP' },
] as const;

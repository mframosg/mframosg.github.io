/**
 * moments.ts — Birthday plan data for index.astro
 *
 * ─────────────────────────────────────────────────────────────
 * HOW TO UPDATE FOR NEXT YEAR
 * ─────────────────────────────────────────────────────────────
 * 1. Edit the text fields (title, body, meta values) below.
 * 2. Replace image files in /public/ and update the `image` path.
 * 3. To add a new moment: copy any object in MOMENTS, give it a
 *    new unique `id` (e.g. "momento5"), increment `num`, and add
 *    a matching entry to the SideBar.astro navigation links.
 * 4. Run `npm run build` to verify no errors before deploying.
 * ─────────────────────────────────────────────────────────────
 */

export interface MetaItem {
  label: string;
  value: string;
}

export interface Moment {
  /** HTML id used by sidebar navigation anchors — do not change without updating SideBar.astro */
  id: string;
  /** Step number displayed as eyebrow label, e.g. "01" */
  num: string;
  /** Section heading */
  title: string;
  /** Main descriptive paragraph */
  body: string;
  /** Path to the image in /public/ */
  image: string;
  /** Alt text for the image */
  imageAlt: string;
  /** Whether the image appears on the left or right side of the text */
  imageSide: 'left' | 'right';
  /** Optional info card rows (hora, lugar, pista…) */
  meta?: MetaItem[];
}

export const MOMENTS: Moment[] = [
  {
    id: 'momento1',
    num: '01',
    title: 'Desayuno',
    body: 'Para comenzar este día especial, te he preparado un desayuno sorpresa.',
    image: '/desayuno.png',
    imageAlt: 'Desayuno',
    imageSide: 'right',
    meta: [
      { label: 'Hora',  value: '8:00 a.m.' },
      { label: 'Lugar', value: 'Mi casa' },
      { label: 'Pista', value: 'Tú me has enseñado a prepararlo' },
    ],
  },
  {
    id: 'momento3',
    num: '03',
    title: 'Tiempo de almuerzo',
    body: 'Para continuar el día, vamos a almorzar. También es sorpresa.',
    image: '/almuerzo.png',
    imageAlt: 'Almuerzo',
    imageSide: 'right',
    meta: [
      { label: 'Hora',  value: '12:30 p.m.' },
      { label: 'Lugar', value: 'Solo déjate llevar' },
      { label: 'Pista', value: 'Lo comemos mucho, o tal vez sea la primera vez' },
    ],
  },
  {
    id: 'momento4',
    num: '04',
    title: 'Compartir en familia',
    body: 'Terminaremos este día especial compartiendo tarde en familia.',
    image: '/family.jpeg',
    imageAlt: 'Familia',
    imageSide: 'left',
  },
];

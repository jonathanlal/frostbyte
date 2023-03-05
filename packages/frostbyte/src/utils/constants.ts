import { colors } from '../styles/colors.js'; //leave like this otherwise gen script will break

enum SIZES_ENUM {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}
export const SIZES_ARRAY: string[] = Object.values(SIZES_ENUM);
export type SIZES = `${SIZES_ENUM}`;

export enum KIND_ENUM {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
  primary = 'primary',
}
export type KINDS = keyof typeof KIND_ENUM;

export const RESPONSIVE_SIZES: Record<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
  { min: number; max: number; pref: number }
> = {
  h1: { min: 2.4, max: 4, pref: 5 },
  h2: { min: 2.2, max: 3.8, pref: 4.8 },
  h3: { min: 2, max: 3.6, pref: 4.6 },
  h4: { min: 1.8, max: 3.4, pref: 4.4 },
  h5: { min: 1.6, max: 3.2, pref: 4.2 },
  h6: { min: 1.4, max: 3.1, pref: 4 },
  p: { min: 1.2, max: 2, pref: 4 },
};
export type RESPONSIVE_ELEMENTS = keyof typeof RESPONSIVE_SIZES;

export type COLORS = keyof typeof colors.default;
export type COLORS_WITHOUT_KINDS = Exclude<
  COLORS,
  KINDS | 'black' | 'white' | 'grey'
>;
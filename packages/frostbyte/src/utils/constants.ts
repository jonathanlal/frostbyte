// import { colors } from '../styles/colors.js'; //leave like this otherwise gen script will break //fix this somehow
import { colors } from 'styles/colors'; //in development

enum SIZES_ENUM {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}
export type SIZES = `${SIZES_ENUM}`;
export const SIZES_ARRAY: SIZES[] = Object.values(SIZES_ENUM);

export enum KIND_ENUM {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
  primary = 'primary',
}
export type KINDS = keyof typeof KIND_ENUM;

export const KINDS_ARRAY: KINDS[] = Object.values(KIND_ENUM);

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
export const COLORS_ARRAY = Object.keys(colors.default) as COLORS[];
export type COLORS_WITHOUT_KINDS = Exclude<
  COLORS,
  | KINDS
  | 'black'
  | 'white'
  | 'grey'
  | 'primaryContrast'
  | 'errorContrast'
  | 'successContrast'
  | 'infoContrast'
  | 'warningContrast'
>;
export const COLORS_OBJECT = colors.default;
export const COLORS_OBJECT_DARK = colors.dark;

export const COLORS_WITHOUT_KINDS_ARRAY = Object.keys(
  colors.default
) as COLORS_WITHOUT_KINDS[];

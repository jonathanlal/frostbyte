import { SIZES, RESPONSIVE_ELEMENTS } from 'utils/constants';
export const responsiveFontSizeVariants = {
  h1: {
    xs: { fontSize: 'clamp(2.4em, 5.0vw, 4.0em)' },
    sm: { fontSize: 'clamp(2.7em, 5.3vw, 4.3em)' },
    md: { fontSize: 'clamp(3.0em, 5.6vw, 4.6em)' },
    lg: { fontSize: 'clamp(3.3em, 5.9vw, 4.9em)' },
    xl: { fontSize: 'clamp(3.6em, 6.2vw, 5.2em)' },
  },
  h2: {
    xs: { fontSize: 'clamp(2.2em, 4.8vw, 3.8em)' },
    sm: { fontSize: 'clamp(2.5em, 5.1vw, 4.1em)' },
    md: { fontSize: 'clamp(2.8em, 5.4vw, 4.4em)' },
    lg: { fontSize: 'clamp(3.1em, 5.7vw, 4.7em)' },
    xl: { fontSize: 'clamp(3.4em, 6.0vw, 5.0em)' },
  },
  h3: {
    xs: { fontSize: 'clamp(2.0em, 4.6vw, 3.6em)' },
    sm: { fontSize: 'clamp(2.3em, 4.9vw, 3.9em)' },
    md: { fontSize: 'clamp(2.6em, 5.2vw, 4.2em)' },
    lg: { fontSize: 'clamp(2.9em, 5.5vw, 4.5em)' },
    xl: { fontSize: 'clamp(3.2em, 5.8vw, 4.8em)' },
  },
  h4: {
    xs: { fontSize: 'clamp(1.8em, 4.4vw, 3.4em)' },
    sm: { fontSize: 'clamp(2.1em, 4.7vw, 3.7em)' },
    md: { fontSize: 'clamp(2.4em, 5.0vw, 4.0em)' },
    lg: { fontSize: 'clamp(2.7em, 5.3vw, 4.3em)' },
    xl: { fontSize: 'clamp(3.0em, 5.6vw, 4.6em)' },
  },
  h5: {
    xs: { fontSize: 'clamp(1.6em, 4.2vw, 3.2em)' },
    sm: { fontSize: 'clamp(1.9em, 4.5vw, 3.5em)' },
    md: { fontSize: 'clamp(2.2em, 4.8vw, 3.8em)' },
    lg: { fontSize: 'clamp(2.5em, 5.1vw, 4.1em)' },
    xl: { fontSize: 'clamp(2.8em, 5.4vw, 4.4em)' },
  },
  h6: {
    xs: { fontSize: 'clamp(1.4em, 4.0vw, 3.1em)' },
    sm: { fontSize: 'clamp(1.7em, 4.3vw, 3.4em)' },
    md: { fontSize: 'clamp(2.0em, 4.6vw, 3.7em)' },
    lg: { fontSize: 'clamp(2.3em, 4.9vw, 4.0em)' },
    xl: { fontSize: 'clamp(2.6em, 5.2vw, 4.3em)' },
  },
  p: {
    xs: { fontSize: 'clamp(1.2em, 4.0vw, 2.0em)' },
    sm: { fontSize: 'clamp(1.5em, 4.3vw, 2.3em)' },
    md: { fontSize: 'clamp(1.8em, 4.6vw, 2.6em)' },
    lg: { fontSize: 'clamp(2.1em, 4.9vw, 2.9em)' },
    xl: { fontSize: 'clamp(2.4em, 5.2vw, 3.2em)' },
  },
} as Record<RESPONSIVE_ELEMENTS, Record<SIZES, { fontSize: string }>>;

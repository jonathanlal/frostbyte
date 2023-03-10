import { createStitches } from '@stitches/react';
import { defaultStyles } from 'styles/defaultstyles';

export const {
  styled,
  getCssText,
  globalCss,
  createTheme,
  theme,
  reset,
  config,
} = createStitches(defaultStyles);

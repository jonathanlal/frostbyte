import { createStitches } from '@stitches/react';
/* import { Zen_Maru_Gothic, Fira_Mono  } from '@next/font/google';

const zen = Zen_Maru_Gothic({weight: '500', subsets: ['cyrillic']});
const fira = Fira_Mono({weight: '500', subsets: ['cyrillic']}); */

export const { styled, getCssText, globalCss } = createStitches({
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  theme: {
    /*       fonts: {
        zen: zen.style.fontFamily,
        fira: fira.style.fontFamily,
      }, */
    colors: {
      purple: '#6c0392',
      green: '#38f689',
      blue: '#00bfff',
      red: '#ff6347',
      yellow: '#ffd700',
      orange: '#f4b350',
      grey: '#d5d5d5',
      black: '#111827',
      white: '#FEFEFE',
    },
    fontSizes: {
      1: '20px',
      2: '23px',
      3: '26px',
      4: '29px',
      5: '32px',
      6: '35px',
      7: '38px',
      8: '41px',
      9: '44px',
      10: '47px',
    },
    borderWidths: {
      thinBorder: '1px',
      thickBorder: '2px',
    },
    radii: {
      1: '10px',
    },
    space: {
      1: '3px',
      2: '6px',
      3: '9px',
    },
    shadows: {
      1: 'rgba(0, 0, 0, 0.24) 0px 2px 10px',
      2: 'rgba(0, 0, 0, 0.44) 0px 2px 10px',
      3: 'rgba(0, 0, 0, 0.64) 0px 2px 10px',
    },
  },
});

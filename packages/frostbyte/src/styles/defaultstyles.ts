import { FrostbyteConfigType } from 'types/frostbyteConfigType';
import { colors } from './colors';
import { shadowStyles } from './defaults/shadowStyles';

//move to script
function generateFontSizes() {
  const fontSizes: { [key: number]: string } = {};

  for (let i = 12; i <= 70; i += 1) {
    fontSizes[i] = `${i}px`;
  }

  return fontSizes;
}

export const defaultStyles: FrostbyteConfigType = {
  media: {
    smMax: '(max-width: 640px)',
    mdMax: '(max-width: 850px)',
    lgMax: '(max-width: 1024px)',
    smMin: '(min-width: 640px)',
    mdMin: '(min-width: 850px)',
    lgMin: '(min-width: 1024px)',
  },
  theme: {
    colors: {
      ...colors.default,
    },
    fontSizes: generateFontSizes(),
    borderWidths: {
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
    },
    radii: {
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      19: '19px',
      20: '20px',
      21: '21px',
      22: '22px',
      23: '23px',
      24: '24px',
      25: '25px',
      26: '26px',
      27: '27px',
      28: '28px',
      29: '29px',
      30: '30px',
      p5: '5%',
      p10: '10%',
      p15: '15%',
      p20: '20%',
      p30: '30%',
      p40: '40%',
      p50: '50%',
    },
    space: {
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      19: '19px',
      20: '20px',
      21: '21px',
      22: '22px',
      23: '23px',
      24: '24px',
      25: '25px',
      26: '26px',
      27: '27px',
      28: '28px',
      29: '29px',
      30: '30px',
    },
    shadows: {
      1: 'rgba(0, 0, 0, 0.24) 0px 2px 10px',
      2: 'rgba(0, 0, 0, 0.44) 0px 2px 10px',
      3: 'rgba(0, 0, 0, 0.64) 0px 2px 10px',
      ...shadowStyles,
    },
    fontWeights: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
  },
};

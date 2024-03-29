import {
  gray,
  blue,
  red,
  green,
  purple,
  yellow,
  orange,
  tomato,
  crimson,
  pink,
  plum,
  violet,
  indigo,
  cyan,
  teal,
  grass,
  brown,
  sky,
  mint,
  lime,
  amber,
  gold,
  bronze,
  mauve,
  mauveDark,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  purpleDark,
  yellowDark,
  orangeDark,
  crimsonDark,
  pinkDark,
  plumDark,
  indigoDark,
  cyanDark,
  tealDark,
  grassDark,
  brownDark,
  skyDark,
  mintDark,
  limeDark,
  amberDark,
  goldDark,
  bronzeDark,
  tomatoDark,
  violetDark,
} from '@radix-ui/colors';

export const brandColors = {
  primary: '$purple8',
  success: '$grass8',
  info: '$sky8',
  error: '$tomato8',
  warning: '$amber8',
  primaryContrast: '$purple12',
  successContrast: '$grass12',
  infoContrast: '$sky12',
  errorContrast: '$tomato12',
  warningContrast: '$amber12',
};

export const colors = {
  default: {
    ...purple,
    ...green,
    ...blue,
    ...red,
    ...yellow,
    ...orange,
    ...gray,
    ...tomato,
    ...crimson,
    ...pink,
    ...plum,
    ...violet,
    ...indigo,
    ...cyan,
    ...teal,
    ...grass,
    ...brown,
    ...sky,
    ...mint,
    ...lime,
    ...amber,
    ...gold,
    ...bronze,
    ...brandColors,
    ...mauve,
    grey: '$gray9',
    black: '#111827',
    white: '#FEFEFE',
  },
  dark: {
    ...purpleDark,
    ...greenDark,
    ...blueDark,
    ...redDark,
    ...yellowDark,
    ...orangeDark,
    ...grayDark,
    ...tomatoDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...violetDark,
    ...indigoDark,
    ...cyanDark,
    ...tealDark,
    ...grassDark,
    ...brownDark,
    ...skyDark,
    ...mintDark,
    ...limeDark,
    ...amberDark,
    ...goldDark,
    ...bronzeDark,
    ...brandColors,
    ...mauveDark,
    grey: '#7f7f7f',
    black: '#e4e4e4',
    white: '#0a0e17',
  },
};

import { ConfigType } from '@stitches/react/types/config';
import { colors } from './colors';

export const darkThemeStyles: ConfigType.Theme = {
  colors: {
    ...colors.dark,
  },
  shadows: {
    1: 'rgba(255, 255, 255, 0.24) 0px 2px 10px',
    2: 'rgba(255, 255, 255, 0.44) 0px 2px 10px',
    3: 'rgba(255, 255, 255, 0.64) 0px 2px 10px',
  },
};

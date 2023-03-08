import { brandColors } from 'styles/colors';
import { createContext } from 'react';

export const FrostbyteContext = createContext<{
  currentTheme: 'defaultTheme' | 'darkTheme' | 'customTheme';
  colorKinds: {
    primary: string;
    error: string;
    success: string;
    info: string;
    warning: string;
  };
}>({
  currentTheme: 'defaultTheme',
  colorKinds: {
    primary: brandColors.primary,
    error: brandColors.error,
    success: brandColors.success,
    info: brandColors.info,
    warning: brandColors.warning,
  },
});

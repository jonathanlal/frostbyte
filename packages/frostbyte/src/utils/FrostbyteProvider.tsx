import React, { Key, useEffect } from 'react';
import { FrostbyteContext } from 'utils/FrostbyteContext';
import { createTheme } from './getStyles';
import { ConfigType } from '@stitches/react/types/config';
import { darkThemeStyles } from 'styles/darkTheme';
import { globalStyles } from 'styles/globalCss';

export type CustomThemeType = {
  name: string;
  theme: ConfigType.Theme;
  isActive?: boolean; //remove isActive after testing (they either pass a customTheme or not)
} | null;

export interface FrostbyteProviderProps {
  children: React.ReactNode;
  customTheme?: CustomThemeType;
  darkMode?: {
    hasDarkMode: boolean;
    isActive: boolean;
  };
  globalReset?: boolean;
}
export const FrostbyteProvider = ({
  customTheme,
  darkMode,
  globalReset = true,
  children,
}: FrostbyteProviderProps) => {
  if (globalReset) globalStyles();

  if (darkMode && darkMode.hasDarkMode && darkMode.isActive) {
    const darkTheme = createTheme('dark-theme', darkThemeStyles);
    return (
      <FrostbyteContext.Provider value={{ something: '' }}>
        <div className={darkTheme}>{children}</div>
      </FrostbyteContext.Provider>
    );
  }

  //remove isActive after testing (they either pass a customTheme or not)
  if (customTheme && customTheme.isActive) {
    const theme = createTheme(customTheme.name, customTheme.theme);
    return (
      <FrostbyteContext.Provider value={{ something: '' }}>
        <div key={theme.className} className={theme}>
          {children}
        </div>
      </FrostbyteContext.Provider>
    );
  }

  return (
    <FrostbyteContext.Provider value={{ something: '' }}>
      {children}
    </FrostbyteContext.Provider>
  );
};

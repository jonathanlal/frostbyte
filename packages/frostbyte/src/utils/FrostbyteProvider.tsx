import React from 'react';
import { FrostbyteContext } from 'utils/FrostbyteContext';
import { createTheme } from './getStyles';
import { ConfigType } from '@stitches/react/types/config';
import { darkThemeStyles } from 'styles/darkTheme';

export const FrostbyteProvider = ({
  customTheme,
  darkMode,
  children,
}: {
  children: React.ReactNode;
  customTheme?: {
    name: string;
    theme: ConfigType.Theme;
    isActive?: boolean;
  };
  darkMode?: {
    hasDarkMode: boolean;
    isActive: boolean;
  };
}) => {
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
        <div className={theme}>{children}</div>
      </FrostbyteContext.Provider>
    );
  }

  return (
    <FrostbyteContext.Provider value={{ something: '' }}>
      {children}
    </FrostbyteContext.Provider>
  );
};

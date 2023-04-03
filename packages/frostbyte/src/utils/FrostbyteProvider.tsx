import React from 'react';
import { FrostbyteContext } from 'utils/FrostbyteContext';
import { createTheme, config, styled } from './getStyles';
import { ConfigType } from '@stitches/react/types/config';
import { darkThemeStyles as defaultDarkTheme } from 'styles/darkTheme';
import { reset as resetTheme } from 'utils/getStyles';
import { globalStyles } from 'styles/globalCss';
import * as Tooltip from '@radix-ui/react-tooltip';
import { NavMenu, NavMenuProps } from 'components/NavMenu';
import { Footer, FooterProps } from 'components/Footer';

export type CustomThemeType = ConfigType.Theme | undefined | null;

export interface FrostbyteProviderProps {
  children: React.ReactNode;
  customTheme?: CustomThemeType;
  customDarkTheme?: CustomThemeType;
  isCustomThemeActive?: boolean;
  isDarkThemeActive?: boolean;
  shouldResetGlobalStyles?: boolean;
  shouldForceThemeReset?: boolean;
  toolTipProvider?: boolean;
  useLayout?: boolean;
  navMenu?: NavMenuProps;
  footer?: FooterProps;
}

const Layout = styled('div', {
  backgroundColor: '$white',
  height: '100vh',
  fontSize: '18px',
  color: '$black',
  padding: '30px 25px',
});

const Providers = ({
  toolTipProvider,
  children,
}: {
  toolTipProvider: boolean;
  children: React.ReactNode;
}) => {
  if (toolTipProvider) {
    return <Tooltip.Provider>{children}</Tooltip.Provider>;
  }
  return <>{children}</>;
};

/**
 * if isDarkThemeActive is true, and custom theme is defined but no custom dark theme is defined, then the custom theme color keys will also be used in dark theme (as long as isCustomThemeActive is also true)
 * use customDarkTheme if you want to have a different color keys ($red8, $blue8 etc..) for dark theme (otherwise color keys will be the same as customTheme)
 *
 * shouldForceThemeReset: if true, will force the theme to be reloaded on every render (useful for when you want to change the theme dynamically)
 */
export const FrostbyteProvider = ({
  customTheme,
  customDarkTheme,
  isCustomThemeActive = false,
  isDarkThemeActive = false,
  shouldResetGlobalStyles = true,
  shouldForceThemeReset = false,
  toolTipProvider = true,
  useLayout = true,
  navMenu,
  footer,
  children,
}: FrostbyteProviderProps) => {
  if (shouldResetGlobalStyles) globalStyles();

  if (shouldForceThemeReset) resetTheme();

  if (isDarkThemeActive) {
    let darkThemeStyles;
    if (customDarkTheme) {
      darkThemeStyles = customDarkTheme;
    } else if (customTheme && isCustomThemeActive) {
      darkThemeStyles = customTheme;
    } else {
      darkThemeStyles = defaultDarkTheme;
    }
    const darkThemeName = 'darkTheme';
    const darkTheme = createTheme(darkThemeName, darkThemeStyles);

    const colorKinds = {
      primary: darkThemeStyles?.colors?.['primary'] as string,
      success: darkThemeStyles?.colors?.['success'] as string,
      error: darkThemeStyles?.colors?.['error'] as string,
      warning: darkThemeStyles?.colors?.['warning'] as string,
      info: darkThemeStyles?.colors?.['info'] as string,
    };
    return (
      <FrostbyteContext.Provider
        value={{
          currentTheme: darkThemeName,
          colorKinds,
        }}
      >
        <Providers toolTipProvider={toolTipProvider}>
          <div className={darkTheme}>
            {navMenu && <NavMenu {...navMenu} />}
            {useLayout ? <Layout>{children}</Layout> : children}
            {footer && <Footer {...footer} />}
          </div>
        </Providers>
      </FrostbyteContext.Provider>
    );
  }

  if (isCustomThemeActive && customTheme) {
    const customThemeName = 'customTheme';
    const theme = createTheme(customThemeName, customTheme);
    const colorKinds = {
      primary: customTheme.colors?.['primary'] as string,
      success: customTheme.colors?.['success'] as string,
      error: customTheme.colors?.['error'] as string,
      warning: customTheme.colors?.['warning'] as string,
      info: customTheme.colors?.['info'] as string,
    };
    return (
      <FrostbyteContext.Provider
        value={{
          currentTheme: customThemeName,
          colorKinds,
        }}
      >
        <Providers toolTipProvider={toolTipProvider}>
          <div className={theme}>
            {navMenu && <NavMenu {...navMenu} />}
            {useLayout ? <Layout>{children}</Layout> : children}
            {footer && <Footer {...footer} />}
          </div>
        </Providers>
      </FrostbyteContext.Provider>
    );
  }

  const defaultTheme = config.theme as ConfigType.Theme;
  const colorKinds = {
    primary: defaultTheme.colors?.['primary'] as string,
    success: defaultTheme.colors?.['success'] as string,
    error: defaultTheme.colors?.['error'] as string,
    warning: defaultTheme.colors?.['warning'] as string,
    info: defaultTheme.colors?.['info'] as string,
  };

  return (
    <FrostbyteContext.Provider
      value={{
        currentTheme: 'defaultTheme',
        colorKinds,
      }}
    >
      <Providers toolTipProvider={toolTipProvider}>
        {navMenu && <NavMenu {...navMenu} />}
        {useLayout ? <Layout>{children}</Layout> : children}
        {footer && <Footer {...footer} />}
      </Providers>
    </FrostbyteContext.Provider>
  );
};

import { createStitches } from '@stitches/react';
import { defaultStyles } from 'styles/defaultstyles';
import { FrostbyteContext } from 'utils/FrostbyteContext';
import { FrostbyteConfigType } from 'types/FrostbyteConfigType';
import React from 'react';

export const FrostbyteProvider = ({
  styles,
  children,
}: {
  children: React.ReactNode;
  styles: FrostbyteConfigType;
}) => {
  const defaultPrefix = defaultStyles.prefix;
  const defaultMedia = defaultStyles.media;
  const defaultTheme = defaultStyles.theme;
  const defaultThemeMap = defaultStyles.themeMap;
  const defaultUtils = defaultStyles.utils;

  //theme related
  const defaultColors = defaultTheme?.colors;
  const defaultFontSizes = defaultTheme?.fontSizes;
  const defaultBorderWidths = defaultTheme?.borderWidths;
  const defaultRadii = defaultTheme?.radii;
  const defaultSpace = defaultTheme?.space;
  const defaultShadows = defaultTheme?.shadows;

  const updatedStyles: FrostbyteConfigType = {
    prefix: styles?.prefix || defaultPrefix,
    media: {
      ...defaultMedia,
      ...styles?.media,
    },
    theme: {
      colors: {
        ...defaultColors,
        ...styles?.theme?.colors,
      },
      fontSizes: {
        ...defaultFontSizes,
        ...styles?.theme?.fontSizes,
      },
      borderWidths: {
        ...defaultBorderWidths,
        ...styles?.theme?.borderWidths,
      },
      radii: {
        ...defaultRadii,
        ...styles?.theme?.radii,
      },
      space: {
        ...defaultSpace,
        ...styles?.theme?.space,
      },
      shadows: {
        ...defaultShadows,
        ...styles?.theme?.shadows,
      },
    },
    themeMap: {
      ...defaultThemeMap,
      ...styles?.themeMap,
    },
    utils: {
      ...defaultUtils,
      ...styles?.utils,
    },
  };

  const { config } = createStitches(updatedStyles);
  return (
    <FrostbyteContext.Provider value={config}>
      {children}
    </FrostbyteContext.Provider>
  );
};

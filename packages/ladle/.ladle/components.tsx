import {
  GlobalProvider,
  useLadleContext,
  ActionType,
  ThemeState,
} from '@ladle/react';
import { COLORS_OBJECT, FrostbyteProvider } from 'frostbyte';
import React, { useState } from 'react';
import { CustomThemeSelect } from './CustomThemeSelect';

export const Provider: GlobalProvider = ({ children, storyMeta }) => {
  const [isCustomThemeOn, setIsCustomThemeOn] = useState(false);

  const { globalState, dispatch } = useLadleContext();

  const toggleDarkMode = () => {
    dispatch({
      type: ActionType.UpdateTheme,
      value:
        globalState.theme === ThemeState.Dark
          ? ThemeState.Light
          : ThemeState.Dark,
    });
  };
  const isDarkThemeActive = globalState.theme === ThemeState.Dark;

  const defaultThemeColors = {
    primary: COLORS_OBJECT['primary'],
    success: COLORS_OBJECT['success'],
    error: COLORS_OBJECT['error'],
    warning: COLORS_OBJECT['warning'],
    info: COLORS_OBJECT['info'],
  };

  const [customThemeColors, setCustomThemeColors] =
    useState(defaultThemeColors);

  return (
    <>
      <button onClick={() => toggleDarkMode()}>
        isDarkThemeActive: {isDarkThemeActive.toString()}
      </button>

      <button onClick={() => setIsCustomThemeOn(!isCustomThemeOn)}>
        customTheme: {isCustomThemeOn.toString()}
      </button>

      <CustomThemeSelect
        setCustomThemeColors={setCustomThemeColors}
        customThemeColors={customThemeColors}
        isDarkMode={isDarkThemeActive}
      />

      <FrostbyteProvider
        isDarkThemeActive={globalState.theme === 'dark'}
        customTheme={{
          colors: customThemeColors,
        }}
        isCustomThemeActive={isCustomThemeOn}
        shouldForceThemeReset={true}
      >
        <h1>Theme: {globalState.theme}</h1>
        <h2>{storyMeta?.customValue}</h2>
        {children}
      </FrostbyteProvider>
    </>
  );
};

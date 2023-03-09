import {
  GlobalProvider,
  useLadleContext,
  ActionType,
  ThemeState,
} from '@ladle/react';
import { COLORS_OBJECT, FrostbyteProvider, H, P } from 'frostbyte';
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
      <div style={{ textAlign: 'right' }}>
        <button onClick={() => toggleDarkMode()}>
          dark: {isDarkThemeActive.toString()}
        </button>
      </div>
      {!storyMeta?.disableColorSelector && (
        <>
          <CustomThemeSelect
            setCustomThemeColors={setCustomThemeColors}
            customThemeColors={customThemeColors}
            isDarkMode={isDarkThemeActive}
            setIsCustomThemeOn={setIsCustomThemeOn}
            isCustomThemeOn={isCustomThemeOn}
          />
        </>
      )}
      <FrostbyteProvider
        isDarkThemeActive={globalState.theme === 'dark'}
        customTheme={{
          colors: customThemeColors,
        }}
        isCustomThemeActive={isCustomThemeOn}
        shouldForceThemeReset={true}
      >
        <H size={35} color="black">
          {storyMeta?.title}
        </H>
        <P color="black" size={20}>
          {storyMeta?.description}
        </P>
        <br />
        {children}
      </FrostbyteProvider>
    </>
  );
};

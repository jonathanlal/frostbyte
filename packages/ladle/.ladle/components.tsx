import type { GlobalProvider } from '@ladle/react';
import { COLORS_OBJECT, FrostbyteProvider } from 'frostbyte';
import React, { useState } from 'react';
import { CustomThemeSelect } from './CustomThemeSelect';

export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => {
  const [hasDarkMode, setHasDarkMode] = useState(false);
  const [isCustomThemeOn, setIsCustomThemeOn] = useState(false);
  const [customThemeDropdown, setCustomThemeDropdown] = useState(false);
  const [removeChangeThemeButton, setRemoveChangeThemeButton] = useState(false);
  const [removeRestoreThemeButton, setRemoveRestoreThemeButton] =
    useState(false);

  const defaultThemeColors = {
    primary: COLORS_OBJECT['primary'],
    success: COLORS_OBJECT['success'],
    error: COLORS_OBJECT['error'],
    warning: COLORS_OBJECT['warning'],
    info: COLORS_OBJECT['info'],
  };

  const [customTheme, setCustomTheme] = useState({
    name: 'customTheme',
    theme: {
      colors: defaultThemeColors,
    },
    isActive: true,
  });

  const modifyThemeColors = () => {
    setIsCustomThemeOn(!isCustomThemeOn);
    setCustomThemeDropdown(false);
    setRemoveChangeThemeButton(true);
  };

  const restoreTheme = () => {
    setCustomTheme({
      name: 'customTheme',
      theme: {
        colors: defaultThemeColors,
      },
      isActive: false,
    });
    setRemoveRestoreThemeButton(true);
  };

  const hasChangedColors =
    JSON.stringify(defaultThemeColors) !==
    JSON.stringify(customTheme.theme.colors);

  return (
    <>
      <button onClick={() => setHasDarkMode(!hasDarkMode)}>
        hasDarkMode: {hasDarkMode.toString()}
      </button>

      {!removeChangeThemeButton ? (
        <button onClick={() => setCustomThemeDropdown(!customThemeDropdown)}>
          modifyThemeColors
        </button>
      ) : (
        <>
          {!removeRestoreThemeButton ? (
            <button onClick={restoreTheme}>change theme back to default</button>
          ) : (
            <button onClick={() => window.location.reload()}>
              refresh page for custom theme change
            </button>
          )}
        </>
      )}

      {customThemeDropdown && (
        <>
          <CustomThemeSelect
            setCustomTheme={setCustomTheme}
            customTheme={customTheme}
            isDarkMode={globalState.theme === 'dark'}
          />
          <button onClick={modifyThemeColors} disabled={!hasChangedColors}>
            hasCustomTheme: {isCustomThemeOn.toString()}
          </button>
        </>
      )}
      <FrostbyteProvider
        darkMode={{
          hasDarkMode: hasDarkMode,
          isActive: globalState.theme === 'dark',
        }}
        customTheme={isCustomThemeOn ? customTheme : null}
      >
        <h1>Theme: {globalState.theme}</h1>
        <h2>{storyMeta?.customValue}</h2>
        {children}
      </FrostbyteProvider>
    </>
  );
};

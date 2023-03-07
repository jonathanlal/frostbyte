import type { GlobalProvider } from '@ladle/react';
import { FrostbyteProvider } from 'frostbyte';
import React, { useEffect, useState } from 'react';
import { CustomThemeSelect } from './CustomThemeSelect';

export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => {
  const [hasDarkMode, setHasDarkMode] = useState(false);
  const [isCustomThemeOn, setIsCustomThemeOn] = useState(false);
  const [primary, setPrimary] = useState<string | null>(null);

  const [customTheme, setCustomTheme] = useState({
    name: 'customTheme',
    theme: {
      colors: {
        primary: '$yellow1',
        success: '$blue8',
        error: '$plum4',
        warning: '$green4',
        info: '$brown6',
      },
    },
    isActive: true,
  });

  console.log('customTheme', customTheme);
  return (
    <>
      <button onClick={() => setHasDarkMode(!hasDarkMode)}>
        hasDarkMode: {hasDarkMode.toString()}
      </button>

      <button onClick={() => setIsCustomThemeOn(!isCustomThemeOn)}>
        hasCustomTheme: {isCustomThemeOn.toString()}
      </button>

      <button onClick={() => setPrimary('$red11')}>setPrimary to red</button>
      <button onClick={() => setPrimary('$sky11')}>setPrimary to blue</button>

      <CustomThemeSelect
        setCustomTheme={setCustomTheme}
        customTheme={customTheme}
        isDarkMode={globalState.theme === 'dark'}
      />

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

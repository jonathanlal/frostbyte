import React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { styled } from 'utils/getStyles';

const StyledButtonContainer = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  width: '100%',
  variants: {
    isDesktop: {
      false: {
        padding: '18px 25px',
        fontSize: 21,
        color: '$primaryContrast',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'center',
        '&:focus, &:hover': { backgroundColor: '$mauve6', cursor: 'pointer' },
      },
      true: {
        padding: '11px 15px',
        marginRight: '10px',
        color: '$primaryContrast',
        borderRadius: '4px',
        backgroundColor: '$mauve4',
        '&:focus, &:hover': { backgroundColor: '$primary', cursor: 'pointer' },
      },
    },
  },
});

const StyledSVGWrapper = styled('div', {
  variants: {
    isDesktop: {
      false: {
        minWidth: '50px',
      },
      true: {
        minWidth: '25px',
      },
    },
  },
});
export const DarkThemeToggle = ({
  setDarkMode,
  darkMode,
  label,
  darkModeIcon,
  lightModeIcon,
  isDesktop = false,
}: {
  label?: React.ReactNode;
  setDarkMode: (on: boolean) => void;
  darkMode: boolean;
  darkModeIcon?: React.ReactNode;
  lightModeIcon?: React.ReactNode;
  isDesktop?: boolean;
}) => {
  return (
    <StyledButtonContainer
      onClick={() => setDarkMode(!darkMode)}
      isDesktop={isDesktop}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {label && <div>{label}</div>}
      <StyledSVGWrapper isDesktop={isDesktop}>
        {darkMode ? (
          <>
            {darkModeIcon ? (
              darkModeIcon
            ) : (
              <MoonIcon width={25} height={25} color={'white'} />
            )}
          </>
        ) : (
          <>
            {lightModeIcon ? lightModeIcon : <SunIcon width={25} height={25} />}
          </>
        )}
      </StyledSVGWrapper>
    </StyledButtonContainer>
  );
};

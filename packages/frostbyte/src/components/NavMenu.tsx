import React, { ReactNode } from 'react';
import { COLORS, COLORS_WITHOUT_KINDS, KINDS } from 'utils/constants';
import { styled } from 'utils/getStyles';
import { DesktopMenu } from './NavMenu/DesktopMenu';
import { MobileMenu } from './NavMenu/MobileMenu';

export type NavMenuProps = {
  navItems: {
    type: 'link' | 'button' | 'dropdown' | 'darkmode';
    label: ReactNode;
    href?: string;
    dropdown?: {
      label: string;
      href: string;
      linkTitle?: string;
      description?: string;
    }[];
    button?: {
      color?: COLORS_WITHOUT_KINDS;
      outlined?: boolean;
      borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | false;
      kind?: KINDS;
      cta?: boolean;
    };
    darkmode?: {
      isActiveIcon: ReactNode;
      isInactiveIcon: ReactNode;
    };
  }[];
  logo?: {
    comp: ReactNode;
    href?: string;
    parentStyles?: React.CSSProperties;
    title?: string;
  };
  burgerColor?: COLORS;
  setDarkMode?: (on: boolean) => void;
};

export const NavMenu = ({
  navItems,
  logo,
  setDarkMode,
  burgerColor,
}: NavMenuProps) => {
  return (
    <NavContainer>
      <DesktopMenu navItems={navItems} logo={logo} setDarkMode={setDarkMode} />
      <MobileMenu
        navItems={navItems}
        burgerColor={burgerColor}
        logo={logo}
        setDarkMode={setDarkMode}
      />
    </NavContainer>
  );
};

const NavContainer = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  boxShadow: `$colors$primary 0px 0px 10px`,
  backgroundColor: '$mauve1',
  position: 'sticky',
  top: 0,
});

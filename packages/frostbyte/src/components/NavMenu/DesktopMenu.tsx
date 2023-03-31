import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu/dist';
import { keyframes } from '@stitches/react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { styled } from 'utils/getStyles';
import { NavMenuProps } from 'components/NavMenu';
import { Button } from 'components/Button';
import { DarkThemeToggle } from './DarkThemeToggle';
import { useFrostbyte } from 'hooks/useFrostbyte';

const NavigationMenuLogoLink = styled(NavigationMenu.Link, {
  padding: '8px 20px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 20,
  display: 'block',
  textDecoration: 'none',
  '&:focus, &:hover': {
    backgroundColor: '$mauve6',
  },
});

export const DesktopMenu = ({
  navItems,

  logo,
  setDarkMode,
}: NavMenuProps) => {
  const { isDarkTheme } = useFrostbyte();

  const sortedNavItems = navItems.sort((a, b) => {
    if (a.type === 'darkmode') {
      return 1;
    } else if (b.type === 'darkmode') {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <>
      <NavigationMenuRoot>
        {logo && (
          <div
            style={{
              display: 'flex',
              minWidth: '125px',
            }}
          >
            <NavigationMenuLogoLink
              href={logo.href || '/'}
              style={
                logo.parentStyles || {
                  display: 'flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  height: '100%',
                }
              }
              title={logo.title || 'Home'}
            >
              {logo.comp}
            </NavigationMenuLogoLink>
          </div>
        )}
      </NavigationMenuRoot>
      <NavigationMenuRoot>
        <NavigationMenuList key="rightMenuItems" layout="right" gap={'9'}>
          {sortedNavItems.map(
            ({ label, href, type, dropdown, button, darkmode }, index) => (
              <NavigationMenuItem key={`navItem${index}`}>
                {dropdown && type === 'dropdown' ? (
                  <>
                    <NavigationMenuTrigger>
                      <span>{label}</span>
                      <span
                        style={{
                          minWidth: '20px',
                        }}
                      >
                        <CaretDown width={25} height={25} aria-hidden />
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      key={`navMenuContent-${type}-${index}`}
                    >
                      <List layout={dropdown.length > 3 ? 'two' : 'one'}>
                        {dropdown.map(
                          ({
                            label: itemLabel,
                            href: itemHref,
                            description,
                          }) => (
                            <ListItem href={itemHref} title={itemLabel}>
                              {description}
                            </ListItem>
                          )
                        )}
                      </List>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={href}
                    asChild={
                      type === 'button' || type === 'darkmode' ? true : false
                    }
                    isButton={type === 'button' ? true : false}
                  >
                    <>
                      {type === 'button' && (
                        <Button
                          color={button?.color}
                          outlined={button?.outlined}
                          borderRadius={button?.borderRadius}
                          kind={button?.kind}
                          css={{
                            '@mdMax': {
                              width: '100%',
                              paddingTop: '15px',
                              paddingBottom: '15px',
                            },
                          }}
                          href={href}
                        >
                          {label}
                        </Button>
                      )}
                      {type === 'link' && label}

                      {type === 'darkmode' && setDarkMode && (
                        <DarkThemeToggle
                          darkMode={isDarkTheme}
                          setDarkMode={setDarkMode}
                          darkModeIcon={darkmode?.isActiveIcon}
                          lightModeIcon={darkmode?.isInactiveIcon}
                          isDesktop={true}
                        />
                      )}
                    </>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            )
          )}

          <NavigationMenuIndicator>
            <Arrow />
          </NavigationMenuIndicator>
        </NavigationMenuList>
        <ViewportPosition>
          <NavigationMenuViewport />
        </ViewportPosition>
      </NavigationMenuRoot>
    </>
  );
};

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: 'relative',
  width: '100vw',
  padding: '10px 0px',
  zIndex: 1,
  ' & > *:first-child': {
    height: '100%',
  },
  '@mdMax': {
    display: 'none',
  },
});

const NavigationMenuList = styled(NavigationMenu.List, {
  display: 'flex',
  height: '100%',
  variants: {
    layout: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
    gap: {
      3: {
        gap: 3,
      },
      5: {
        gap: 5,
      },
      7: {
        gap: 7,
      },
      9: {
        gap: 9,
      },
    },
  },
  justifyContent: 'center',
  padding: 10,
  listStyle: 'none',
  margin: 0,
});

const NavigationMenuItem = styled(NavigationMenu.Item, {
  display: 'flex',
  alignItems: 'center',
});

const itemHoverStyles = (isButton?: boolean) => {
  const hoverStyles = isButton
    ? {
        '&:hover': { cursor: 'pointer' },
      }
    : {
        '&:focus': { boxShadow: `$primary` },
        '&:hover': { backgroundColor: '$primary', cursor: 'pointer' },
      };
  return hoverStyles;
};
const itemStyles = {
  padding: '11px 18px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 22,
  color: '$primaryContrast',
};

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  all: 'unset',
  ...itemStyles,
  ...itemHoverStyles(),
  display: 'flex',
  alignItems: 'center',
  gap: 5,
});

const NavigationMenuLink = styled(NavigationMenu.Link, {
  ...itemStyles,
  variants: {
    isButton: {
      true: {
        ...itemHoverStyles(true),
      },
      false: {
        ...itemHoverStyles(false),
      },
    },
  },
  display: 'block',
  textDecoration: 'none',
  lineHeight: 1,
});

const NavigationMenuContent = styled(NavigationMenu.Content, {
  position: 'absolute',
  backgroundColor: '$mauve1',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
});

const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',
  transition: 'width, height, 300ms ease',
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
});

const List = styled('ul', {
  margin: 0,
  padding: 0,
  listStyle: 'none',

  '& > li': {
    padding: 10,
  },

  variants: {
    layout: {
      one: {
        display: 'inline',
      },
      two: {
        display: 'grid',
        columnGap: 10,
        gridAutoFlow: 'column',
        gridTemplateRows: 'repeat(2, 1fr)',
      },
    },
  },
  defaultVariants: {
    layout: 'one',
  },
});

interface ListItemProps {
  children: React.ReactNode;
  title: string;
  href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ children, title, href, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <ListItemLink href={href} {...props} ref={forwardedRef}>
          <ListItemHeading>{title}</ListItemHeading>
          <ListItemText>{children}</ListItemText>
        </ListItemLink>
      </NavigationMenu.Link>
    </li>
  )
);
const ListItemLink = styled('a', {
  display: 'block',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  padding: 12,
  borderRadius: 6,
  fontSize: 17,
  lineHeight: 1,
  height: '100%',
  '&:focus': { boxShadow: `$primary` },
  '&:hover': { backgroundColor: '$mauve4' },
});

const ListItemHeading = styled('div', {
  lineHeight: 1.2,
  marginBottom: 5,
  fontSize: 22,
  color: '$primaryContrast',
  fontWeight: 500,
  textDecoration: 'underline',
  textUnderlineOffset: 2,
});

const ListItemText = styled('p', {
  all: 'unset',
  color: '$mauve11',
  lineHeight: 1.4,
  fontWeight: 'initial',
  fontSize: 20,
});

const ViewportPosition = styled('div', {
  position: 'absolute',
  justifyContent: 'flex-end',
  width: '100%',
  top: '100%',
  left: 0,
  '@media only screen and (min-width: 600px)': {
    padding: '0',
  },
  padding: '0 20px',
  perspective: '2000px',
  display: 'block',
});

const CaretDown = styled(CaretDownIcon, {
  position: 'relative',
  width: 20,
  color: '$primaryContrast',
  top: 1,
  transition: 'transform 250ms ease',
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
});

const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  top: '100%',
  zIndex: 1,
  transition: 'width, transform 250ms ease',
  '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
});

const Arrow = styled('div', {
  position: 'relative',
  top: '70%',
  width: 0,
  height: 0,
  marginTop: 5,
  borderStyle: 'solid',
  borderWidth: '0 10px 15px 10px',
  borderColor: 'transparent transparent $mauve9 transparent',
});

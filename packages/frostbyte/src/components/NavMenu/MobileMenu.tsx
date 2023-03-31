import React, { ReactNode } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu/dist';
import { keyframes } from '@stitches/react';
import { CaretDownIcon, BorderSolidIcon } from '@radix-ui/react-icons';
import { Twirl as Hamburger } from 'hamburger-react';
import { styled } from 'utils/getStyles';
import { useFrostbyte } from 'hooks/useFrostbyte';
import { COLORS, getColorValue } from 'utils/constants';
import { NavMenuProps } from 'components/NavMenu';
import { Button } from 'components/Button';
import { DarkThemeToggle } from './DarkThemeToggle';

const TriggerWithCaret = ({
  label,
  navItem,
  currentlyOpenNavItem,
  setCurrentlyOpenNavItem,
}: {
  label: ReactNode;
  navItem: string;
  currentlyOpenNavItem: string;
  setCurrentlyOpenNavItem: (navItem: string) => void;
}) => {
  const toggleClose = (id: string | null) => {
    if (id && id.includes(currentlyOpenNavItem)) {
      setCurrentlyOpenNavItem('');
    }
  };
  const isOpen = currentlyOpenNavItem === navItem;
  return (
    <NavigationMenuTrigger
      onClick={(e) => toggleClose(e.currentTarget.getAttribute('id'))}
    >
      <div>{label}</div>
      <ControlledCaret open={isOpen} aria-hidden width={24} height={24} />
    </NavigationMenuTrigger>
  );
};
export const MobileMenu = ({
  navItems,
  burgerColor = 'primary',
  logo,
  setDarkMode,
}: NavMenuProps) => {
  const { isDarkTheme } = useFrostbyte();
  const [currentlyOpenNavItem, setCurrentlyOpenNavItem] = React.useState('');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  let burgerMenuColor = getColorValue(burgerColor, isDarkTheme);
  if (burgerMenuColor.includes('$')) {
    burgerMenuColor = getColorValue(
      burgerMenuColor.slice(1) as COLORS,
      isDarkTheme
    );
  }

  const cta = navItems.find((i) => i.type === 'button' && i?.button?.cta);
  const ctaButton = cta?.button;
  const ctaLabel = cta?.label;
  const ctaHref = cta?.href;

  return (
    <>
      <NavigationMenuRoot>
        {logo && (
          <div
            style={{
              display: 'flex',
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

      <NavigationMenuRoot
        onValueChange={(e) => setIsMenuOpen(e ? true : false)}
      >
        <NavigationMenuList key="leftNavLinks" layout="right">
          {cta && (
            <NavigationMenuItem
              style={{
                marginRight: '15px',
              }}
            >
              <NavigationMenuLink asChild>
                <Button
                  color={ctaButton?.color}
                  outlined={ctaButton?.outlined}
                  borderRadius={ctaButton?.borderRadius}
                  kind={ctaButton?.kind}
                  href={ctaHref}
                >
                  {ctaLabel}
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
          <NavigationMenuItem value="mobileMenu">
            <NavigationMenuBurgerTrigger title="Main menu">
              <StyledHamburger
                aria-hidden
                toggled={isMenuOpen}
                color={burgerMenuColor}
              />
            </NavigationMenuBurgerTrigger>
            <NavigationMenuContent>
              <NavigationMenu.Sub
                onValueChange={(e) => setCurrentlyOpenNavItem(e)}
                value={currentlyOpenNavItem}
              >
                <List key="subMenuList">
                  {navItems
                    .filter((i) => !(i.type === 'button' && i?.button?.cta))
                    .map(
                      (
                        { label, href, dropdown, type, button, darkmode },
                        index
                      ) => (
                        <>
                          {dropdown && type == 'dropdown' ? (
                            <NavigationMenuItem
                              key={`navSubItem-${type}-${index}`}
                              value={`navItem-${index}`}
                              tabIndex={-1}
                            >
                              <TriggerWithCaret
                                label={label}
                                navItem={`navItem-${index}`}
                                currentlyOpenNavItem={currentlyOpenNavItem}
                                setCurrentlyOpenNavItem={
                                  setCurrentlyOpenNavItem
                                }
                              />
                              <NavigationMenuContent
                                key={`navItemContent-${index}`}
                              >
                                <List key={`navItemContentList-${index}`}>
                                  {dropdown &&
                                    dropdown.map(
                                      ({
                                        label: itemLabel,
                                        href: itemHref,
                                        description,
                                      }) => (
                                        <ListItem
                                          href={itemHref}
                                          title={itemLabel}
                                          key={`navItem-${type}-${index}`}
                                        >
                                          {description}
                                        </ListItem>
                                      )
                                    )}
                                </List>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          ) : (
                            <NavigationLMenuLinkItem
                              key={`navItem-${index}`}
                              value={`navItem-${index}`}
                              tabIndex={
                                type === 'button' || type === 'darkmode'
                                  ? -1
                                  : 0
                              }
                            >
                              {type !== 'darkmode' ? (
                                <NavigationMenuLink
                                  asChild={type === 'button' ? true : false}
                                  tabIndex={type === 'link' ? -1 : 0}
                                  href={href}
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
                                  </>
                                </NavigationMenuLink>
                              ) : (
                                <>
                                  {type === 'darkmode' && setDarkMode && (
                                    <DarkThemeToggle
                                      darkMode={isDarkTheme}
                                      setDarkMode={setDarkMode}
                                      label={label}
                                      darkModeIcon={darkmode?.isActiveIcon}
                                      lightModeIcon={darkmode?.isInactiveIcon}
                                    />
                                  )}
                                </>
                              )}
                            </NavigationLMenuLinkItem>
                          )}
                        </>
                      )
                    )}
                </List>
              </NavigationMenu.Sub>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <ViewportPosition tabIndex={-1}>
          <NavigationMenuViewport tabIndex={-1} />
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

const NavigationMenuRoot = styled(NavigationMenu.Root, {
  width: '100vw',
  zIndex: 1,
  ' & > *:first-child': {
    height: '100%',
  },
  '@mdMin': {
    display: 'none',
  },
});

const NavigationMenuList = styled(NavigationMenu.List, {
  display: 'flex',
  alignItems: 'center',
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

const NavigationMenuItem = styled(NavigationMenu.Item, {});

//exists on desktop also...
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

const NavigationLMenuLinkItem = styled(NavigationMenu.Item, {
  all: 'unset',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  '&[data-state="open"], &:focus, &:hover': { backgroundColor: '$mauve6' },
});
const NavigationMenuLink = styled(NavigationMenu.Link, {
  width: '100%',
  padding: '18px 25px',
  textDecoration: 'none',
  fontSize: 21,
  color: '$primaryContrast',
  '&:focus, &:hover': {
    backgroundColor: '$mauve6',
    outline: 'none',
  },
});

const NavigationMenuBurgerTrigger = styled(NavigationMenu.Trigger, {
  all: 'unset',
  margin: '5px 10px',
  '&:focus, &:hover': {
    backgroundColor: '$mauve6',
  },
});

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  all: 'unset',
  width: '100%',
  fontSize: 21,
  padding: '18px 25px',
  color: '$primaryContrast',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  '&[data-state="open"], &:focus, &:hover': {
    backgroundColor: '$mauve6',
  },
});

const StyledHamburger = styled(Hamburger, {});

const NavigationMenuContent = styled(NavigationMenu.Content, {
  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },

  '&[data-state="open"]': {
    borderBottom: '2px solid $mauve6',
  },
});

const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  width: '100%',
  borderTop: '2px solid $mauve4',
  backgroundColor: '$mauve3',
  overflow: 'hidden',
  transition: 'width, height, 300ms ease',
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  height: 'var(--radix-navigation-menu-viewport-height)',
});

const List = styled('ul', {
  display: 'grid',
  padding: 0,
  margin: 0,
  listStyle: 'none',

  '& li:not(:last-child)': {
    borderBottom: '1px solid $mauve6',
  },
});

interface ListItemProps {
  children: React.ReactNode;
  title: string;
  href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ children, title, href, ...props }, ref) => (
    <li>
      <NavigationMenu.Link asChild>
        <ListItemLink href={href} {...props} ref={ref}>
          <div style={{ minWidth: '15px' }}>
            <ListLineIcon />
          </div>
          <div>
            <ListItemHeading>{title}</ListItemHeading>
            {children && <ListItemText>{children}</ListItemText>}
          </div>
        </ListItemLink>
      </NavigationMenu.Link>
    </li>
  )
);
const ListLineIcon = styled(BorderSolidIcon, {
  color: '$primary',
});
const ListItemLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  padding: '20px',

  lineHeight: 1,
  '&:focus, &:hover': { boxShadow: `$1` },
});

const ListItemHeading = styled('div', {
  fontWeight: 500,
  lineHeight: 1.2,
  fontSize: 19,
  marginBottom: 5,
  color: '$primaryContrast',
  textDecoration: 'underline',
  textUnderlineOffset: 2,
});

const ListItemText = styled('p', {
  all: 'unset',
  color: '$mauve11',
  lineHeight: 1.4,
  fontWeight: 'initial',
  fontSize: 17,
  paddingTop: 20,
});

const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  height: '100%',
  left: 0,
  perspective: '2000px',
});

const ControlledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: '$primaryContrast',
  top: 1,
  transition: 'transform 250ms ease',
  variants: {
    open: {
      true: {
        transform: 'rotate(-180deg)',
      },
      false: {
        transform: 'rotate(0deg)',
      },
    },
  },
});

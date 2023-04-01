import { ActionType, Story, ThemeState, useLadleContext } from '@ladle/react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { NavMenu, NavMenuProps } from 'frostbyte';

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="currentColor"
  >
    <path d="M22,14H9V5A4,4,0,0,0,1,5V8A1,1,0,0,0,3,8V5A2,2,0,0,1,7,5V15a8,8,0,0,0,16,0A1,1,0,0,0,22,14Zm-7,7a6.01,6.01,0,0,1-5.917-5H20.917A6.01,6.01,0,0,1,15,21Z" />
  </svg>
);

const navItems: NavMenuProps['navItems'] = [
  {
    type: 'link',
    label: 'Settings',
  },
  {
    type: 'dropdown',
    label: 'Components',
    dropdown: [
      {
        label: 'Accordion',
        description:
          'A vertically stacked set of interactive headings that each reveal an associated section of content.',
        href: '/?story=accordion--accordion',
      },
      {
        label: 'Alert',
        description: 'Alerts can be controlled via a button or using the api',
        href: '/?story=alert--alert',
      },
      {
        label: 'Checkbox',
        description:
          'A control that allows the user to toggle between checked and not checked.',
        href: '/?story=checkbox--checkbox',
      },
      {
        label: 'Radio Group',
        description:
          'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
        href: '/?story=radio-group--radio-group',
      },
    ],
  },
  {
    type: 'darkmode',
    label: 'Toggle Dark Mode',
    darkmode: {
      isActiveIcon: <MoonIcon width={25} height={25} color={'white'} />,
      isInactiveIcon: <SunIcon width={25} height={25} />,
    },
  },
  {
    type: 'button',
    label: 'Signup',
    href: '/signup?story=nav-menu--navigation-menu',
    button: {
      kind: 'success',
      cta: true,
    },
  },
  {
    href: '/signup?story=nav-menu--navigation-menu',
    type: 'button',
    label: 'Login',
    button: {
      kind: 'primary',
    },
  },
];

export const NavMenuC: Story<NavMenuProps> = ({ ...props }) => {
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

  return (
    <NavMenu
      {...props}
      navItems={navItems}
      logo={{
        comp: <Logo />,
        parentStyles: {
          marginLeft: 15,
          display: 'flex',
          alignItems: 'center',
        },
      }}
      setDarkMode={toggleDarkMode}
    />
  );
};

NavMenuC.args = {
  mobileOnly: false,
};

NavMenuC.storyName = 'Navigation Menu';
NavMenuC.meta = {
  title: 'Navigation Menu',
  description:
    'Mobile friendly navigation menu where you just pass in an object for the navigation items. This component can also be loaded via the FrostbyteProvider. To view mobile mode turn on mobileOnly prop and resize screen',
};

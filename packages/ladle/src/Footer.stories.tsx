import { Story } from '@ladle/react';
import { Footer, FooterProps } from 'frostbyte';

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

const footerItems: FooterProps['footerItems'] = [
  {
    type: 'logo',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    comp: <Logo />,
  },
  {
    label: 'Links',
    type: 'links',
    items: [
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Contact',
        href: '/contact',
      },
      {
        label: 'Privacy',
        href: '/privacy',
      },
      {
        label: 'Terms',
        href: '/terms',
      },
    ],
  },
  {
    label: 'Resources',
    type: 'links',
    items: [
      {
        label: 'Documentation',
        href: '/docs',
      },
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'GitHub',
        href: '/test',
      },
    ],
  },
  {
    label: 'Contact',
    type: 'links',
    items: [
      {
        label: 'Help',
        href: '/docs',
      },
      {
        label: 'Sales',
        href: '/blog',
      },
      {
        label: 'Advertise',
        href: '/test',
      },
    ],
  },
];

export const FooterC: Story<FooterProps> = () => {
  return <Footer footerItems={footerItems} name="Ipsum Lorem" />;
};

FooterC.storyName = 'Footer';
FooterC.meta = {
  title: 'Footer',
  description:
    'Mobile friendly footer where you just pass in an object. This component can also be loaded via the FrostbyteProvider.',
};

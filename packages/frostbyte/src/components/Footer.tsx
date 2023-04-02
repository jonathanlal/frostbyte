import React from 'react';
import { styled } from 'utils/getStyles';
import { H } from './H';
import { P } from './P';

type LogoItem = {
  type: 'logo';
  description?: string;
  comp?: React.ReactNode;
  parentStyles?: React.CSSProperties;
};
type LinksItem = {
  label: string;
  type: 'links';
  items: {
    label: string;
    href: string;
  }[];
};
type CustomItem = {
  type: 'custom';
  comp: React.ReactNode;
  parentStyles?: React.CSSProperties;
};
type FooterItems = LinksItem | LogoItem | CustomItem;
export type FooterProps = {
  name?: string;
  footerItems: FooterItems[];
};
export const Footer = ({ name, footerItems }: FooterProps) => {
  return (
    <StyledFooter>
      <MainSection>
        {footerItems.map((item, index) => (
          <Column key={`item-${index}`} type={item.type}>
            {item.type === 'logo' && (
              <LogoContainer>
                <div
                  style={
                    item.parentStyles || {
                      display: 'flex',
                      alignItems: 'center',
                    }
                  }
                >
                  {item.comp}
                </div>
                <P color={'mauve12'}>{item.description}</P>
              </LogoContainer>
            )}
            {item.type === 'links' && (
              <LinksContainer>
                <H color={'primaryContrast'} as={'h2'}>
                  {item.label}
                </H>
                <List>
                  {item.items.map((link) => (
                    <li key={link.label}>
                      <StyledLink href={link.href}>{link.label}</StyledLink>
                    </li>
                  ))}
                </List>
              </LinksContainer>
            )}
            {item.type === 'custom' && (
              <CustomContainer style={item.parentStyles}>
                {item.comp}
              </CustomContainer>
            )}
          </Column>
        ))}
      </MainSection>
      {name && (
        <BottomBar>&copy; {`${new Date().getFullYear()} ${name}`}</BottomBar>
      )}
    </StyledFooter>
  );
};
const CustomContainer = styled('div', {
  color: '$primaryContrast',
});
const StyledLink = styled('a', {
  textDecoration: 'none',
  color: '$primary',
  '&:hover': {
    textDecoration: 'underline',
  },
});
const BottomBar = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$mauve3',
  padding: '0.5rem',
  color: '$primaryContrast',
});
const LinksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@mdMax': {
    alignItems: 'flex-start',
  },
});
const MainSection = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(12.5rem, 1fr))',
  padding: '1.25rem 1.875rem',
});
const StyledFooter = styled('footer', {
  backgroundColor: '$mauve1',
  boxShadow: `$colors$primary 0px 0px 2px`,
  lineHeight: '1.5',
});
const LogoContainer = styled('div', {
  color: '$primaryContrast',
  '@mdMin': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
});
const Column = styled('div', {
  padding: '1.25rem',
  minWidth: '12.5rem',
  maxWidth: '18rem',
  variants: {
    type: {
      logo: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        '@mdMax': {
          textAlign: 'left',
          display: 'grid',
          gridColumn: '1 / -1',
        },
      },
      links: {},
      custom: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
});
const List = styled('ul', {
  listStyle: 'none',
  padding: 0,
});

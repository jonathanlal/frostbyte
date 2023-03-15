import React, { ReactNode } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { styled } from 'utils/getStyles';

export type ITabContent = {
  header: string;
  content: ReactNode;
}[];

export type TabsProps = {
  defaultTab?: number;
  ariaLabel?: string;
  width?: string;
  tabContent: ITabContent;
};

export const Tabs = ({
  defaultTab = 1,
  tabContent,
  ariaLabel,
  width = '100%',
}: TabsProps) => {
  return (
    <TabsRoot
      defaultValue={`tab${defaultTab}`}
      css={{
        width,
      }}
    >
      <TabsList aria-label={ariaLabel}>
        {tabContent.map(({ header }, index) => (
          <TabsTrigger value={`tab${index + 1}`}>{header}</TabsTrigger>
        ))}
      </TabsList>
      {tabContent.map(({ content }, index) => (
        <TabsContent value={`tab${index + 1}`}>{content}</TabsContent>
      ))}
    </TabsRoot>
  );
};

const TabsRoot = styled(RadixTabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  boxShadow: `$1`,
});

const TabsList = styled(RadixTabs.List, {
  flexShrink: 0,
  display: 'flex',
});

const TabsTrigger = styled(RadixTabs.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: '$white',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  lineHeight: 1,
  color: '$mauve11',
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: '$primary', cursor: 'pointer' },
  '&[data-state="active"]': {
    color: '$primary',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: '$1' },

  variants: {
    kind: {
      primary: {
        '&[data-state="active"]': {
          color: '$primary',
          boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
        },
      },
      error: {
        '&[data-state="active"]': {
          color: '$error',
          boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
        },
      },
      success: {
        '&[data-state="active"]': {
          color: '$success',
          boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
        },
      },
      info: {
        '&[data-state="active"]': {
          color: '$info',
          boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
        },
      },
      warning: {
        '&[data-state="active"]': {
          color: '$warning',
          boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
        },
      },
    },
  },
});

const TabsContent = styled(RadixTabs.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: '$white',
  color: '$black',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
  '&:focus': { boxShadow: `$1` },
});

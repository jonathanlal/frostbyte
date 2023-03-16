import type { Story } from '@ladle/react';
import { Tabs, TabsProps, H, P } from 'frostbyte';
export const TabsC: Story<TabsProps> = ({ ...props }) => {
  const tabContent = [
    {
      header: 'Suspendisse dapibus justo justo, non.',
      content: (
        <>
          <H color="error">
            Phasellus rhoncus lacinia lectus, vel lobortis ex consectetur et.
            Interdum.
          </H>
          <br />
          <P color="warning" size={20}>
            Suspendisse lacinia tortor sit amet tempor congue. Nullam ipsum
            massa, ullamcorper vel viverra a, convallis ac justo. Integer sed
            diam eu lorem convallis hendrerit. Donec egestas gravida blandit.
            Sed ultricies leo vitae arcu malesuada sagittis nec vitae tellus.
            Maecenas pulvinar nulla est, quis rutrum est porta nec. Praesent
            eget arcu sit amet purus scelerisque auctor. In urna mauris,
            hendrerit in feugiat quis, vulputate et felis. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam vehicula aliquet
            libero. Duis placerat feugiat velit et consequat. Donec tempor eget
            mauris nec mollis. Nam faucibus maximus massa bibendum vehicula.
          </P>
        </>
      ),
    },
    {
      header: 'Mauris condimentum metus a.',
      content: (
        <P color="info" size={20}>
          Suspendisse lacinia tortor sit amet tempor congue. Nullam ipsum massa,
          ullamcorper vel viverra a, convallis ac justo. Integer sed diam eu
          lorem convallis hendrerit. Donec egestas gravida blandit. Sed
          ultricies leo vitae arcu malesuada sagittis nec vitae tellus. Maecenas
          pulvinar nulla est, quis rutrum est porta nec. Praesent eget arcu sit
          amet purus scelerisque auctor. In urna mauris, hendrerit in feugiat
          quis, vulputate et felis. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam vehicula aliquet libero. Duis placerat
          feugiat velit et consequat. Donec tempor eget mauris nec mollis. Nam
          faucibus maximus massa bibendum vehicula.
        </P>
      ),
    },
  ];

  return <Tabs {...props} tabContent={tabContent} />;
};

TabsC.args = {
  width: '100%',
};
TabsC.argTypes = {
  width: {
    control: { type: 'range', max: 1500, min: 600, step: 1 },
  },
  defaultTab: {
    control: { type: 'select' },
    options: ['1', '2'],
  },
};

TabsC.storyName = 'Tabs';
TabsC.meta = {
  title: 'Tabs',
  description:
    'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  disableColorSelector: true,
};

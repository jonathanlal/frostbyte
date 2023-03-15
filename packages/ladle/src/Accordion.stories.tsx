import type { Story } from '@ladle/react';
import { Accordion, AccordionProps, H, P } from 'frostbyte';
export const AccordionC: Story<AccordionProps> = ({ ...props }) => {
  const items: AccordionProps['items'] = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur.',
      content: (
        <>
          <H as="h1" color="purple11">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </H>
          <br />
          <P color="bronze10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            bibendum leo eu dictum bibendum. Phasellus malesuada, elit vitae
            hendrerit finibus, augue leo consequat neque, ut cursus ex urna nec
            leo. Vivamus sed ligula molestie, tincidunt lacus ut, congue enim.
            Aenean ac feugiat quam. Aenean scelerisque sem ex, fermentum feugiat
            tortor vestibulum laoreet. Nulla facilisi. Praesent porta auctor
            orci, eget imperdiet magna pellentesque ut. Curabitur ornare ex non
            purus congue vestibulum. In eget ornare ligula. Cras id porttitor
            orci. Aenean pretium, nisl eget rutrum lobortis, mauris ligula
            condimentum libero, placerat tempus metus magna a sem. Suspendisse
            dignissim ligula at diam convallis malesuada. Duis interdum aliquet
            diam, a mollis nulla viverra eu. Phasellus vehicula commodo nibh, at
            dapibus sapien vestibulum ac.
          </P>
        </>
      ),
      id: '1',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      content: 'Content 2',
      id: '2',
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Accordion {...props} items={items} />
    </div>
  );
};

AccordionC.argTypes = {
  type: {
    control: { type: 'inline-radio' },
    options: ['multiple', 'single'],
  },
};

AccordionC.storyName = 'Accordion';
AccordionC.meta = {
  title: 'Accordion',
  description: '',
  disableColorSelector: true,
};

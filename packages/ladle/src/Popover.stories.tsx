import type { Story } from '@ladle/react';
import { Popover, PopoverProps, Button, P, H } from 'frostbyte';
import React from 'react';
export const PopoverC: Story<PopoverProps> = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <br />
      <br />
      <Popover {...props}>
        <Button onClick={() => setOpen(!open)} size={'sm'}>
          Toggle
        </Button>
        <P size={20} color="mauve11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </P>
      </Popover>
    </>
  );
};
PopoverC.argTypes = {
  side: {
    control: { type: 'inline-radio' },
    options: ['top', 'bottom', 'left', 'right'],
  },
};

PopoverC.storyName = 'Popover';
PopoverC.meta = {
  title: 'Popover',
  description: 'Displays rich content in a portal, triggered by a button.',
  disableColorSelector: true,
};

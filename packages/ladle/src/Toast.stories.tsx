import type { Story } from '@ladle/react';
import { Button, KINDS_ARRAY, Toast, ToastProps } from 'frostbyte';
import React from 'react';

export const ToastC: Story<ToastProps> = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)} size={'sm'}>
        Toggle
      </Button>
      <Toast
        {...props}
        setShow={setOpen}
        show={open}
        description={
          'Aliquam pharetra accumsan venenatis. Morbi non pretium dui. Curabitur id imperdiet ante.'
        }
        title={'Phasellus arcu urna, porttitor vitae.'}
      />
    </>
  );
};

ToastC.args = {
  duration: 3000,
};
ToastC.argTypes = {
  kind: {
    control: { type: 'select' },
    options: KINDS_ARRAY,
  },

  swipeDirection: {
    control: { type: 'select' },
    options: ['left', 'right', 'up', 'down'],
  },
};

ToastC.storyName = 'Toast';
ToastC.meta = {
  title: 'Toast',
  description: 'A succinct message that is displayed temporarily.',
  disableColorSelector: true,
};

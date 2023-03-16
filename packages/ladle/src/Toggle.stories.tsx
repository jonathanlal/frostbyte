import type { Story } from '@ladle/react';
import { KINDS_ARRAY, Toggle, ToggleProps } from 'frostbyte';
import { FaceIcon } from '@radix-ui/react-icons';

import React from 'react';

export const ToggleC: Story<ToggleProps> = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Toggle {...props} onPressedChange={setOpen} pressed={open}>
        <FaceIcon width={25} height={25} />
      </Toggle>
    </>
  );
};

ToggleC.args = {
  disabled: false,
  defaultPressed: false,
};
ToggleC.argTypes = {
  kind: {
    control: { type: 'select' },
    options: KINDS_ARRAY,
  },
};

ToggleC.storyName = 'Toggle';
ToggleC.meta = {
  title: 'Toggle',
  description: 'A two-state button that can be either on or off.',
  disableColorSelector: true,
};

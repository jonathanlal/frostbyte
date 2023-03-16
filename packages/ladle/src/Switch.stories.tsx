import type { Story } from '@ladle/react';
import { Switch, SwitchProps, COLORS_WITHOUT_KINDS_ARRAY } from 'frostbyte';
import { useState } from 'react';
export const SwitchC: Story<SwitchProps> = ({ ...props }) => {
  const [on, setOn] = useState(true);

  return (
    <>
      <Switch
        {...props}
        labelFor="test123"
        label={props.label}
        setChecked={() => setOn(!on)}
        checked={on}
      />
    </>
  );
};

SwitchC.args = {
  label: '',
};
SwitchC.argTypes = {
  size: {
    control: { type: 'inline-radio' },
    options: ['sm', 'md', 'lg'],
    defaultValue: 'lg',
  },
  labelColor: {
    control: { type: 'select' },
    options: COLORS_WITHOUT_KINDS_ARRAY,
  },
};
SwitchC.storyName = 'Switch';
SwitchC.meta = {
  title: 'Switch',
  description:
    'A control that allows the user to toggle between checked and not checked.',
  disableColorSelector: true,
};

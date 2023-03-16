import type { Story } from '@ladle/react';
import { CheckBox, CheckBoxProps, COLORS_ARRAY } from 'frostbyte';
import { useState } from 'react';
export const CheckboxC: Story<CheckBoxProps> = ({ ...props }) => {
  const [checked, setChecked] = useState(true);

  return (
    <CheckBox
      {...props}
      checked={checked}
      setChecked={setChecked}
      labelFor="123"
    />
  );
};

CheckboxC.args = {
  label: '',
};

CheckboxC.argTypes = {
  labelPosition: {
    control: { type: 'select' },
    options: ['left', 'right', 'top', 'bottom'],
  },
  labelColor: {
    control: { type: 'select' },
    options: COLORS_ARRAY,
  },
  kind: {
    control: { type: 'select' },
    options: ['success', 'primary', 'error', 'warning', 'info'],
  },
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
  },
  borderRadius: {
    control: { type: 'select' },
    options: ['false', 'sm', 'md', 'lg', 'xl'],
  },
};

CheckboxC.storyName = 'Checkbox';
CheckboxC.meta = {
  title: 'CheckBox',
  description:
    'A control that allows the user to toggle between checked and not checked.',
  disableColorSelector: true,
};

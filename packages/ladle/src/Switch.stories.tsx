import type { Story } from '@ladle/react';
import {
  Switch,
  SwitchProps,
  COLORS_WITHOUT_KINDS_ARRAY,
  // useFrostbyte,
} from 'frostbyte';
import { useState } from 'react';
export const SwitchC: Story<SwitchProps> = ({ ...props }) => {
  const [on, setOn] = useState(true);
  // console.log('test1');
  // const test = useFrostbyte();
  // console.log('test', test);

  return (
    <>
      <h1>Switch component</h1>
      <Switch {...props} labelFor="test123" setChecked={setOn} checked={on} />
    </>
  );
};

SwitchC.args = {
  label: 'Switch Label',
};
SwitchC.argTypes = {
  size: {
    control: { type: 'inline-radio' },
    options: ['sm', 'md', 'lg'],
  },
  labelColor: {
    control: { type: 'select' },
    options: COLORS_WITHOUT_KINDS_ARRAY,
  },
};
SwitchC.storyName = 'Switch';

import type { Story } from '@ladle/react';
import { RadioGroup, RadioGroupProps } from 'frostbyte';

export const RadioGroupC: Story<RadioGroupProps> = ({ ...props }) => {
  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
  ];

  return <RadioGroup {...props} items={items} />;
};

RadioGroupC.args = {
  disabled: false,
};
RadioGroupC.argTypes = {
  size: {
    control: { type: 'inline-radio' },
    options: ['sm', 'md', 'lg'],
  },
};

RadioGroupC.storyName = 'RadioGroup';
RadioGroupC.meta = {
  title: 'RadioGroup',
  description:
    'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
  disableColorSelector: true,
};

import type { Story } from '@ladle/react';
import { Select, SelectProps } from 'frostbyte';

export const SelectC: Story<SelectProps> = ({ ...props }) => {
  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3', disabled: true },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
  ];

  return <Select {...props} items={items} />;
};

SelectC.args = {
  placeholder: 'Select an option',
};

SelectC.storyName = 'Select';
SelectC.meta = {
  title: 'Select',
  description:
    'Displays a list of options for the user to pick from—triggered by a button.',
  disableColorSelector: true,
};

import type { Story } from '@ladle/react';
import { P, ParagraphProps, SIZES_ARRAY } from 'frostbyte';

export const Paragraph: Story<ParagraphProps> = ({ ...props }) => (
  <P {...props}>{props.children}</P>
);
Paragraph.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  // responsive: 'md',
  // size: 20,
};
Paragraph.argTypes = {
  responsive: {
    control: { type: 'select' },
    options: SIZES_ARRAY,
  },
  // color: {
  //   control: { type: 'range' },
  //   options: ['red5', 'blue5', 'green5'],
  // },
  size: {
    control: { type: 'range', min: 12, max: 70, step: 1 },
    defaultValue: 20,
  },
};

// export const Heading: Story<{ label: string }> = ({ label }) => (
//   <H responsive="lg">Label</H>
// );
// Heading.args = {
//   label: 'Hello World',
// };

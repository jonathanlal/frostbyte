import type { Story } from '@ladle/react';
import {
  H,
  P,
  ParagraphProps,
  SIZES_ARRAY,
  COLORS_ARRAY,
  HeaderProps,
} from 'frostbyte';

export const Paragraph: Story<ParagraphProps> = ({ ...props }) => (
  <P {...props}>{props.children}</P>
);
Paragraph.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
Paragraph.argTypes = {
  responsive: {
    control: { type: 'select' },
    options: SIZES_ARRAY,
  },
  color: {
    control: { type: 'select' },
    options: COLORS_ARRAY,
  },
  size: {
    control: { type: 'range', min: 12, max: 70, step: 1 },
    defaultValue: 20,
  },
};

export const Heading: Story<HeaderProps> = ({ ...props }) => (
  <H {...props}>{props.children}</H>
);
Heading.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
Heading.argTypes = {
  responsive: {
    control: { type: 'select' },
    options: SIZES_ARRAY,
  },
  color: {
    control: { type: 'select' },
    options: COLORS_ARRAY,
  },
  size: {
    control: { type: 'range', min: 12, max: 70, step: 1 },
    defaultValue: 20,
  },
  as: {
    control: { type: 'select' },
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  },
};

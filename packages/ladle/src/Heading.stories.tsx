import type { Story } from '@ladle/react';
import { H, P, SIZES_ARRAY, COLORS_ARRAY, HeaderProps } from 'frostbyte';
import { FROSTBYTE_COLORS } from './constants';

export const Heading: Story<HeaderProps> = ({ ...props }) => (
  <>
    <P color="black" size="20">
      Responsive:
    </P>
    <H responsive={props.responsive} color="info">
      {props.children}
    </H>
    <br />
    <P color="black" size="20">
      Size:
    </P>
    <H size={props.size} color="success">
      {props.children}
    </H>
    <br />
    <P color="black" size="20">
      Color:
    </P>
    <H color={props.color} size={25}>
      {props.children}
    </H>
    <br />
    <P color="black" size="20">
      As:
    </P>
    <H as={props.as} color="primary">
      {props.children}
    </H>
  </>
);
Heading.meta = {
  title: 'Heading (H)',
  description: '',
};
Heading.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  as: 'h1',
  color: 'error',
  responsive: 'md',
};
Heading.argTypes = {
  responsive: {
    control: { type: 'select' },
    options: SIZES_ARRAY,
  },
  color: {
    control: { type: 'select' },
    options: COLORS_ARRAY,
    defaultValue: 'primary',
  },
  size: {
    control: { type: 'range', min: 12, max: 70, step: 1 },
  },
  as: {
    control: { type: 'select' },
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  },
};

export const HeadingColors: Story<HeaderProps> = () => (
  <>
    {FROSTBYTE_COLORS.map((color) => (
      <>
        {Array.from({ length: 12 }).map((_, i) => (
          <H color={`${color}${i + 1}` as HeaderProps['color']} size={20}>
            {`[${color}${i + 1}] `}Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </H>
        ))}
      </>
    ))}
  </>
);
HeadingColors.meta = {
  title: 'Heading Colors',
  description:
    'Renders an accessible header component associated with controls.',
  disableColorSelector: true,
};

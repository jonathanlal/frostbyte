import type { Story } from '@ladle/react';
import { H, SIZES_ARRAY, COLORS_ARRAY, HeaderProps } from 'frostbyte';
import { FROSTBYTE_COLORS } from './constants';

export const Heading: Story<HeaderProps> = ({ ...props }) => (
  <>
    <p>Responsive:</p>
    <H responsive={props.responsive} color="info">
      {props.children}
    </H>
    <br />
    <p>Size:</p>
    <H size={props.size} color="success">
      {props.children}
    </H>
    <br />
    <p>Color:</p>
    <H color={props.color} size={25}>
      {props.children}
    </H>
    <br />
    <p>As:</p>
    <H as={props.as} color="primary">
      {props.children}
    </H>
  </>
);
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
    <h1>Heading colors</h1>
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

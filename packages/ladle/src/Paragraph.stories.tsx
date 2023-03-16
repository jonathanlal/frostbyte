import type { Story } from '@ladle/react';
import { P, ParagraphProps, SIZES_ARRAY, COLORS_ARRAY } from 'frostbyte';
import { FROSTBYTE_COLORS } from './constants';

export const Paragraph: Story<ParagraphProps> = ({ ...props }) => (
  <>
    <P color="black" size="20">
      Responsive:
    </P>
    <P responsive={props.responsive} color="info">
      {props.children}
    </P>
    <br />
    <P color="black" size="20">
      Size:
    </P>
    <P size={props.size} color="primary">
      {props.children}
    </P>
    <br />
    <P color="black" size="20">
      Color:
    </P>
    <P color={props.color} size={25}>
      {props.children}
    </P>
    <br />
    <P color="black" size="20">
      Weight:
    </P>
    <P weight={props.weight} size={25} color="success">
      {props.children}
    </P>
  </>
);
Paragraph.meta = {
  title: 'Paragraph',
  description: '',
  disableColorSelector: true,
};
Paragraph.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
Paragraph.argTypes = {
  responsive: {
    control: { type: 'select' },
    options: SIZES_ARRAY,
    defaultValue: 'xs',
  },
  size: {
    control: { type: 'range', min: 12, max: 70, step: 1 },
    defaultValue: 25,
  },
  color: {
    control: { type: 'select' },
    options: COLORS_ARRAY,
    defaultValue: 'error',
  },
  weight: {
    control: { type: 'select' },
    options: ['400', '500', '600', '700', '800', '900'],
  },
};

export const ParagraphColors: Story<ParagraphProps> = () => (
  <>
    {FROSTBYTE_COLORS.map((color) => (
      <>
        {Array.from({ length: 12 }).map((_, i) => (
          <P color={`${color}${i + 1}` as ParagraphProps['color']} size={20}>
            {`[${color}${i + 1}] `}Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </P>
        ))}
      </>
    ))}
  </>
);
ParagraphColors.meta = {
  title: 'Paragraph colors',
  description:
    'Renders an accessible paragraph component associated with controls.',
  disableColorSelector: true,
};

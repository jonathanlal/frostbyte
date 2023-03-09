import type { Story } from '@ladle/react';
import { Label, LabelProps, COLORS_ARRAY, P } from 'frostbyte';
import { FROSTBYTE_COLORS } from './constants';

export const LabelC: Story<LabelProps> = ({ ...props }) => (
  <>
    <P color="black" size="20">
      Size:
    </P>
    <Label size={props.size} color="info">
      {props.children}
    </Label>
    <br />
    <P color="black" size="20">
      Color:
    </P>
    <Label color={props.color} size={25}>
      {props.children}
    </Label>
    <br />
    <P color="black" size="20">
      Weight:
    </P>
    <Label weight={props.weight} size={25} color="success">
      {props.children}
    </Label>
  </>
);
LabelC.meta = {
  title: 'Label',
  description: '',
};
LabelC.args = {
  children: 'Lorem ipsum dolor sit amet.',
};
LabelC.argTypes = {
  size: {
    control: { type: 'range', min: 12, max: 70, step: 1 },
    defaultValue: 25,
  },
  color: {
    control: { type: 'select' },
    options: COLORS_ARRAY,
    defaultValue: 'primary',
  },
  weight: {
    control: { type: 'select' },
    options: ['400', '500', '600', '700', '800', '900'],
  },
};
LabelC.storyName = 'Label';

export const LabelColors: Story<LabelProps> = () => (
  <>
    {FROSTBYTE_COLORS.map((color) => (
      <>
        {Array.from({ length: 12 }).map((_, i) => (
          <Label color={`${color}${i + 1}` as LabelProps['color']} size={20}>
            {`[${color}${i + 1}] `}Lorem ipsum dolor sit amet. <br />
          </Label>
        ))}
      </>
    ))}
  </>
);
LabelColors.meta = {
  title: 'Label Colors',
  description: '',
  disableColorSelector: true,
};

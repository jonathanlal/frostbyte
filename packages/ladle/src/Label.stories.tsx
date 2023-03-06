import type { Story } from '@ladle/react';
import { Label, LabelProps, COLORS_ARRAY } from 'frostbyte';
import { FROSTBYTE_COLORS } from './constants';

export const LabelC: Story<LabelProps> = ({ ...props }) => (
  <>
    <p>Size:</p>
    <Label size={props.size} color="info">
      {props.children}
    </Label>
    <br />
    <p>Color:</p>
    <Label color={props.color} size={25}>
      {props.children}
    </Label>
    <br />
    <p>Weight:</p>
    <Label weight={props.weight} size={25} color="success">
      {props.children}
    </Label>
  </>
);
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
    <h1>Label colors</h1>
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

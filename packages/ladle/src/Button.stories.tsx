import type { Story } from '@ladle/react';
import {
  Button,
  ButtonProps,
  COLORS_WITHOUT_KINDS_ARRAY,
  KINDS_ARRAY,
} from 'frostbyte';
import { FROSTBYTE_COLORS } from './constants';
export const ButtonC: Story<ButtonProps> = ({ ...props }) => (
  <>
    <h1>Button component</h1>
    <p>
      (when selecting kind, reset to default first if you have selected a color
      already)
    </p>
    <Button {...props}>{props.children}</Button>
  </>
);
ButtonC.args = {
  children: 'Click me',
  fullWidth: false,
  outlined: false,
};
ButtonC.argTypes = {
  borderRadius: {
    control: { type: 'inline-radio' },
    options: ['sm', 'md', 'lg', 'xl'],
  },
  size: {
    control: { type: 'inline-radio' },
    options: ['sm', 'md', 'lg', 'xl'],
  },
  color: {
    control: { type: 'select' },
    options: COLORS_WITHOUT_KINDS_ARRAY,
  },
  kind: {
    control: { type: 'select' },
    options: KINDS_ARRAY,
  },
};
ButtonC.storyName = 'Button';

export const Colors: Story<ButtonProps> = () => (
  <>
    <h1>Button colors</h1>
    <p>usage: 'red6'</p>
    <table>
      {FROSTBYTE_COLORS.map((color) => (
        <>
          <tr>
            <td>{color}</td>
            {Array.from({ length: 12 }).map((_, i) => (
              <td>
                <Button
                  size="lg"
                  color={`${color}${i + 1}` as ButtonProps['color']}
                >
                  {i + 1}
                </Button>
              </td>
            ))}
          </tr>
        </>
      ))}
    </table>
  </>
);

export const ColorsOutlined: Story<ButtonProps> = () => (
  <>
    <h1>Button outlined colors</h1>
    <table>
      {FROSTBYTE_COLORS.map((color) => (
        <>
          <tr>
            <td>{color}</td>
            {Array.from({ length: 12 }).map((_, i) => (
              <td>
                <Button
                  size="lg"
                  color={`${color}${i + 1}` as ButtonProps['color']}
                  outlined
                >
                  {i + 1}
                </Button>
              </td>
            ))}
          </tr>
        </>
      ))}
    </table>
  </>
);

export const Kinds: Story<ButtonProps> = () => (
  <>
    <h1>Button kinds</h1>
    {KINDS_ARRAY.map((type) => (
      <>
        <div style={{ margin: '2px', display: 'inline-block' }}>
          <Button size="xl" kind={type as ButtonProps['kind']}>
            {type}
          </Button>
        </div>
        <br />
      </>
    ))}
    <br />
    <h1>Button kinds outlined</h1>
    {KINDS_ARRAY.map((type) => (
      <>
        <div style={{ margin: '2px', display: 'inline-block' }}>
          <Button size="xl" kind={type as ButtonProps['kind']} outlined>
            {type}
          </Button>
        </div>
        <br />
      </>
    ))}
  </>
);

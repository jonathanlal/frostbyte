import type { Story } from '@ladle/react';
import { action } from '@ladle/react';
import {
  Button,
  ButtonProps,
  COLORS_WITHOUT_KINDS_ARRAY,
  KINDS_ARRAY,
} from 'frostbyte';
import { FROSTBYTE_COLORS } from './constants';

export const ButtonC: Story<ButtonProps> = ({ ...props }) => (
  <>
    <Button
      {...props}
      color={props.color ? props.color : 'grass8'}
      onClick={action('onClick')}
    >
      {props.children}
    </Button>
  </>
);
ButtonC.meta = {
  title: 'Button',
  description: 'A button component.',
  disableColorSelector: true,
};
ButtonC.args = {
  children: 'Click me',
  fullWidth: false,
  outlined: false,
  disabled: false,
  loading: false,
  loadingText: 'Loading...',
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
};
ButtonC.storyName = 'Button';

export const Colors: Story<ButtonProps> = () => (
  <>
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
Colors.meta = {
  title: 'Button Colors',
  description: 'colors available in the color prop - based on radix-ui colors.',
  disableColorSelector: true,
};

export const ColorsOutlined: Story<ButtonProps> = () => (
  <>
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

ColorsOutlined.meta = {
  title: 'Button outlined colors',
  description: 'With the outlined prop, you can get a outlined button.',
  disableColorSelector: true,
};

export default {
  meta: {},
};
export const Kinds: Story<ButtonProps> = ({ ...props }) => (
  <>
    {KINDS_ARRAY.map((type) => (
      <div
        style={{
          margin: '2px',
          display: props.fullWidth ? 'block' : 'inline-block',
        }}
      >
        <Button size="xl" kind={type as ButtonProps['kind']} {...props}>
          {type}
        </Button>
      </div>
    ))}
  </>
);

Kinds.meta = {
  title: 'Button kinds',
  description: 'Different kinds of colors based on brand.',
  disableColorSelector: false,
};
Kinds.args = {
  fullWidth: false,
  outlined: false,
};
Kinds.argTypes = {
  borderRadius: {
    control: { type: 'inline-radio' },
    options: ['sm', 'md', 'lg', 'xl'],
  },
  size: {
    control: { type: 'inline-radio' },
    options: ['sm', 'md', 'lg', 'xl'],
    defaultValue: 'lg',
  },
};

import React, { Dispatch, SetStateAction } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Label } from 'components/Label';
import { styled } from 'utils/getStyles';
import type { VariantProps } from '@stitches/react';
import { PrefixedLabelProps } from 'types/PropTypes';

type SwitchProps = VariantProps<typeof SwitchRoot> & {
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
  label?: string;
  labelFor?: string;
} & PrefixedLabelProps;

/**
 *
 * labelFor links the label to the switch, if you want to link a different element to htmlFor the switch, use labelHtmlFor which will give id to the switch
 *
 */

export const Switch = ({ ...props }: SwitchProps) => {
  const getLabelSize = () => {
    if (props.size === 'sm') return 16;
    if (props.size === 'lg') return 42;
    else {
      return 28;
    }
  };
  return (
    <SwitchContainer>
      {props?.label && props?.labelFor && !props?.labelHtmlFor && (
        <Label
          htmlFor={props.labelFor}
          size={props.labelSize || getLabelSize()}
          weight={props?.labelWeight}
          color={props?.labelColor}
        >
          {props?.label}
        </Label>
      )}
      <SwitchRoot
        id={props?.labelHtmlFor || props?.labelFor}
        onCheckedChange={() => props.setChecked(!props.checked)}
        defaultChecked={props.checked}
        size={props.size}
      >
        <SwitchThumb size={props.size} />
      </SwitchRoot>
    </SwitchContainer>
  );
};

const SwitchRoot = styled(SwitchPrimitive.Root, {
  all: 'unset',
  variants: {
    size: {
      sm: {
        width: 42,
        height: 25,
        borderRadius: '$15',
      },
      md: {
        width: 66,
        height: 37,
        borderRadius: '$20',
      },
      lg: {
        width: 87,
        height: 47,
        borderRadius: '$25',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },

  position: 'relative',
  boxShadow: `$1`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&[data-state="checked"]': { backgroundColor: '$green' },
  '&[data-state="unchecked"]': { backgroundColor: '$red' },
  '&:hover': { cursor: 'pointer' },
});

//circle inside switch
const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  variants: {
    size: {
      sm: {
        width: 21,
        height: 21,
        willChange: 'transform',
        '&[data-state="checked"]': { transform: 'translateX(19px)' },
      },
      md: {
        width: 31,
        height: 31,
        willChange: 'transform',
        '&[data-state="checked"]': { transform: 'translateX(33px)' },
      },
      lg: {
        width: 41,
        height: 41,
        willChange: 'transform',
        '&[data-state="checked"]': { transform: 'translateX(43px)' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  backgroundColor: '$white', //color of circle inside switch
  borderRadius: '$p50',
  boxShadow: `$1`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
});

const SwitchContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$10',
});

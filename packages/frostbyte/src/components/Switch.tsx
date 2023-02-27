// 'use client';
import React, { Dispatch, SetStateAction } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Label } from 'components/Label';
import { styled } from 'utils/getStyles';

type SwitchRootProps = React.ComponentProps<typeof SwitchRoot>;
/**
 *
 * If you use label remember to pass labelFor prop also for htmlFor attribute (unique id that references the switch)
 *
 */
export const Switch = ({
  label,
  labelFor,
  setChecked,
  checked,
  size,
}: {
  label?: string;
  labelFor?: string;
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
  size?: SwitchRootProps['size'];
}) => {
  const labelSize = () => {
    if (size === 'sm') return 16;
    if (size === 'lg') return 42;
    else {
      return 28;
    }
  };
  return (
    <SwitchContainer>
      {label && labelFor && (
        <Label htmlFor={labelFor} size={labelSize()}>
          {label}
        </Label>
      )}
      <SwitchRoot
        id={labelFor}
        onCheckedChange={() => setChecked(!checked)}
        defaultChecked={checked}
        size={size}
      >
        <SwitchThumb size={size} />
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

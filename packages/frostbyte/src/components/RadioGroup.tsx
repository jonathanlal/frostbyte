import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Label } from './Label';
import { styled } from 'utils/getStyles';

export const RadioGroup = ({
  defaultValue,
  onValueChange,
  value,
  disabled,
  items,
  ariaLabel,
  size = 'md',
}: {
  defaultValue?: string;
  onValueChange: (value: string) => void;
  value?: string;
  disabled?: boolean;
  items: {
    value: string;
    label: string;
  }[];
  ariaLabel?: string;
  size?: 'sm' | 'md' | 'lg';
}) => {
  if (!defaultValue) {
    defaultValue = items[0].value;
  }

  const getLabelSize = () => {
    if (size === 'sm') return 16;
    if (size === 'lg') return 42;
    else {
      return 25;
    }
  };

  return (
    <RadioGroupRoot
      defaultValue={defaultValue}
      aria-label={ariaLabel}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      {items.map(({ label, value: rvalue }, index) => (
        <>
          <Flex>
            <RadioGroupItem value={rvalue} id={`r${index}`} size={size}>
              <RadioGroupIndicator size={size} />
            </RadioGroupItem>
            <Label htmlFor={`r${index}`} size={getLabelSize()}>
              {label}
            </Label>
          </Flex>
        </>
      ))}
    </RadioGroupRoot>
  );
};

const RadioGroupRoot = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const RadioGroupItem = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  variants: {
    size: {
      sm: {
        width: 25,
        height: 25,
      },
      md: {
        width: 30,
        height: 30,
      },
      lg: {
        width: 35,
        height: 35,
      },
    },
  },
  borderRadius: '100%',
  boxShadow: `$1`,
  '&:hover': { backgroundColor: '$gray6' },
  '&:focus': { boxShadow: `$3` },
});

const RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  variants: {
    size: {
      sm: {
        '&::after': {
          content: '""',
          display: 'block',
          width: 14,
          height: 14,
          borderRadius: '50%',
          backgroundColor: '$primary',
        },
      },
      md: {
        '&::after': {
          content: '""',
          display: 'block',
          width: 19,
          height: 19,
          borderRadius: '50%',
          backgroundColor: '$primary',
        },
      },
      lg: {
        '&::after': {
          content: '""',
          display: 'block',
          width: 24,
          height: 24,
          borderRadius: '50%',
          backgroundColor: '$primary',
        },
      },
    },
  },
});

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

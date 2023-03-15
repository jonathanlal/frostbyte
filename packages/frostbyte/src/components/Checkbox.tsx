import React, { Dispatch, SetStateAction } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { styled } from 'utils/getStyles';
import { Label } from './Label';
import { VariantProps } from '@stitches/react';
import { PrefixedLabelProps } from 'types/propTypes';

export type CheckBoxProps = VariantProps<typeof CheckboxRoot> & {
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
  label?: string;
  labelFor?: string;
  labelPosition?: 'left' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg';
} & Exclude<PrefixedLabelProps, 'labelChildren'>;

export const CheckBox = ({ size = 'md', ...props }: CheckBoxProps) => {
  const getLabelSize = () => {
    if (size === 'sm') {
      return 16;
    } else if (size === 'md') {
      return 24;
    } else {
      return 32;
    }
  };
  return (
    <Flex labelPosition={props.labelPosition}>
      <CheckboxRoot
        id={props?.labelHtmlFor || props?.labelFor}
        defaultChecked={props.checked}
        onCheckedChange={() => props.setChecked(!props.checked)}
        size={size}
        {...props}
      >
        <CheckboxIndicator>
          <StyledCheckIcon size={size} kind={props?.kind} />
        </CheckboxIndicator>
      </CheckboxRoot>
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
    </Flex>
  );
};
const StyledCheckIcon = styled(CheckIcon, {
  variants: {
    size: {
      sm: {
        width: 20,
        height: 20,
      },
      md: {
        width: 30,
        height: 30,
      },
      lg: {
        width: 40,
        height: 40,
      },
    },
    kind: {
      primary: {
        color: '$primaryContrast',
      },
      info: {
        color: '$infoContrast',
      },
      success: {
        color: '$successContrast',
      },
      warning: {
        color: '$warningContrast',
      },
      error: {
        color: '$errorContrast',
      },
    },
  },
  color: '$black',
});
const Flex = styled('div', {
  display: 'inline-flex',
  gap: 10,
  alignItems: 'center',
  variants: {
    labelPosition: {
      left: { flexDirection: 'row-reverse' },
      top: { flexDirection: 'column-reverse' },
      bottom: { flexDirection: 'column' },
    },
  },
});

const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  borderRadius: '$4',
  variants: {
    borderRadius: {
      false: {
        borderRadius: 0,
      },
      sm: {
        borderRadius: 2,
      },
      md: {
        borderRadius: 4,
      },
      lg: {
        borderRadius: 7,
      },
      xl: {
        borderRadius: 10,
      },
    },
    size: {
      sm: {
        width: 25,
        height: 25,
      },
      md: {
        width: 35,
        height: 35,
      },
      lg: {
        width: 45,
        height: 45,
      },
    },
    kind: {
      primary: {
        backgroundColor: '$primary',
        '&:hover, &:focus': {
          cursor: 'pointer',
          boxShadow: `$primaryContrast`,
          outline: '1px solid $primaryContrast',
        },
      },
      error: {
        backgroundColor: '$error',
        '&:hover, &:focus': {
          cursor: 'pointer',
          boxShadow: `$errorContrast`,
          outline: '1px solid $errorContrast',
        },
      },
      success: {
        backgroundColor: '$success',
        '&:hover, &:focus': {
          cursor: 'pointer',
          boxShadow: `$successContrast`,
          outline: '1px solid $successContrast',
        },
      },
      info: {
        backgroundColor: '$info',
        '&:hover, &:focus': {
          cursor: 'pointer',
          boxShadow: `$infoContrast`,
          outline: '1px solid $infoContrast',
        },
      },
      warning: {
        backgroundColor: '$warning',
        '&:hover, &:focus': {
          cursor: 'pointer',
          boxShadow: `$warningContrast`,
          outline: '1px solid $warningContrast',
        },
      },
    },
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `$1`,
  outline: '1px solid $gray8',
  '&:hover, &:focus': {
    cursor: 'pointer',
    boxShadow: `$3`,
    outline: '1px solid $black',
  },
});

const CheckboxIndicator = styled(Checkbox.Indicator);

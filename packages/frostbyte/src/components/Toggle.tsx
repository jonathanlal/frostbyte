import React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { styled } from '@stitches/react';
import { KINDS } from 'utils/constants';

export type ToggleProps = {
  children: React.ReactNode;
  ariaLabel?: string;
  defaultPressed?: boolean;
  disabled?: boolean;
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
  kind?: KINDS;
};
/**
 * A two-state button that can be either on or off.
 * Pass an Icon as children for best results
 *
 */
export const Toggle = ({
  children,
  ariaLabel,
  defaultPressed = false,
  pressed,
  onPressedChange,
  disabled,
  kind,
}: ToggleProps) => (
  <ToggleRoot
    aria-label={ariaLabel}
    defaultPressed={defaultPressed}
    onPressedChange={onPressedChange}
    disabled={disabled}
    pressed={pressed}
    kind={kind}
  >
    {children}
  </ToggleRoot>
);

const ToggleRoot = styled(TogglePrimitive.Root, {
  all: 'unset',
  backgroundColor: 'white',
  color: '$mauve11',
  height: 35,
  width: 35,
  borderRadius: 4,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `$1`,

  '&:hover': {
    backgroundColor: '$mauve8',
    color: '$mauve12',
    cursor: 'pointer',
  },
  '&[data-state=on]': {
    backgroundColor: '$mauve8',
    color: '$mauve12',
  },

  variants: {
    kind: {
      primary: {
        '&:hover': {
          backgroundColor: '$primary',
          color: '$primaryContrast',
          cursor: 'pointer',
        },
        '&[data-state=on]': {
          backgroundColor: '$primary',
          color: '$primaryContrast',
        },
      },
      success: {
        '&:hover': {
          backgroundColor: '$success',
          color: '$successContrast',
          cursor: 'pointer',
        },
        '&[data-state=on]': {
          backgroundColor: '$success',
          color: '$successContrast',
        },
      },
      warning: {
        '&:hover': {
          backgroundColor: '$warning',
          color: '$warningContrast',
          cursor: 'pointer',
        },
        '&[data-state=on]': {
          backgroundColor: '$warning',
          color: '$warningContrast',
        },
      },
      error: {
        '&:hover': {
          backgroundColor: '$error',
          color: '$errorContrast',
          cursor: 'pointer',
        },
        '&[data-state=on]': {
          backgroundColor: '$error',
          color: '$errorContrast',
        },
      },
      info: {
        '&:hover': {
          backgroundColor: '$info',
          color: '$infoContrast',
          cursor: 'pointer',
        },
        '&[data-state=on]': {
          backgroundColor: '$info',
          color: '$infoContrast',
        },
      },
    },
  },
  '&:focus': { boxShadow: `$2` },
});

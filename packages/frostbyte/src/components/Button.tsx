import React from 'react';
import type { VariantProps } from '@stitches/react';
import { ReactNode } from 'react';
import { styled } from 'utils/getStyles';
import { KINDS } from 'utils/constants';

export type ButtonProps = VariantProps<typeof StyledButton> & {
  htmlFor?: string;
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ariaLabel,
  onClick,
}: {
  children: ReactNode;
  variant?: KINDS;
  size?: 'sm' | 'md';
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  onClick?: () => void;
}) => (
  <div style={{ display: 'block' }}>
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </StyledButton>
  </div>
);

const StyledButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  fontWeight: 500,
  color: '$white',
  // cursor: 'pointer',
  margin: 2,

  '&:active, &:focus-visible  ': {
    outline: '2px solid $green',
    // outlineOffset: 1,
  },

  '&:hover, &:focus': {
    opacity: 0.8,
    cursor: 'pointer',
  },

  variants: {
    size: {
      sm: {
        fontSize: 12,
        padding: '$p5 10px',
        lineHeight: '25px',
        // height: 25,
      },
      md: {
        fontSize: '2rem',
        padding: '$10 $20',
        // padding: '0.5rem 1.8rem',
        // lineHeight: '35px',
        // height: 35,
      },
    },
    variant: {
      primary: {
        backgroundColor: '$purple',
      },
      success: {
        backgroundColor: '$green',
      },
      error: {
        backgroundColor: '$red',
      },
      warning: {
        backgroundColor: '$orange',
      },
      info: {
        backgroundColor: '$blue',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

import React from 'react';
import type { VariantProps } from '@stitches/react';
import { ReactNode } from 'react';
import { styled } from 'utils/getStyles';
import { COLORS_WITHOUT_KINDS, KINDS } from 'utils/constants';
import { buttonColorVariants } from 'styles/variants/buttonColorVariants';
import { buttonKindsVariants } from 'styles/variants/buttonKindsVariants';
import { buttonKindsOutlinedCompoundVariants } from 'styles/variants/buttonKindsOutlinedCompoundVariants';
import { buttonColorOutlinedCompoundVariants } from 'styles/variants/buttonColorOutlinedCompoundVariants';

export type ButtonProps = VariantProps<typeof StyledButton> & {
  htmlFor?: string;
};

export const Button = ({
  children,
  kind = 'primary',
  size = 'md',
  type = 'button',
  fullWidth = false,
  borderRadius = 'sm',
  outlined = false,
  ariaLabel,
  color,
  onClick,
}: {
  children: ReactNode;
  kind?: KINDS;
  size?: 'xl' | 'xs' | 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  ariaLabel?: string;
  outlined?: boolean;
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | 'false';
  color?: COLORS_WITHOUT_KINDS;
  onClick?: () => void;
}) => (
  <StyledButton
    kind={!color ? kind : undefined}
    size={size}
    onClick={onClick}
    type={type}
    aria-label={ariaLabel}
    fullWidth={fullWidth}
    borderRadius={borderRadius}
    outlined={outlined}
    color={color}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled('button', {
  border: 'none',
  compoundVariants: [
    ...buttonKindsOutlinedCompoundVariants,
    ...buttonColorOutlinedCompoundVariants,
  ],
  variants: {
    color: buttonColorVariants,
    fullWidth: {
      true: {
        width: '100%',
        textAlign: 'center',
      },
    },
    borderRadius: {
      false: {
        borderRadius: 0,
      },
      sm: {
        borderRadius: 4,
      },
      md: {
        borderRadius: 8,
      },
      lg: {
        borderRadius: 12,
      },
      xl: {
        borderRadius: 20,
      },
    },
    outlined: {
      true: {
        backgroundColor: 'transparent',
      },
    },
    size: {
      xs: {
        fontSize: 18,
        padding: '5px 12px',
      },
      sm: {
        fontSize: 21,
        padding: '7px 14px',
      },
      md: {
        fontSize: 24,
        padding: '9px 18px',
      },
      lg: {
        fontSize: 27,
        padding: '11px 22px',
      },
      xl: {
        fontSize: 31,
        padding: '15px 32px',
      },
    },
    kind: buttonKindsVariants,
  },
});

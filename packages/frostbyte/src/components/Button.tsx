import React from 'react';
import type { VariantProps } from '@stitches/react';
import { ReactNode } from 'react';
import { styled } from 'utils/getStyles';
import { COLORS_WITHOUT_KINDS } from 'utils/constants';
import { buttonColorVariants } from 'styles/variants/buttonColorVariants';
import { buttonKindsVariants } from 'styles/variants/buttonKindsVariants';
import { buttonKindsOutlinedCompoundVariants } from 'styles/variants/buttonKindsOutlinedCompoundVariants';
import { buttonColorOutlinedCompoundVariants } from 'styles/variants/buttonColorOutlinedCompoundVariants';
import { useFrostbyte } from 'hooks/useFrostbyte';
import { brandColors } from 'styles/colors';
import type * as Stitches from '@stitches/react';

export type ButtonProps = VariantProps<typeof StyledButton> & {
  htmlFor?: string;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  onClick?: () => void;
  color?: COLORS_WITHOUT_KINDS;
  css?: Stitches.CSS;
  href?: string;
  tabIndex?: number;
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
  css,
  href,
  tabIndex,
}: ButtonProps) => {
  const { colorKinds } = useFrostbyte();

  const customCSS: Stitches.CSS = {};

  const colorKindsArr = Object.entries(colorKinds);

  colorKindsArr.forEach(([colorKind, colorKey]) => {
    if (colorKey !== brandColors[colorKind as keyof typeof brandColors]) {
      const customKindContrast = colorKey.replace(/\d+/g, '12');
      customCSS[`$colors$${colorKind}`] = `$colors${colorKey}`;
      customCSS[`$shadows$${colorKind}`] = `$shadows${colorKey}`;
      customCSS[
        `$colors$${colorKind}Contrast`
      ] = `$colors${customKindContrast}`;
    }
  });

  return (
    <StyledButton
      kind={!color ? kind : undefined}
      size={size}
      onClick={href ? () => (window.location.href = href) : onClick}
      type={type}
      aria-label={ariaLabel}
      fullWidth={fullWidth}
      borderRadius={borderRadius}
      outlined={outlined}
      color={color}
      css={{
        ...customCSS,
        ...css,
      }}
      tabIndex={tabIndex}
    >
      {children}
    </StyledButton>
  );
};

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

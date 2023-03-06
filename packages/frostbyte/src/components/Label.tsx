import React from 'react';
import { fontWeightVariants } from 'styles/variants/fontWeightVariants';
import type { VariantProps } from '@stitches/react';
import { styled } from 'utils/getStyles';
import { fontSizeVariants } from 'styles/variants/fontSizeVariants';
import { colorVariants } from 'styles/variants/colorVariants';

const StyledLabel = styled('label', {
  margin: 0,
  userSelect: 'none',
  color: '$black',
  variants: {
    color: colorVariants,
    size: fontSizeVariants,
    weight: {
      ...fontWeightVariants,
    },
  },
  defaultVariants: {
    size: fontSizeVariants[20].fontSize,
  },
});

export type LabelProps = VariantProps<typeof StyledLabel> & {
  htmlFor?: string;
  children: React.ReactNode;
};

export const Label = ({ children, ...props }: LabelProps) => (
  <StyledLabel {...props}>{children}</StyledLabel>
);

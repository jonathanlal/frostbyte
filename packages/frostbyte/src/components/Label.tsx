import React from 'react';
import { colorVariants } from 'styles/variants/colors';
import { fontSizeVariants } from 'styles/variants/fontSizes';
import { fontWeightVariants } from 'styles/variants/fontWeights';
import type { VariantProps } from '@stitches/react';
import { styled } from 'utils/getStyles';

const StyledLabel = styled('label', {
  margin: 0,
  userSelect: 'none',
  color: '$black',
  variants: {
    color: {
      ...colorVariants,
    },
    size: {
      ...fontSizeVariants,
    },
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
};

export const Label = ({
  children,
  ...props
}: LabelProps & {
  children: React.ReactNode;
}) => <StyledLabel {...props}>{children}</StyledLabel>;

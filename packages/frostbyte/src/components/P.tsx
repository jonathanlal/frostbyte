import React, { ReactNode } from 'react';
import { colorVariants } from 'styles/variants/colors';
import { fontSizeVariants } from 'styles/variants/fontSizes';
import { fontWeightVariants } from 'styles/variants/fontWeights';
import { styled } from 'utils/getStyles';
import type { VariantProps } from '@stitches/react';

const StyledParagraph = styled('p', {
  margin: 0,
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

type ParagraphProps = VariantProps<typeof StyledParagraph>;

export const P = ({
  children,
  ...props
}: ParagraphProps & {
  children: ReactNode;
}) => <StyledParagraph {...props}>{children}</StyledParagraph>;

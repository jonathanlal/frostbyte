import React, { ReactNode } from 'react';
import { colorVariants } from 'styles/variants/colorVariants';
import { fontSizeVariants } from 'styles/variants/fontSizeVariants';
import { fontWeightVariants } from 'styles/variants/fontWeightVariants';
import { styled } from 'utils/getStyles';
import type { VariantProps } from '@stitches/react';
import { responsiveFontSizeVariants } from 'styles/variants/responsiveFontSizeVariants';

const StyledParagraph = styled('p', {
  margin: 0,
  color: '$purple10',
  lineHeight: 1,
  variants: {
    color: colorVariants,
    responsive: responsiveFontSizeVariants['p'],
    size: fontSizeVariants,
    weight: fontWeightVariants,
  },
  defaultVariants: {
    responsive: 'md',
  },
});

export type ParagraphProps = VariantProps<typeof StyledParagraph> & {
  children: ReactNode;
};

//todo if responsive is set then size should be ignored
export const P = ({ children, ...props }: ParagraphProps) => (
  <StyledParagraph {...props}>{children}</StyledParagraph>
);

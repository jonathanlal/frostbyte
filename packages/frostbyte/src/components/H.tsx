import React from 'react';
import { styled } from 'utils/getStyles';
import { COLORS, RESPONSIVE_ELEMENTS, SIZES } from 'utils/constants';
import { fontSizeVariants } from 'styles/variants/fontSizeVariants';
import { colorVariants } from 'styles/variants/colorVariants';
import { responsiveFontSizeVariants } from 'styles/variants/responsiveFontSizeVariants';

export type HeaderProps = {
  as?: Exclude<RESPONSIVE_ELEMENTS, 'p'>;
  responsive?: SIZES;
  color?: COLORS;
  size?: keyof typeof fontSizeVariants;
  children: React.ReactNode;
  ariaLabel?: string;
};

export const H = ({ children, as = 'h1', ...props }: HeaderProps) => {
  //either this (which is a small performance hit) or 6 different components H1, H2, H3, H4, H5, H6
  const Styledheader = styled(as, {
    variants: {
      responsive: responsiveFontSizeVariants[as],
      color: colorVariants,
      size: fontSizeVariants,
    },
  });

  return <Styledheader {...props}>{children}</Styledheader>;
};

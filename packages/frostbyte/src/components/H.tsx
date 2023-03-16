import React from 'react';
import { styled } from 'utils/getStyles';
import type { CSS } from '@stitches/react/types';
import { COLORS, KINDS, RESPONSIVE_ELEMENTS, SIZES } from 'utils/constants';
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
  kindContrast?: KINDS;
  kind?: KINDS;
  css?: CSS;
};

export const H = ({ children, as = 'h1', ...props }: HeaderProps) => {
  //either this (which is a small performance hit) or 6 different components H1, H2, H3, H4, H5, H6
  const Styledheader = styled(as, {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    variants: {
      responsive: responsiveFontSizeVariants[as],
      color: colorVariants,
      size: fontSizeVariants,
      kindContrast: {
        primary: {
          color: '$primaryContrast',
        },
        error: {
          color: '$errorContrast',
        },
        warning: {
          color: '$warningContrast',
        },
        success: {
          color: '$successContrast',
        },
        info: {
          color: '$infoContrast',
        },
      },
      kind: {
        primary: {
          color: '$primary',
        },
        error: {
          color: '$error',
        },
        warning: {
          color: '$warning',
        },
        success: {
          color: '$success',
        },
        info: {
          color: '$info',
        },
      },
    },
  });

  return <Styledheader {...props}>{children}</Styledheader>;
};

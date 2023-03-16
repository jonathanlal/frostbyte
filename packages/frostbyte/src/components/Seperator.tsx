import React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { styled } from 'utils/getStyles';
import type { CSS } from '@stitches/react/types';
import { COLORS } from 'utils/constants';

export type SeperatorProps = {
  css?: CSS;
  color?: COLORS;
  width?: string;
  height?: string;
  orientation?: 'vertical' | 'horizontal';
};
export const Seperator = ({
  css,
  orientation = 'horizontal',
  color = 'white',
  width,
  height,
}: SeperatorProps) => {
  if (orientation === 'horizontal') {
    width = width ? width : '100%';
    height = height ? height : '2px';
  } else {
    width = width ? width : '2px';
    height = height ? height : '100%';
  }

  return (
    <SeparatorRoot
      css={{
        backgroundColor: `$${color}`,
        width,
        height,
        ...css,
      }}
      orientation={orientation}
    />
  );
};

const SeparatorRoot = styled(SeparatorPrimitive.Root, {});

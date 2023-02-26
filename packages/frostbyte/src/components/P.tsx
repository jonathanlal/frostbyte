import React, { ReactNode } from 'react';
import { colorVariants } from 'styles/variants/colors';
import { fontSizeVariants } from 'styles/variants/fontSizes';
import { styled } from 'utils/getStyles';

export const Paragraph = styled('p', {
  margin: 0,

  variants: {
    color: {
      ...colorVariants,
    },
    size: {
      ...fontSizeVariants,
    },
  },
  defaultVariants: {
    color: colorVariants.black.color,
    size: fontSizeVariants[20].fontSize,
  },
});

type ParagraphProps = React.ComponentProps<typeof Paragraph>;
export const P = ({
  children,
  color,
  size,
}: {
  children: ReactNode;
  color?: ParagraphProps['color'];
  size?: ParagraphProps['size'];
}) => (
  <Paragraph color={color} size={size}>
    {children}
  </Paragraph>
);

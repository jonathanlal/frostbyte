import React, { ReactNode } from 'react';
import { colorVariants } from 'styles/variants/colors';
import { fontSizeVariants } from 'styles/variants/fontSizes';
import { styled } from 'utils/getStyles';

const StyledParagraph = styled('p', {
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

type StyledParagraphProps = React.ComponentProps<typeof StyledParagraph>;
export const P = ({
  children,
  color,
  size,
}: {
  children: ReactNode;
  color?: StyledParagraphProps['color'];
  size?: StyledParagraphProps['size'];
}) => (
  <StyledParagraph color={color} size={size}>
    {children}
  </StyledParagraph>
);

import React, { ReactNode } from 'react';
import { colorVariants } from 'styles/variants/colors';
import { fontSizeVariants } from 'styles/variants/fontSizes';
import { styled } from 'utils/getStyles';

export const StyledLabel = styled('label', {
  margin: 0,
  userSelect: 'none',

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

type StyledLabelProps = React.ComponentProps<typeof StyledLabel>;
export const Label = ({
  children,
  color,
  size,
  htmlFor,
}: {
  children: ReactNode;
  color?: StyledLabelProps['color'];
  size?: StyledLabelProps['size'];
  htmlFor: StyledLabelProps['htmlFor'];
}) => (
  <StyledLabel color={color} size={size} htmlFor={htmlFor}>
    {children}
  </StyledLabel>
);

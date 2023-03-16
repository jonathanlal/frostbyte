import React, { ReactNode } from 'react';
import { keyframes } from '@stitches/react';
import { styled } from 'utils/getStyles';
import * as PopoverPrimitive from '@radix-ui/react-popover';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledPopoverContent = styled(PopoverPrimitive.Content, {
  display: 'inline-block',
  borderRadius: 4,
  padding: 20,
  width: 260,
  backgroundColor: 'white',
  transformOrigin: 'var(--radix-popover-content-transform-origin)',
  boxShadow: '$3',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  '&:focus': {
    boxShadow: `$1`,
  },
});

export const PopoverContainer = PopoverPrimitive.Root;
export const PopoverAnchor = PopoverPrimitive.Anchor;

export type PopoverProps = {
  children: ReactNode;
  side?: PopoverPrimitive.PopoverContentProps['side'];
  showArrow?: boolean;
  arrowHeight?: number;
  arrowWidth?: number;
  arrowColor?: string;
};
/**
 *
 * The first child is the trigger, the rest is the content
 */
export const Popover = ({
  children,
  side,
  showArrow,
  arrowHeight,
  arrowWidth,
  arrowColor,
}: PopoverProps) => {
  const trigger = (children as ReactNode[])[0];
  const content = (children as ReactNode[]).slice(1);

  return (
    <PopoverContainer>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent
        side={side}
        showArrow={showArrow}
        arrowHeight={arrowHeight}
        arrowWidth={arrowWidth}
        fillColor={arrowColor}
      >
        {content}
      </PopoverContent>
    </PopoverContainer>
  );
};

export const PopoverTrigger = ({ children }: { children: ReactNode }) => (
  <PopoverAnchor asChild>
    <div style={{ display: 'inline-block' }}>
      <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
    </div>
  </PopoverAnchor>
);

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverPrimitive.PopoverContentProps & {
    showArrow?: boolean;
    arrowWidth?: number;
    arrowHeight?: number;
    fillColor?: string;
  }
>(
  (
    {
      children,
      showArrow = true,
      arrowWidth = 12,
      arrowHeight = 12,
      fillColor = 'grey',
      ...props
    },
    forwardedRef
  ) => (
    <PopoverPrimitive.Portal>
      <StyledPopoverContent sideOffset={5} {...props} ref={forwardedRef}>
        {children}
        {showArrow && (
          <PopoverPrimitive.Arrow
            width={arrowWidth}
            height={arrowHeight}
            style={{ fill: fillColor }}
          />
        )}
      </StyledPopoverContent>
    </PopoverPrimitive.Portal>
  )
);

import React, { ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { keyframes } from '@stitches/react';
import { styled } from 'utils/getStyles';
import { InfoCircledIcon } from '@radix-ui/react-icons';

export type TooltipProps = {
  children: ReactNode;
  description: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
};
export const Tooltip = ({ children, description, side }: TooltipProps) => {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        <TooltipWrapper>{children}</TooltipWrapper>
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipContent sideOffset={5} side={side}>
          <InfoCircledIcon width={20} height={20} />
          {description}
          <TooltipArrow />
        </TooltipContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

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

const TooltipContent = styled(TooltipPrimitive.Content, {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 20,
  lineHeight: 1,
  color: '$mauve11',
  backgroundColor: '$white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: 'white',
});

const TooltipWrapper = styled('div', {
  display: 'inline-flex',
  '&:hover': { backgroundColor: '$mauve3' },
  '&:focus': { boxShadow: `$2` },
});

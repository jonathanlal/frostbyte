import React, { Dispatch, SetStateAction } from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import { styled } from 'utils/getStyles';
import { keyframes } from '@stitches/react';
import { SwipeDirection } from '@radix-ui/react-toast';
import { KINDS } from 'utils/constants';
import { H } from './H';
import { P } from './P';
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';

export type ToastProps = {
  kind?: KINDS;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  title: string;
  description?: string;
  swipeDirection?: SwipeDirection;
  children?: React.ReactNode;
  duration?: number;
};
export const Toast = ({
  kind,
  show,
  setShow,
  title,
  description,
  swipeDirection = 'right',
  children,
  duration,
}: ToastProps) => {
  return (
    <RadixToast.Provider swipeDirection={swipeDirection}>
      <ToastRoot
        open={show}
        onOpenChange={setShow}
        variant={kind}
        duration={duration}
      >
        <div
          style={{
            display: 'flex',
          }}
        >
          <H
            size={23}
            kind={kind}
            css={{
              marginBottom: 10,
            }}
          >
            {!kind && <InfoCircledIcon width={25} height={25} />}
            {(kind === 'info' || kind === 'primary') && (
              <InfoCircledIcon width={25} height={25} />
            )}
            {kind === 'success' && <CheckCircledIcon width={25} height={25} />}
            {kind === 'error' && <CrossCircledIcon width={25} height={25} />}
            {kind === 'warning' && (
              <ExclamationTriangleIcon width={25} height={25} />
            )}

            {title}
          </H>
        </div>
        {description && (
          <P size={20} color="mauve11">
            {description}
          </P>
        )}
        {children}
      </ToastRoot>
      <ToastViewport />
    </RadixToast.Provider>
  );
};

const VIEWPORT_PADDING = 25;

const ToastViewport = styled(RadixToast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  // zIndex: 2147483647,
  outline: 'none',
});

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const ToastRoot = styled(RadixToast.Root, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: 15,
  maxWidth: 400,
  // display: 'grid',
  // gridTemplateAreas: '"title action" "description action"',
  // gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',
  // border: '1px solid $grey',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

  variants: {
    variant: {
      primary: {
        border: '1px solid $primary',
      },
      success: {
        border: '1px solid $success',
      },
      error: {
        border: '1px solid $error',
      },
      warning: {
        border: '1px solid $warning',
      },
      info: {
        border: '1px solid $info',
      },
    },
  },
});

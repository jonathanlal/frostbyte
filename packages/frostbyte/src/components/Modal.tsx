import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { styled, keyframes } from '@stitches/react';
import { blackA } from '@radix-ui/colors';
import { Cross2Icon } from '@radix-ui/react-icons';

//add this to the provider so we have it globally and create a hook to use it
export const Modal = ({
  ariaTitle,
  children,
  open = false,
  setOpen,
  width = '450px',
  height = '85vh',
}: {
  ariaTitle?: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  width?: string;
  height?: string;
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent
          css={{
            maxWidth: width,
            maxHeight: height,
          }}
        >
          {ariaTitle && (
            <VisuallyHidden.Root asChild>
              <DialogTitle>{ariaTitle}</DialogTitle>
            </VisuallyHidden.Root>
          )}
          {children}
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <Cross2Icon width={25} height={25} />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
});

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$mauve12',
  fontSize: 17,
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 30,
  width: 30,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$primaryContrast',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$mauve4', cursor: 'pointer' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$mauve6` },
});

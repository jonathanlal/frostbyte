import React, { ReactNode } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { keyframes } from '@stitches/react';
import { styled } from 'utils/getStyles';
import { blackA } from '@radix-ui/colors';
import { Button } from './Button';
import { H } from './H';
import { P } from './P';
import { KINDS } from 'utils/constants';

export type AlertProps = {
  modal: AlertModalProps;
  children: ReactNode;
};
export const Alert = ({ modal, children }: AlertProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertTrigger>{children}</AlertTrigger>
      <AlertModal {...modal} setOpen={setOpen}></AlertModal>
    </AlertDialog.Root>
  );
};

type AlertModalProps = {
  title: string;
  description?: string;
  content?: ReactNode;
  titleAriaLabel?: string;
  descriptionAriaLabel?: string;
  cancelBtn?: string;
  actionBtn: string;
  kind: KINDS;
  onAction?: () => void;
};
// type AlertTriggerProps = {
//   children: ReactNode;
// };

const AlertTrigger = ({ children }: { children: ReactNode }) => (
  <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
);
const AlertModal = ({
  title,
  description,
  content,
  titleAriaLabel,
  descriptionAriaLabel,
  cancelBtn = 'Cancel',
  actionBtn,
  kind,
  onAction = () => null,
  setOpen,
}: AlertModalProps & {
  setOpen: (open: boolean) => void;
}) => {
  const handleAction = async () => {
    await onAction();
    setOpen(false);
  };

  return (
    <AlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertHeader ariaLabel={titleAriaLabel} size={26} color="mauve12">
          {title}
        </AlertHeader>

        {description && (
          <AlertDescription
            ariaLabel={descriptionAriaLabel}
            size={22}
            color="mauve10"
          >
            {description}
          </AlertDescription>
        )}

        {content && content}

        <Flex css={{ justifyContent: 'flex-end', gap: 20 }}>
          <AlertDialog.Cancel asChild>
            <Button color="mauve10" outlined size="sm">
              {cancelBtn}
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button kind={kind} size="sm">
              {actionBtn}
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialogContent>
    </AlertDialog.Portal>
  );
};

const AlertHeader = styled(H, {
  marginBottom: 10,
});
const AlertDescription = styled(P, {
  marginBottom: 20,
});

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const AlertDialogContent = styled(AlertDialog.Content, {
  backgroundColor: '$white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' },
});

const Flex = styled('div', { display: 'flex' });

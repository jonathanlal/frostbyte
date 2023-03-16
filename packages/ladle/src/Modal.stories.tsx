import type { Story } from '@ladle/react';
import { Modal, ModalProps, Button, P, H } from 'frostbyte';
import React from 'react';
export const ModalC: Story<ModalProps> = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)} size={'sm'}>
        Toggle
      </Button>
      <br />
      <br />
      <Modal {...props} open={open} setOpen={setOpen} ariaTitle={'Modal'}>
        <H>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H>
        <br />
        <P size={20} color="mauve11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          laoreet nisi erat, at molestie est ultrices eu. Integer tincidunt
          egestas tortor, a vulputate dui tempor non. Ut lobortis, dui vitae
          malesuada tempor, neque risus dapibus nibh, eget efficitur urna magna
          in ligula. Fusce quis massa vel lorem maximus suscipit.
        </P>
      </Modal>
    </>
  );
};

ModalC.storyName = 'Modal';
ModalC.meta = {
  title: 'Modal',
  description:
    'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
  disableColorSelector: true,
};

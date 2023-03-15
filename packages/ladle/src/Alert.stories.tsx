import type { Story } from '@ladle/react';
import { Alert, AlertProps, Button } from 'frostbyte';
export const AlertC: Story<AlertProps> = ({ ...props }) => {
  const modal = {
    title: 'Maecenas vitae massa eros.',
    actionBtn: 'Ok',
    description:
      'Maecenas porttitor mi et tincidunt mattis. Proin quis sem eget velit consectetur iaculis a ac turpis. Vivamus quis lectus vel.',
    kind: 'success' as AlertProps['modal']['kind'],
    onAction: () => console.log('action'),
  };

  const kind = props.modal as unknown as AlertProps['modal']['kind']; //bit of a hack
  const modalProps = {
    ...modal,
    kind,
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Alert modal={modalProps}>
        <Button kind={kind}>Open alert</Button>
      </Alert>
    </div>
  );
};

AlertC.argTypes = {
  modal: {
    control: { type: 'select' },
    options: ['success', 'primary', 'error', 'warning', 'info'],
  },
};

AlertC.storyName = 'Alert';
AlertC.meta = {
  title: 'Alert',
  description: 'Alerts can be controlled via a button or using the api',
  disableColorSelector: true,
};

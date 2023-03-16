import type { Story } from '@ladle/react';
import { Collapsible, CollapsibleProps, Button, P } from 'frostbyte';
import React from 'react';
export const CollapsibleC: Story<CollapsibleProps> = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)} size={'sm'}>
        Toggle
      </Button>
      <br />
      <br />
      <Collapsible
        {...props}
        open={open}
        setOpen={setOpen}
        triggerBtnStyles={{
          top: 27,
          left: 20,
        }}
      >
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </Collapsible>
    </>
  );
};
const Content = () => (
  <div
    style={{
      width: '600px',
      height: '50px',
      //   border: '1px solid black',
      boxShadow: '0 0 5px 0 rgba(150, 150, 150, 0.8)',
      borderRadius: '5px',
      marginTop: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla</P>
  </div>
);

CollapsibleC.args = {
  triggerBtn: false,
};

CollapsibleC.argTypes = {
  initialShown: {
    control: { type: 'range', max: 6, min: 1, step: 1 },
  },
};

CollapsibleC.storyName = 'Collapsible';
CollapsibleC.meta = {
  title: 'Collapsible',
  description: 'Wrap content in a collapsible container',
  disableColorSelector: true,
};

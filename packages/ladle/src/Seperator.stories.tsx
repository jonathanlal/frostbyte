import type { Story } from '@ladle/react';
import { COLORS_ARRAY, P, Seperator, SeperatorProps } from 'frostbyte';

export const SeperatorC: Story<SeperatorProps> = ({ ...props }) => {
  return (
    <>
      <div style={{ display: 'inline-flex', gap: 10, alignItems: 'center' }}>
        <P size={25}>Ipsum</P>
        <Seperator {...props} />
        <P size={25}>Lorem</P>
      </div>
    </>
  );
};

SeperatorC.args = {
  width: '2px',
  height: '25px',
};
SeperatorC.argTypes = {
  color: {
    control: { type: 'select' },
    options: COLORS_ARRAY,
    defaultValue: 'mauve11',
  },
  orientation: {
    control: { type: 'inline-radio' },
    options: ['horizontal', 'vertical'],
    defaultValue: 'vertical',
  },
};

SeperatorC.storyName = 'Seperator';
SeperatorC.meta = {
  title: 'Seperator',
  description: 'Visually or semantically separates content.',
  disableColorSelector: true,
};

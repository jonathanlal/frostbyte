import type { Story } from '@ladle/react';
import { P, Tooltip, TooltipProps } from 'frostbyte';

export const TooltipC: Story<TooltipProps> = ({ ...props }) => {
  return (
    <>
      <div style={{ display: 'inline-flex', gap: 10, alignItems: 'center' }}>
        <Tooltip {...props}>
          <P size={27}>Hover over this!</P>
        </Tooltip>
      </div>
    </>
  );
};

TooltipC.args = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
};
TooltipC.argTypes = {
  side: {
    control: { type: 'inline-radio' },
    options: ['top', 'bottom', 'left', 'right'],
  },
};

TooltipC.storyName = 'Tooltip';
TooltipC.meta = {
  title: 'Tooltip',
  description:
    'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  disableColorSelector: true,
};

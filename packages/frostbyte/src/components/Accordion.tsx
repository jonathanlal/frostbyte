import React, { ReactNode } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { styled, keyframes } from '@stitches/react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface AccordionItemProps {
  title: ReactNode;
  content: ReactNode;
  id: string;
}
export type AccordionProps = { items: AccordionItemProps[] } & {
  width?: number | string;
} & (
    | AccordionPrimitive.AccordionSingleProps
    | AccordionPrimitive.AccordionMultipleProps
  );

const Accordion = ({ items, width = '100%', ...props }: AccordionProps) => {
  return (
    <AccordionRoot {...props} style={{ width }}>
      {items.map((item) => (
        <AccordionItem value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

const AccordionRoot = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  //   width: 300,
  backgroundColor: '$mauve6', //HERE
  boxShadow: `$1`,
});

const AccordionItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px $colors$mauve12`, //HERE
  },
});

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
  '&:hover': { cursor: 'pointer' },
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: '$white',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 18,
  lineHeight: 1,
  color: '$mauve12', //HERE
  boxShadow: `0 1px 0 $colors$mauve6`, //HERE
  '&:hover': { backgroundColor: '$mauve2' }, //HERE
});

const StyledChevron = styled(ChevronDownIcon, {
  color: '$mauve12', //HERE
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 17,
  color: '$mauve11', //HERE
  backgroundColor: '$mauve2', //HERE

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled('div', {
  padding: '15px 20px',
});

export default Accordion;

import React, { ReactNode } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { keyframes, styled } from '@stitches/react';
import { blackA } from '@radix-ui/colors';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';

const CollapsibleTrigger = ({
  open,
  style,
}: {
  open: boolean;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        right: -30,
        top: 5,
        ...style, //we might not need this div wrapper... could be an issue
      }}
    >
      <CollapsiblePrimitive.Trigger asChild style={style}>
        <IconButton>{open ? <Cross2Icon /> : <RowSpacingIcon />}</IconButton>
      </CollapsiblePrimitive.Trigger>
    </div>
  );
};

export type CollapsibleProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  initialShown?: number;
  triggerBtn?: boolean;
  triggerBtnStyles?: React.CSSProperties;
};

export const Collapsible = ({
  open,
  setOpen,
  defaultOpen = false,
  disabled = false,
  children,
  initialShown = 1,
  triggerBtn = false,
  triggerBtnStyles,
}: CollapsibleProps) => {
  const shownContent = (children as ReactNode[]).slice(0, initialShown);
  const collapsibleContent = (children as ReactNode[]).slice(initialShown);
  return (
    <CollapsibleRoot
      open={open}
      onOpenChange={setOpen}
      defaultOpen={defaultOpen}
      disabled={disabled}
    >
      {triggerBtn && (
        <CollapsibleTrigger open={open} style={triggerBtnStyles} />
      )}
      {shownContent}
      <CollapsibleContent>{collapsibleContent}</CollapsibleContent>
    </CollapsibleRoot>
  );
};

const slideUp = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
});
const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
});
const CollapsibleContent = styled(CollapsiblePrimitive.Content, {
  '&[data-state="closed"]': { animation: `${slideUp} 300ms ease-out` },
  '&[data-state="open"]': { animation: `${slideDown} 300ms ease-out` },
});

const CollapsibleRoot = styled(CollapsiblePrimitive.Root, {
  display: 'inline-block',
  position: 'relative',
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$violet11',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&[data-state="closed"]': { backgroundColor: '$white' },
  '&[data-state="open"]': { backgroundColor: '$violet3' },
  '&:hover': { backgroundColor: '$violet3' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$black` },
});

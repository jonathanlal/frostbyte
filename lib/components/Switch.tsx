'use client';
import React, { Dispatch, SetStateAction } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from '../../stitches.config';
import { Label } from './Text';

export const Switch = ({
  label,
  setChecked,
  checked,
}: {
  label?: string;
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
}) => {
  return (
    <SwitchContainer>
      {label && <Label htmlFor="switch">{label}</Label>}
      <SwitchRoot
        id="switch"
        onCheckedChange={() => setChecked(!checked)}
        defaultChecked={checked}
      >
        <SwitchThumb />
      </SwitchRoot>
    </SwitchContainer>
  );
};

const SwitchRoot = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  borderRadius: '$1',
  position: 'relative',
  boxShadow: `$3`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&[data-state="checked"]': { backgroundColor: '$green' },
  '&[data-state="unchecked"]': { backgroundColor: '$red' },
  '&:hover': { cursor: 'pointer' },
});

const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white', //color of circle inside switch
  borderRadius: '$1',
  boxShadow: `$2`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

const SwitchContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

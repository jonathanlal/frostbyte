import React, { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import { styled } from 'utils/getStyles';

const SelectTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 22,
  lineHeight: 1,
  height: 40,
  gap: 20,
  backgroundColor: 'white',
  color: '$primaryContrast',
  boxShadow: `$1`,
  '&:hover': { backgroundColor: '$mauve3', cursor: 'pointer' },
  '&:focus': { boxShadow: `$3` },
  '&[data-placeholder]': { color: '$primary' },
});

const SelectIcon = styled(SelectPrimitive.SelectIcon, {
  color: '$success',
});

const SelectContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const SelectViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$violet11',
  cursor: 'default',
};
const SelectScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
);

const SelectScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
);

const StyledItem = styled(SelectPrimitive.Item, {
  fontSize: 20,
  lineHeight: 1,
  color: '$primaryContrast',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  minheight: 25,
  padding: '8px 35px 8px 25px',
  position: 'relative',
  userSelect: 'none',
  '&:hover': { cursor: 'pointer' },
  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$primary',
  },
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

type ISelectProps = {
  children: React.ReactNode;
  placeholder?: string;
  ariaLabel?: string;
} & SelectPrimitive.SelectProps;

export const SelectContainer = forwardRef<HTMLButtonElement, ISelectProps>(
  ({ children, ariaLabel, placeholder, ...props }, ref) => {
    return (
      <>
        <SelectPrimitive.Root {...props}>
          <SelectTrigger ref={ref} aria-label={ariaLabel}>
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectIcon>
              <ChevronDownIcon />
            </SelectIcon>
          </SelectTrigger>
          <SelectPrimitive.Portal>
            <SelectContent>
              <SelectScrollUpButton>
                <ChevronUpIcon />
              </SelectScrollUpButton>
              <SelectViewport>{children}</SelectViewport>
              <SelectScrollDownButton>
                <ChevronDownIcon />
              </SelectScrollDownButton>
            </SelectContent>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </>
    );
  }
);

type ISelectItemProps = {
  children: React.ReactNode;
  value: string;
} & SelectPrimitive.SelectItemProps;

export const SelectItem = forwardRef<HTMLDivElement, ISelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledItem {...props} ref={forwardedRef}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <StyledItemIndicator>
          <CheckIcon width={25} height={25} />
        </StyledItemIndicator>
      </StyledItem>
    );
  }
);

export type SelectProps = {
  ariaLabel?: string;
  placeholder?: string;
  items: Array<{ value: string; label: string; disabled?: boolean }>;
} & SelectPrimitive.SelectProps;
export const Select = ({
  ariaLabel,
  placeholder,
  items,
  ...props
}: SelectProps) => {
  return (
    <SelectContainer {...props} placeholder={placeholder} ariaLabel={ariaLabel}>
      {items.map(({ value, label, disabled }) => (
        <SelectItem key={value} value={value} disabled={disabled}>
          {label}
        </SelectItem>
      ))}
    </SelectContainer>
  );
};

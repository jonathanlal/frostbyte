import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from 'utils/getStyles';

export type AvatarProps = {
  src: string;
  alt: string;
  fallBackText: string;
};

export const Avatar = ({ src, alt, fallBackText }: AvatarProps) => (
  <AvatarRoot>
    <AvatarImage src={src} alt={alt} />
    {fallBackText && (
      <AvatarFallback delayMs={600}>{fallBackText}</AvatarFallback>
    )}
  </AvatarRoot>
);

const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: '$black',
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$mauve7',
  color: '$violet11',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

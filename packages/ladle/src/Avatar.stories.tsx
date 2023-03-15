import type { Story } from '@ladle/react';
import { Avatar, AvatarProps } from 'frostbyte';
export const AvatarC: Story<AvatarProps> = ({ ...props }) => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Avatar
        alt="some profile image"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        fallBackText="PI"
      />

      <Avatar
        alt="some profile image with fallback text"
        src=""
        fallBackText="PI"
      />
    </div>
  );
};

AvatarC.storyName = 'Avatar';
AvatarC.meta = {
  title: 'Avatar',
  description: 'Avatar with fallback avatar',
  disableColorSelector: true,
};

import React, { ReactNode } from 'react';
import { useFrostbyte } from 'hooks/useFrostbyte';

export const P = ({ children }: { children: ReactNode }) => {

  const test = useFrostbyte();
  console.log('test', test);

  return (
    <p>{children}</p>
  );
};

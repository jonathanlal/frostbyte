import { createContext } from 'react';

export const FrostbyteContext = createContext<{ something: string }>({
  something: '',
});

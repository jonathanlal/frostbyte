import { useContext } from 'react';
import { FrostbyteContext } from 'utils/FrostbyteContext';

export const useFrostbyte = () => {
  const context = useContext(FrostbyteContext);
  if (!context) {
    throw new Error('useFrostbyte must be used within a FrostbyteProvider');
  }
  const isDarkTheme = context.currentTheme === 'darkTheme';
  return {
    isDarkTheme,
    ...context,
  };
};

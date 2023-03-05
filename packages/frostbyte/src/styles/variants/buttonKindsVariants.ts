import { KINDS } from 'utils/constants';
export const buttonKindsVariants = {
  info: {
    backgroundColor: '$info',
    color: '$sky12',
    '&:active, &:focus-visible': { outlineColor: '$sky12' },
    '&:hover, &:focus': {
      transform: 'translateY(-2px)',
      cursor: 'pointer',
      boxShadow: '$info',
      transition: 'all 0.3s ease',
    },
  },
  success: {
    backgroundColor: '$success',
    color: '$grass12',
    '&:active, &:focus-visible': { outlineColor: '$grass12' },
    '&:hover, &:focus': {
      transform: 'translateY(-2px)',
      cursor: 'pointer',
      boxShadow: '$success',
      transition: 'all 0.3s ease',
    },
  },
  warning: {
    backgroundColor: '$warning',
    color: '$amber12',
    '&:active, &:focus-visible': { outlineColor: '$amber12' },
    '&:hover, &:focus': {
      transform: 'translateY(-2px)',
      cursor: 'pointer',
      boxShadow: '$warning',
      transition: 'all 0.3s ease',
    },
  },
  error: {
    backgroundColor: '$error',
    color: '$tomato12',
    '&:active, &:focus-visible': { outlineColor: '$tomato12' },
    '&:hover, &:focus': {
      transform: 'translateY(-2px)',
      cursor: 'pointer',
      boxShadow: '$error',
      transition: 'all 0.3s ease',
    },
  },
  primary: {
    backgroundColor: '$primary',
    color: '$purple12',
    '&:active, &:focus-visible': { outlineColor: '$purple12' },
    '&:hover, &:focus': {
      transform: 'translateY(-2px)',
      cursor: 'pointer',
      boxShadow: '$primary',
      transition: 'all 0.3s ease',
    },
  },
} as Record<
  KINDS,
  {
    backgroundColor: string;
    color: string;
    '&:active, &:focus-visible': {
      outlineColor: string;
    };
    '&:hover, &:focus': {
      transform: string;
      cursor: string;
      boxShadow: string;
      transition: string;
    };
  }
>;

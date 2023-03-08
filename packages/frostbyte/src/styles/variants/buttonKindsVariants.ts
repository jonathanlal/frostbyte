import { KINDS } from 'utils/constants';
export const buttonKindsVariants = {
  info: {
    backgroundColor: '$info',
    color: '$infoContrast',
    '&:active, &:focus-visible': { outlineColor: '$infoContrast' },
    '&:hover, &:focus': {
      transform: 'translateY(-2px)',
      cursor: 'pointer',
      boxShadow: '$info',
      transition: 'all 0.3s ease',
    },
  },
  success: {
    backgroundColor: '$success',
    color: '$successContrast',
    '&:active, &:focus-visible': { outlineColor: '$successContrast' },
    '&:hover, &:focus': {
      transform: 'translateY(-2px)',
      cursor: 'pointer',
      boxShadow: '$success',
      transition: 'all 0.3s ease',
    },
  },
  warning: {
    backgroundColor: '$warning',
    color: '$warningContrast',
    '&:active, &:focus-visible': { outlineColor: '$warningContrast' },
    '&:hover, &:focus': {
      transform: 'translateY(-2px)',
      cursor: 'pointer',
      boxShadow: '$warning',
      transition: 'all 0.3s ease',
    },
  },
  error: {
    backgroundColor: '$error',
    color: '$errorContrast',
    '&:active, &:focus-visible': { outlineColor: '$errorContrast' },
    '&:hover, &:focus': {
      transform: 'translateY(-2px)',
      cursor: 'pointer',
      boxShadow: '$error',
      transition: 'all 0.3s ease',
    },
  },
  primary: {
    backgroundColor: '$primary',
    color: '$primaryContrast',
    '&:active, &:focus-visible': { outlineColor: '$primaryContrast' },
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

export const buttonKindsOutlinedCompoundVariants = [
  {
    kind: 'info',
    outlined: true,
    css: {
      color: '$infoContrast',
      border: '3px solid $info',
      backgroundColor: 'transparent',
      '&:active, &:focus-visible': { outlineColor: '$infoContrast' },
      '&:hover, &:focus': {
        transform: 'translateY(-2px)',
        backgroundColor: '$info',
        color: '$infoContrast',
        boxShadow: '$info',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
    },
  },
  {
    kind: 'success',
    outlined: true,
    css: {
      color: '$successContrast',
      border: '3px solid $success',
      backgroundColor: 'transparent',
      '&:active, &:focus-visible': { outlineColor: '$successContrast' },
      '&:hover, &:focus': {
        transform: 'translateY(-2px)',
        backgroundColor: '$success',
        color: '$successContrast',
        boxShadow: '$success',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
    },
  },
  {
    kind: 'warning',
    outlined: true,
    css: {
      color: '$warningContrast',
      border: '3px solid $warning',
      backgroundColor: 'transparent',
      '&:active, &:focus-visible': { outlineColor: '$warningContrast' },
      '&:hover, &:focus': {
        transform: 'translateY(-2px)',
        backgroundColor: '$warning',
        color: '$warningContrast',
        boxShadow: '$warning',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
    },
  },
  {
    kind: 'error',
    outlined: true,
    css: {
      color: '$errorContrast',
      border: '3px solid $error',
      backgroundColor: 'transparent',
      '&:active, &:focus-visible': { outlineColor: '$errorContrast' },
      '&:hover, &:focus': {
        transform: 'translateY(-2px)',
        backgroundColor: '$error',
        color: '$errorContrast',
        boxShadow: '$error',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
    },
  },
  {
    kind: 'primary',
    outlined: true,
    css: {
      color: '$primaryContrast',
      border: '3px solid $primary',
      backgroundColor: 'transparent',
      '&:active, &:focus-visible': { outlineColor: '$primaryContrast' },
      '&:hover, &:focus': {
        transform: 'translateY(-2px)',
        backgroundColor: '$primary',
        color: '$primaryContrast',
        boxShadow: '$primary',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
    },
  },
] as {
  kind: string;
  outlined: boolean;
  css: {
    color: string;
    border: string;
    backgroundColor: string;
    '&:active, &:focus-visible': { outlineColor: string };
    '&:hover, &:focus': {
      transform: string;
      backgroundColor: string;
      color: string;
      boxShadow: string;
      cursor: string;
      transition: string;
    };
  };
}[];

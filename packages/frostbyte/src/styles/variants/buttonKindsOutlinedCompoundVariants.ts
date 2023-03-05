export const buttonKindsOutlinedCompoundVariants = [
  {
    kind: 'info',
    outlined: true,
    css: {
      color: '$sky11',
      border: '3px solid $info',
      backgroundColor: 'transparent',
      '&:active, &:focus-visible': { outlineColor: '$sky12' },
      '&:hover, &:focus': {
        transform: 'translateY(-2px)',
        backgroundColor: '$info',
        color: '$sky12',
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
      color: '$grass11',
      border: '3px solid $success',
      backgroundColor: 'transparent',
      '&:active, &:focus-visible': { outlineColor: '$grass12' },
      '&:hover, &:focus': {
        transform: 'translateY(-2px)',
        backgroundColor: '$success',
        color: '$grass12',
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
      color: '$amber11',
      border: '3px solid $warning',
      backgroundColor: 'transparent',
      '&:active, &:focus-visible': { outlineColor: '$amber12' },
      '&:hover, &:focus': {
        transform: 'translateY(-2px)',
        backgroundColor: '$warning',
        color: '$amber12',
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
      color: '$tomato11',
      border: '3px solid $error',
      backgroundColor: 'transparent',
      '&:active, &:focus-visible': { outlineColor: '$tomato12' },
      '&:hover, &:focus': {
        transform: 'translateY(-2px)',
        backgroundColor: '$error',
        color: '$tomato12',
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
      color: '$purple11',
      border: '3px solid $primary',
      backgroundColor: 'transparent',
      '&:active, &:focus-visible': { outlineColor: '$purple12' },
      '&:hover, &:focus': {
        transform: 'translateY(-2px)',
        backgroundColor: '$primary',
        color: '$purple12',
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

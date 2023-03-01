import { globalCss } from 'utils/getStyles';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '*': {
    margin: 0,
  },
  'html, body': {
    height: '100%',
  },
  body: {
    lineHeight: 'normal',
  },
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  'input, button, textarea, select': {
    fontFamily: 'inherit',
  },
  'p, h1, h2, h3, h4, h5, h6 ': {
    overflowWrap: 'break-word',
  },
  '#root': {
    isolation: 'isolate',
  },
});

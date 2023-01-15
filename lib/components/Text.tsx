'use client';
import { styled } from '../../stitches.config';

export const P = styled('p', {
  color: '$purple',
  fontSize: '$2',
  margin: 0,
  fontFamily: '$zen',

  variants: {
    // font: {
    //     fell: { fontFamily: '$fell' },
    //     zen: { fontFamily: '$zen' },
    // },
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },
});

export const Label = styled('label', {
  color: '$purple',
  fontSize: '$2',
  paddingRight: '$3',
  fontFamily: '$fira',
  margin: 0,
  userSelect: 'none',
  // variants: {
  // font: {
  //     fell: { fontFamily: '$fell' },
  //     zen: { fontFamily: '$zen' },
  // },
  // },
});

export const H1 = styled('h1', {
  color: '$purple',
  fontSize: '$6',
  fontFamily: '$fira',
  margin: 0,
  // variants: {
  // font: {
  //     fell: { fontFamily: '$fell' },
  //     zen: { fontFamily: '$zen' },
  // },
  // },
});

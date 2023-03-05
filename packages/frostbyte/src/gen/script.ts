import * as fs from 'fs';
import {
  COLORS,
  KINDS,
  KIND_ENUM,
  RESPONSIVE_SIZES,
  SIZES_ARRAY,
} from '../utils/constants.js';
import { brandColors, colors } from '../styles/colors.js'; // wtf tsconfig paths not working

const outputDir = 'src/styles/variants/';

const createColorVariants = (cssProperty: string) =>
  Object.fromEntries(
    Object.entries(colors.default).map(([key]) => [
      key as COLORS,
      { [cssProperty]: `$${key}` },
    ])
  );

const getColorsWithoutKinds = () => {
  const allColors = colors.default;
  const colorVariants = Object.keys(allColors)
    .filter((key) => /\d/.test(key))
    .reduce((result, current) => {
      result[current] = allColors[current];
      return result;
    }, {});
  return colorVariants;
};

function getCorrespondingBtnFontColor(
  colorKey: COLORS,
  excludeExceptions = false
) {
  const num = parseInt(colorKey.match(/\d+/)[0]);
  const color = colorKey.replace(/[0-9]/g, '');

  let result: string;

  if (excludeExceptions) {
    const exceptions = {
      orange: {
        9: 'black',
      },
      yellow: {
        9: 'black',
        10: 'black',
      },
      sky: {
        9: '$sky12',
        10: '$sky12',
      },
      mint: {
        9: '$mint12',
        10: '$mint12',
      },
      lime: {
        9: '$lime12',
        10: '$lime12',
      },
      amber: {
        9: '$amber12',
        10: '$amber12',
      },
      cyan: {
        9: '$cyan12',
      },
      grass: {
        9: '$grass12',
      },
    };

    const colorData = exceptions[color];
    if (colorData && num in colorData) {
      return 'black';
      // return colorData[num];
    }
  }

  if (num <= 4) {
    result = '12';
  }
  if (num == 5 || num == 6) {
    result = '11';
  }
  if (num == 7 || num == 8) {
    result = '12';
  }
  if (num >= 9) {
    result = '1';
  }

  return `$${color}${result}`;
}

const createShadowStyles = () => {
  const shadowStyles = {};
  Object.entries(colors.default).forEach(([key]) => {
    const colorKey = key as COLORS;
    shadowStyles[colorKey] = `$colors$${colorKey} 0px 2px 10px`;
  });
  return shadowStyles;
};

export const createButtonColorVariants = () =>
  Object.fromEntries(
    Object.entries(getColorsWithoutKinds()).map(([key]) => {
      const colorKey = key as COLORS;
      // if (/\d/.test(colorKey)) {
      const textColor = getCorrespondingBtnFontColor(colorKey);

      return [
        key as COLORS,
        {
          backgroundColor: `$${key}`,
          border: `1px solid ${textColor}`,
          color: textColor,
          '&:active, &:focus-visible': { outlineColor: textColor },
          '&:hover, &:focus': {
            cursor: 'pointer',
            transform: 'translateY(-2px)',
            boxShadow: textColor,
            transition: 'all 0.3s ease',
          },
        },
      ];
    })
  );

const createButtonKindsVariants = () =>
  Object.fromEntries(
    Object.values(KIND_ENUM).map((kind) => {
      const brandColor = brandColors[kind];
      const color = brandColor.replace(/[0-9]/g, '');
      return [
        kind as KINDS,
        {
          backgroundColor: `$${kind}`,
          color: `${color}12`,
          '&:active, &:focus-visible': {
            outlineColor: `${color}12`,
          },
          '&:hover, &:focus': {
            transform: 'translateY(-2px)',
            cursor: 'pointer',
            boxShadow: `$${kind}`,
            transition: 'all 0.3s ease',
          },
        },
      ];
    })
  );

const createButtonColorOutlinedCompoundVariants = () =>
  Object.entries(getColorsWithoutKinds()).map(([key]) => {
    const colorKey = key as COLORS;
    if (/\d/.test(colorKey)) {
      const textColor = getCorrespondingBtnFontColor(colorKey as COLORS, true);
      return {
        color: colorKey,
        outlined: true,
        css: {
          color: `$${colorKey}`,
          border: `3px solid $${colorKey}`,
          backgroundColor: 'transparent',
          '&:active, &:focus-visible': { outlineColor: `${textColor}` },
          '&:hover, &:focus': {
            transform: 'translateY(-2px)',
            backgroundColor: `$${colorKey}`,
            color: `${textColor}`,
            boxShadow: `$${colorKey}`,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          },
        },
      };
    }
  });

const createButtonKindOutlinedCompoundVariants = () =>
  Object.values(KIND_ENUM).map((kind) => {
    const brandColor = brandColors[kind];
    const color = brandColor.replace(/[0-9]/g, '');
    return {
      kind: kind as KINDS,
      outlined: true,
      css: {
        color: `${color}11`,
        border: `3px solid $${kind}`,
        backgroundColor: 'transparent',
        '&:active, &:focus-visible': { outlineColor: `${color}12` },
        '&:hover, &:focus': {
          transform: 'translateY(-2px)',
          backgroundColor: `$${kind}`,
          color: `${color}12`,
          boxShadow: `$${kind}`,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        },
      },
    };
  });

const createResponsiveFontSizes = () => {
  const multiplier = 0.3;
  const sizes: Record<string, Record<string, { fontSize: string }>> = {};

  Object.keys(RESPONSIVE_SIZES).forEach((element) => {
    const currentValues = RESPONSIVE_SIZES[element];
    let currentMin = currentValues.min;
    let currentPref = currentValues.pref;
    let currentMax = currentValues.max;

    const sizeObj = SIZES_ARRAY.reduce((acc, size) => {
      acc[size] = {
        fontSize: `clamp(${currentMin.toFixed(1)}em, ${currentPref.toFixed(
          1
        )}vw, ${currentMax.toFixed(1)}em)`,
      };

      currentMin += multiplier;
      currentPref += multiplier;
      currentMax += multiplier;

      return acc;
    }, {});

    sizes[element] = sizeObj;
  });

  return sizes;
};

function createFontSizes(
  min: number,
  max: number,
  multiplier: number
): { [key: number]: { fontSize: string } } {
  const acc: { [key: number]: { fontSize: string } } = {};
  for (let i = min; i <= max; i += multiplier) {
    acc[i as number] = { fontSize: `$${i}` };
  }
  return acc;
}

function genButtonColorOutlinedCompoundVariants() {
  const buttonColorOutlinedCompoundVariants = `
  export const buttonColorOutlinedCompoundVariants = ${JSON.stringify(
    createButtonColorOutlinedCompoundVariants()
  )} as {
    color: string;
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
      }
    }
}[];`;
  writeToFile(
    buttonColorOutlinedCompoundVariants,
    'buttonColorOutlinedCompoundVariants.ts'
  );
}
function genBottonKindsOutlinedCompoundVariants() {
  const buttonKindsOutlinedCompoundVariants = `
  export const buttonKindsOutlinedCompoundVariants = ${JSON.stringify(
    createButtonKindOutlinedCompoundVariants()
  )} as {
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
      }
    };
  }[];`;

  writeToFile(
    buttonKindsOutlinedCompoundVariants,
    'buttonKindsOutlinedCompoundVariants.ts'
  );
}

function genBottonKindsVariants() {
  const buttonKindsVariants = `import { KINDS } from 'utils/constants';
  export const buttonKindsVariants = ${JSON.stringify(
    createButtonKindsVariants()
  )} as Record<KINDS, {
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
  }>;`;

  writeToFile(buttonKindsVariants, 'buttonKindsVariants.ts');
}
function genFontSizeVariants() {
  const fontSizeVariants = `
  export const fontSizeVariants = ${JSON.stringify(
    createFontSizes(12, 70, 1)
  )} as Record<number, { fontSize: string }>;`;

  writeToFile(fontSizeVariants, 'fontSizeVariants.ts');
}
function genButtonColorVariants() {
  const buttonColorVariants = `import { COLORS_WITHOUT_KINDS } from 'utils/constants';
  export const buttonColorVariants = ${JSON.stringify(
    createButtonColorVariants()
  )} as Record<COLORS_WITHOUT_KINDS, { 
    '&:active, &:focus-visible': { outlineColor: string },
    '&:hover, &:focus': {
      transform: string;
      boxShadow: string;
      cursor: string;
      transition: string;
    }
   }>;`;

  writeToFile(buttonColorVariants, 'buttonColorVariants.ts');
}

function genColorVariants() {
  const colorVariantsString = `import { COLORS } from 'utils/constants';
  export const colorVariants = ${JSON.stringify(
    createColorVariants('color')
  )} as Record<COLORS, { color: string }>;`;

  writeToFile(colorVariantsString, 'colorVariants.ts');
}

function genResponsiveFontSizeVariants() {
  const responsiveFontSizeVariants = `import { SIZES, RESPONSIVE_ELEMENTS } from "utils/constants";
  export const responsiveFontSizeVariants = ${JSON.stringify(
    createResponsiveFontSizes()
  )} as Record<RESPONSIVE_ELEMENTS, Record<SIZES, { fontSize: string }>>;`;

  writeToFile(responsiveFontSizeVariants, 'responsiveFontSizeVariants.ts');
}

function genShadowStyles() {
  const shadowStyles = `import { COLORS } from 'utils/constants';
export const shadowStyles = ${JSON.stringify(
    createShadowStyles()
  )} as { [K in COLORS]: string };`;
  writeToFile(shadowStyles, 'shadowStyles.ts', 'src/styles/defaults/');
}

function writeToFile(data: string, fileName: string, diffDir?: string) {
  fs.writeFile(`${!diffDir ? outputDir : diffDir}${fileName}`, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} has been written to!`);
  });
}

genColorVariants();
genResponsiveFontSizeVariants();
genFontSizeVariants();
genButtonColorVariants();
genBottonKindsVariants();
genBottonKindsOutlinedCompoundVariants();
genButtonColorOutlinedCompoundVariants();

genShadowStyles();

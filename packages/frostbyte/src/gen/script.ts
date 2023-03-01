import * as fs from 'fs';
import { COLORS, RESPONSIVE_SIZES, SIZES_ARRAY } from '../utils/constants.js';
import { colors } from '../styles/colors.js'; // wtf tsconfig paths not working

const outputDir = 'src/styles/variants/';

const createColorVariants = (cssProperty: string) =>
  Object.fromEntries(
    Object.entries(colors.default).map(([key]) => [
      key as COLORS,
      { [cssProperty]: `$${key}` },
    ])
  );

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
function genFontSizeVariants() {
  const fontSizeVariants = `
  export const fontSizeVariants = ${JSON.stringify(
    createFontSizes(12, 70, 1)
  )} as Record<number, { fontSize: string }>;`;

  writeToFile(fontSizeVariants, 'fontSizeVariants.ts');
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

function writeToFile(data: string, fileName: string) {
  fs.writeFile(`${outputDir}${fileName}`, data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
}

genColorVariants();
genResponsiveFontSizeVariants();
genFontSizeVariants();

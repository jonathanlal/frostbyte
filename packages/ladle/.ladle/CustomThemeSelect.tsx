import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';
import React from 'react';
import { Label, COLORS_OBJECT, COLORS_OBJECT_DARK } from 'frostbyte';
// import { useFrostbyte } from 'frostbyte';

interface ColourOption {
  value: string;
  label: string;
  color: string;
  isFixed?: boolean;
  isDisabled?: boolean;
}
function convertColorsToObject(isDarkMode: boolean) {
  const colorArray: ColourOption[] = [];

  const colors = !isDarkMode ? COLORS_OBJECT : COLORS_OBJECT_DARK;

  Object.keys(COLORS_OBJECT).forEach((colorName) => {
    // Convert the color name to title case for the label
    const label = colorName.charAt(0).toUpperCase() + colorName.slice(1);
    // Remove the '$' prefix from the color value
    const value = `$${colors[colorName].slice(1)}`;
    // Get the hex code of the color
    const hexColor = colors[colorName];

    colorArray.push({ value, label, color: hexColor });
  });

  // Sort the colorArray by label alphabetically
  colorArray.sort((a, b) => a.label.localeCompare(b.label));

  return colorArray;
}

// export const colourOptions: ColourOption[] = [
//   { value: '$blue6', label: 'Blue', color: '#0052CC' },
//   { value: '$purple6', label: 'Purple', color: '#5243AA' },
//   { value: '$red6', label: 'Red', color: '#FF5630' },
//   { value: '$orange6', label: 'Orange', color: '#FF8B00' },
//   { value: '$yellow6', label: 'Yellow', color: '#FFC400' },
//   { value: '$green6', label: 'Green', color: '#36B37E' },
// ];

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    display: 'flex',
    width: 200,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export const CustomThemeSelect = ({
  setCustomTheme,
  customTheme,
  isDarkMode,
}: {
  setCustomTheme: (customTheme: {
    name: string;
    theme: {
      colors: {
        primary: string;
        success: string;
        error: string;
        warning: string;
        info: string;
      };
    };
    isActive: boolean;
  }) => void;
  customTheme: {
    name: string;
    theme: {
      colors: {
        primary: string;
        success: string;
        error: string;
        warning: string;
        info: string;
      };
    };
    isActive: boolean;
  };
  isDarkMode: boolean;
}) => {
  const colourOptions = convertColorsToObject(isDarkMode);
  console.log('colourOptions', colourOptions);

  const SelectKind = ({
    kind,
    defaultValue,
  }: {
    kind: string;
    defaultValue: number;
  }) => {
    const currentValue = colourOptions.find(
      (option) => option.value === customTheme.theme.colors[kind]
    );
    console.log('currentValue', currentValue);
    return (
      <div>
        <Label>{kind}:</Label>
        <Select
          defaultValue={colourOptions[defaultValue]}
          options={colourOptions}
          styles={colourStyles}
          onChange={(e) => changeColor(e as ColourOption, kind)}
          value={currentValue}
        />
      </div>
    );
  };

  const changeColor = (e: ColourOption, kind: string) => {
    // const option = e as ColourOption;
    console.log('e', e);
    setCustomTheme({
      name: customTheme.name,
      theme: { colors: { ...customTheme.theme.colors, [kind]: e.value } },
      isActive: true,
    });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SelectKind kind="primary" defaultValue={1} />
      <SelectKind kind="success" defaultValue={2} />
      <SelectKind kind="error" defaultValue={3} />
      <SelectKind kind="warning" defaultValue={4} />
      <SelectKind kind="info" defaultValue={5} />
    </div>
  );
};

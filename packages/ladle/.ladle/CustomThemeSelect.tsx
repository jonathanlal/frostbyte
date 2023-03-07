import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';
import React from 'react';
import { Label, COLORS_OBJECT, COLORS_OBJECT_DARK } from 'frostbyte';

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

  Object.keys(colors)
    .filter((colorName) => /^\w+\d+$/.test(colorName))
    .forEach((colorName) => {
      const label = colorName.charAt(0).toUpperCase() + colorName.slice(1);

      const hsl = colors[colorName];
      colorArray.push({ value: `$${colorName}`, label, color: hsl });
    });

  colorArray.sort((a, b) => a.label.localeCompare(b.label));

  return colorArray;
}

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
    let backgroundColor, colorValue, activeBackgroundColor, cursor;

    if (isDisabled) {
      backgroundColor = undefined;
      colorValue = '#ccc';
      activeBackgroundColor = undefined;
      cursor = 'not-allowed';
    } else {
      if (isSelected) {
        backgroundColor = data.color;
        colorValue = chroma.contrast(color, 'white') > 2 ? 'white' : 'black';
        activeBackgroundColor = data.color;
      } else if (isFocused) {
        backgroundColor = color.alpha(0.4).css();
        colorValue = data.color;
        activeBackgroundColor = color.alpha(0.7).css();
      } else {
        backgroundColor = undefined;
        colorValue = data.color;
        activeBackgroundColor = undefined;
      }
      cursor = 'default';
    }

    return {
      ...styles,
      backgroundColor,
      color: colorValue,
      cursor,
      ':active': {
        ...styles[':active'],
        backgroundColor: activeBackgroundColor,
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

  const SelectKind = ({ kind }: { kind: string }) => {
    const currentValue = colourOptions.find(
      (option) => option.value === customTheme.theme.colors[kind]
    );

    return (
      <div>
        <Label>{kind}:</Label>
        <Select
          options={colourOptions}
          styles={colourStyles}
          onChange={(e) => changeColor(e as ColourOption, kind)}
          value={currentValue}
        />
      </div>
    );
  };

  const changeColor = (e: ColourOption, kind: string) => {
    setCustomTheme({
      name: customTheme.name,
      theme: { colors: { ...customTheme.theme.colors, [kind]: e.value } },
      isActive: true,
    });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SelectKind kind="primary" />
      <SelectKind kind="success" />
      <SelectKind kind="error" />
      <SelectKind kind="warning" />
      <SelectKind kind="info" />
    </div>
  );
};

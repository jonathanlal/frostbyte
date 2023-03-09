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
  setCustomThemeColors,
  customThemeColors,
  isDarkMode,
  setIsCustomThemeOn,
  isCustomThemeOn,
}: {
  setCustomThemeColors: (customTheme: {
    primary: string;
    success: string;
    error: string;
    warning: string;
    info: string;
  }) => void;
  customThemeColors: {
    primary: string;
    success: string;
    error: string;
    warning: string;
    info: string;
  };
  isDarkMode: boolean;
  setIsCustomThemeOn: (isCustomThemeOn: boolean) => void;
  isCustomThemeOn: boolean;
}) => {
  const colourOptions = convertColorsToObject(isDarkMode);

  const SelectKind = ({ kind }: { kind: string }) => {
    const currentValue = colourOptions.find(
      (option) => option.value === customThemeColors[kind]
    );

    return (
      <div>
        <Label color={kind as keyof typeof COLORS_OBJECT}>{kind}:</Label>
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
    setCustomThemeColors({ ...customThemeColors, [kind]: e.value });
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '20px auto',
          alignItems: 'end',
          gap: '10px',
        }}
      >
        <SelectKind kind="primary" />
        <SelectKind kind="success" />
        <SelectKind kind="error" />
        <SelectKind kind="warning" />
        <SelectKind kind="info" />
        <button
          onClick={() => setIsCustomThemeOn(!isCustomThemeOn)}
          style={{ flexBasis: 'min-content' }}
        >
          active: {isCustomThemeOn.toString()}
        </button>
      </div>
      <hr style={{ marginBottom: '45px' }} />
    </>
  );
};

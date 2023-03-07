import { P, ParagraphProps } from 'components/P';
import { H, HeaderProps } from 'components/H';
import { Label, LabelProps } from 'components/Label';
import { Switch, SwitchProps } from 'components/Switch';
import { styled } from 'utils/getStyles';
import {
  SIZES_ARRAY,
  COLORS_WITHOUT_KINDS_ARRAY,
  COLORS_ARRAY,
  KINDS_ARRAY,
  COLORS_OBJECT,
  COLORS_OBJECT_DARK,
} from 'utils/constants';
import {
  FrostbyteProvider,
  FrostbyteProviderProps,
} from 'utils/FrostbyteProvider';
import { Button, ButtonProps } from 'components/Button';
import { useFrostbyte } from 'hooks/useFrostbyte';
import { brandColors } from 'styles/colors';

export {
  styled,
  P,
  H,
  HeaderProps,
  Label,
  LabelProps,
  Switch,
  SwitchProps,
  useFrostbyte,
  FrostbyteProvider,
  FrostbyteProviderProps,
  ParagraphProps,
  Button,
  ButtonProps,
  SIZES_ARRAY,
  COLORS_WITHOUT_KINDS_ARRAY,
  COLORS_ARRAY,
  KINDS_ARRAY,
  COLORS_OBJECT_DARK,
  COLORS_OBJECT,
  brandColors,
};

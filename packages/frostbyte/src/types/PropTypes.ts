import { LabelProps } from 'components/Label';

type PrefixPropTypes<T, U extends string> = {
  [P in keyof T as `${U}${Capitalize<string & P>}`]: T[P];
};

export type PrefixedLabelProps = PrefixPropTypes<LabelProps, 'label'>;

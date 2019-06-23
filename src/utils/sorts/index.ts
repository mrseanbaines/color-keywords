import { ColorProps } from '../../types';

export const alphabetically = (a: ColorProps, b: ColorProps): number => {
  if (a.keyword > b.keyword) {
    return 1;
  }
  if (a.keyword < b.keyword) {
    return -1;
  }
  return 0;
};

export const byLuminosity = (a: ColorProps, b: ColorProps): number => {
  const getTotal = (color: ColorProps) =>
    color.rgb
      .split(',')
      .reduce((sum: number, value: string) => sum + parseInt(value, 10), 0);

  return getTotal(b) - getTotal(a);
};

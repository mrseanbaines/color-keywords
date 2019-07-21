import { ColorProps, SortFunc } from '../../types';

export const alphabetically: SortFunc = (a, b) => {
  if (a.keyword > b.keyword) {
    return 1;
  }
  if (a.keyword < b.keyword) {
    return -1;
  }
  return 0;
};

export const byLuminosity: SortFunc = (a, b) => {
  const getTotal = (color: ColorProps) =>
    color.rgb
      .split(',')
      .reduce((sum: number, value: string) => sum + parseInt(value, 10), 0);

  return getTotal(b) - getTotal(a);
};

interface Props {
  keyword: string;
  hex: string;
  rgb: string;
}

export const alphabetically = (a: Props, b: Props): number => {
  if (a.keyword > b.keyword) {
    return 1;
  }
  if (a.keyword < b.keyword) {
    return -1;
  }
  return 0;
};

export const byLuminosity = (a: Props, b: Props): number => {
  const getTotal = (color: Props) =>
    color.rgb
      .split(',')
      .reduce((sum: number, value: string) => sum + parseInt(value, 10), 0);

  return getTotal(b) - getTotal(a);
};

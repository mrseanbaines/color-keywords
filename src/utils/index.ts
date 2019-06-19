interface ColorProps {
  keyword: string;
  hex: string;
  rgb: string;
}

export const alphabetically = (a: ColorProps, b: ColorProps) => {
  if (a.keyword > b.keyword) {
    return 1;
  }
  if (a.keyword < b.keyword) {
    return -1;
  }
  return 0;
};

export const byLuminosity = (a: ColorProps, b: ColorProps) => {
  const getTotal = (color: ColorProps) =>
    color.rgb
      .split(',')
      .reduce((sum: number, value: string) => sum + parseInt(value, 10), 0);

  return getTotal(b) - getTotal(a);
};

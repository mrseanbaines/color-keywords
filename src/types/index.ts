export interface ColorProps {
  readonly hex: string;
  readonly keyword: string;
  readonly rgb: string;
}

export type SortFunc = (a: ColorProps, b: ColorProps) => number;

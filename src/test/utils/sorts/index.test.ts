import { ColorProps } from '../../../types';
import { alphabetically, byLuminosity } from '../../../utils/sorts';

const colors: ReadonlyArray<ColorProps> = [
  {
    hex: '#000000',
    keyword: 'black',
    rgb: '0, 0, 0',
  },
  {
    hex: '#ffffff',
    keyword: 'white',
    rgb: '255, 255, 255',
  },
  {
    hex: '#ff0000',
    keyword: 'red',
    rgb: '255, 0, 0',
  },
];

const sortedAlphabetically: ReadonlyArray<ColorProps> = [
  {
    hex: '#000000',
    keyword: 'black',
    rgb: '0, 0, 0',
  },
  {
    hex: '#ff0000',
    keyword: 'red',
    rgb: '255, 0, 0',
  },
  {
    hex: '#ffffff',
    keyword: 'white',
    rgb: '255, 255, 255',
  },
];

const sortedByLuminosity: ReadonlyArray<ColorProps> = [
  {
    hex: '#ffffff',
    keyword: 'white',
    rgb: '255, 255, 255',
  },
  {
    hex: '#ff0000',
    keyword: 'red',
    rgb: '255, 0, 0',
  },
  {
    hex: '#000000',
    keyword: 'black',
    rgb: '0, 0, 0',
  },
];

const equalItems: ReadonlyArray<ColorProps> = [
  {
    hex: '#ffffff',
    keyword: 'white',
    rgb: '255, 255, 255',
  },
  {
    hex: '#ffffff',
    keyword: 'white',
    rgb: '255, 255, 255',
  },
  {
    hex: '#ffffff',
    keyword: 'white',
    rgb: '255, 255, 255',
  },
];

describe('Sorting utilities', () => {
  it('sorts alphabetically', () => {
    expect([...colors].sort(alphabetically)).toEqual(sortedAlphabetically);
  });

  it('sorts by luminosity', () => {
    expect([...colors].sort(byLuminosity)).toEqual(sortedByLuminosity);
  });

  it('handles items of equal value', () => {
    expect([...equalItems].sort(alphabetically)).toEqual(equalItems);
    expect([...equalItems].sort(byLuminosity)).toEqual(equalItems);
  });
});

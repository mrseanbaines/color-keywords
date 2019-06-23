import { shallow } from 'enzyme';
import React from 'react';
import ColorCards from '../../components/ColorCards';
import { ColorProps } from '../../types';

interface Props {
  copyFormat: keyof ColorProps;
  activeSort: (a: ColorProps, b: ColorProps) => number;
  onClick: (value: string) => void;
}

const props: Props = {
  copyFormat: 'rgb',
  activeSort: jest.fn(),
  onClick: jest.fn(),
};

describe('<ColorCards />', () => {
  it('exists', () => {
    const wrapper = shallow(<ColorCards {...props} />);

    expect(wrapper.exists()).toBe(true);
  });
});

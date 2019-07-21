import { shallow } from 'enzyme';
import React from 'react';
import ColorCards from '../../components/ColorCards';
import { ColorProps, SortFunc } from '../../types';

interface Props {
  readonly copyFormat: keyof ColorProps;
  readonly activeSort: SortFunc;
  readonly onClick: (value: string) => void;
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

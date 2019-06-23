import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

interface Props {
  activeSort: string;
  copyFormat: string;
  updateInputValue: (e: any) => void;
}

const props: Props = {
  activeSort: 'alphabetically',
  copyFormat: 'rgb',
  updateInputValue: jest.fn(),
};

describe('<Header />', () => {
  it('exists', () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.exists()).toBe(true);
  });
});

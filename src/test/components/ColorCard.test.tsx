import { shallow } from 'enzyme';
import React from 'react';
import ColorCard from '../../components/ColorCard';
import { ColorProps } from '../../types';

interface Props extends ColorProps {
  copyFormat: keyof ColorProps;
  onClick: (value: string) => void;
}

const mockOnClick = jest.fn();
const mockPreventDefault = jest.fn();

const props: Props = {
  hex: '#000000',
  keyword: 'black',
  rgb: '0, 0, 0',
  copyFormat: 'rgb',
  onClick: mockOnClick,
};

describe('<ColorCard />', () => {
  it('exists', () => {
    const wrapper = shallow(<ColorCard {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('calls onClick when clicked', () => {
    const wrapper = shallow(<ColorCard {...props} />);

    expect(mockOnClick).not.toHaveBeenCalled();

    wrapper.simulate('click');

    expect(mockOnClick).toHaveBeenCalled();

    mockOnClick.mockClear();
  });

  it('calls onClick on Space keydown', () => {
    const wrapper = shallow(<ColorCard {...props} />);

    expect(props.onClick).not.toHaveBeenCalled();

    wrapper.simulate('keypress', {
      key: ' ',
      preventDefault: mockPreventDefault,
    });

    expect(props.onClick).toHaveBeenCalled();

    mockOnClick.mockClear();
  });

  it('calls onClick on Enter keydown', () => {
    const wrapper = shallow(<ColorCard {...props} />);

    expect(props.onClick).not.toHaveBeenCalled();

    wrapper.simulate('keypress', {
      key: 'Enter',
      preventDefault: mockPreventDefault,
    });

    expect(props.onClick).toHaveBeenCalled();

    mockOnClick.mockClear();
  });

  it('doesn\'t call onClick on other keydown', () => {
    const wrapper = shallow(<ColorCard {...props} />);

    expect(props.onClick).not.toHaveBeenCalled();

    wrapper.simulate('keypress', {
      key: 'a',
      preventDefault: mockPreventDefault,
    });

    expect(props.onClick).not.toHaveBeenCalled();

    mockOnClick.mockClear();
  });
});

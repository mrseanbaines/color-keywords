import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  it('exists', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });
});

import { shallow } from 'enzyme';
import React from 'react';
import App from '../../components/App';
import ColorCards from '../../components/ColorCards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ToastNotification from '../../components/ToastNotification';
import GlobalStyles from '../../styles/GlobalStyles';

describe('<App />', () => {
  it('exists', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(ColorCards)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(ToastNotification)).toHaveLength(1);
    expect(wrapper.find(GlobalStyles)).toHaveLength(1);
  });

  it('updates input value', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance() as App;

    expect(instance).toBeInstanceOf(App);

    expect(wrapper.state('activeSort')).toBe('alphabetically');

    instance.updateInputValue({
      target: {
        name: 'activeSort',
        value: 'byLuminosity',
      },
    });

    expect(wrapper.state('activeSort')).toBe('byLuminosity');
  });

  it('sets toast notification state', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance() as App;

    expect(instance).toBeInstanceOf(App);

    expect(wrapper.state('toastNotificationMessage')).toBe('');
    expect(wrapper.state('showToastNotification')).toBe(false);

    instance.showToastNotification('Hello world!');

    expect(wrapper.state('toastNotificationMessage')).toBe('Hello world!');
    expect(wrapper.state('showToastNotification')).toBe(true);
  });
});

import { shallow, render } from 'enzyme';
import React from 'react';
import ToastNotification from '../../components/ToastNotification';

interface Props {
  show?: boolean;
  message: string;
}

const props: Props = {
  show: true,
  message: 'Hello world!',
};

describe('<ToastNotification />', () => {
  it('exists', () => {
    const wrapper = shallow(<ToastNotification {...props} />);

    expect(wrapper.exists()).toBe(true);

    wrapper.unmount();
  });

  it('creates notification DOM element on mount', () => {
    const notificationRoot = document.getElementById('notification-root');

    expect(notificationRoot.children.length).toBe(0);

    const wrapper = shallow(<ToastNotification {...props} />);

    expect(notificationRoot.children.length).toBe(1);

    wrapper.unmount();
  });

  it('removes notification DOM element on unmount', () => {
    const wrapper = shallow(<ToastNotification {...props} />);
    const notificationRoot = document.getElementById('notification-root');

    expect(notificationRoot.children.length).toBe(1);

    wrapper.unmount();

    expect(notificationRoot.children.length).toBe(0);
  });
});

import { shallow } from 'enzyme';
import React from 'react';
import ToastNotification from '../../components/ToastNotification';

interface Props {
  readonly show?: boolean;
  readonly message: string;
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
    const existingNotificationRoot: HTMLElement | null = document.getElementById(
      'notification-root',
    );

    let notificationRoot: HTMLElement;

    if (existingNotificationRoot) {
      notificationRoot = existingNotificationRoot;
    } else {
      notificationRoot = document.createElement('div');
      notificationRoot.setAttribute('id', 'notification-root');
      document.body.appendChild(notificationRoot);
    }

    expect(notificationRoot.children.length).toBe(0);

    const wrapper = shallow(<ToastNotification {...props} />);

    expect(notificationRoot.children.length).toBe(1);

    wrapper.unmount();
  });

  it('removes notification DOM element on unmount', () => {
    const wrapper = shallow(<ToastNotification {...props} />);
    const existingNotificationRoot: HTMLElement | null = document.getElementById(
      'notification-root',
    );

    let notificationRoot: HTMLElement;

    if (existingNotificationRoot) {
      notificationRoot = existingNotificationRoot;
    } else {
      notificationRoot = document.createElement('div');
      notificationRoot.setAttribute('id', 'notification-root');
      document.body.appendChild(notificationRoot);
    }

    expect(notificationRoot.children.length).toBe(1);

    wrapper.unmount();

    expect(notificationRoot.children.length).toBe(0);
  });
});

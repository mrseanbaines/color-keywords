import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { ToastNotificationWrapper } from '../styles/ToastNotification';

const notificationRoot = document.getElementById('notification-root');

interface ToastNotificationProps {
  show: boolean;
  message: string;
}

export default class extends PureComponent<ToastNotificationProps> {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount() {
    notificationRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    notificationRoot.removeChild(this.el);
  }

  render() {
    const { show, message } = this.props;

    return ReactDOM.createPortal(
      <ToastNotificationWrapper show={show}>
        {message}
      </ToastNotificationWrapper>,
      this.el,
    );
  }
}

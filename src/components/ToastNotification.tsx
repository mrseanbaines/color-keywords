import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { ToastNotificationWrapper } from '../styles/ToastNotification';

const notificationRoot = document.getElementById('notification-root');

interface Props {
  show?: boolean;
  message: string;
}

export default class extends PureComponent<Props> {
  private el: HTMLElement;

  constructor(props: Props) {
    super(props);

    this.el = document.createElement('div');
  }

  public componentDidMount() {
    notificationRoot.appendChild(this.el);
  }

  public componentWillUnmount() {
    notificationRoot.removeChild(this.el);
  }

  public render() {
    const { show, message } = this.props;

    return ReactDOM.createPortal(
      <ToastNotificationWrapper show={show}>
        {message}
      </ToastNotificationWrapper>,
      this.el,
    );
  }
}

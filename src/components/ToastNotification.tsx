import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { ToastNotificationWrapper } from '../styles/ToastNotification';

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

interface Props {
  readonly show?: boolean;
  readonly message: string;
}

export default class extends PureComponent<Props> {
  private el: HTMLElement;

  constructor(props: Props) {
    super(props);

    this.el = document.createElement('div');
  }

  public componentDidMount(): void {
    notificationRoot.appendChild(this.el);
  }

  public componentWillUnmount(): void {
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

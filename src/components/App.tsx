import React, { PureComponent } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { ColorProps } from '../types';
import { alphabetically, byLuminosity } from '../utils/sorts';
import ColorCards from './ColorCards';
import Footer from './Footer';
import Header from './Header';
import ToastNotification from './ToastNotification';

interface SortProps {
  readonly alphabetically: (a: ColorProps, b: ColorProps) => number;
  readonly byLuminosity: (a: ColorProps, b: ColorProps) => number;
}

const sorts: SortProps = {
  alphabetically,
  byLuminosity,
};

interface State {
  readonly activeSort: keyof SortProps;
  readonly copyFormat: keyof ColorProps;
  readonly showToastNotification: boolean;
  readonly toastNotificationMessage: string;
}

export default class extends PureComponent<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      activeSort: 'alphabetically',
      copyFormat: 'keyword',
      showToastNotification: false,
      toastNotificationMessage: '',
    };
  }

  public updateInputValue = (e: any): void => {
    interface Target {
      readonly value: string;
      readonly name: 'activeSort' | 'copyFormat';
    }

    const { value, name }: Target = e.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  public copyToClipboard = (value: string): void => {
    const copyTextarea: HTMLTextAreaElement = document.createElement(
      'textarea',
    );
    copyTextarea.value = value;
    copyTextarea.style.position = 'fixed';
    copyTextarea.style.opacity = '0';
    copyTextarea.style.pointerEvents = 'none';
    document.body.appendChild(copyTextarea);
    copyTextarea.focus();
    copyTextarea.setSelectionRange(0, value.length);

    try {
      document.execCommand('copy');

      this.showToastNotification(`Successfully copied ${value} to clipboard!`);
    } catch (err) {
      throw new Error(err);
    } finally {
      copyTextarea.remove();
    }
  };

  public showToastNotification = async (message: string) => {
    const delay = (ms: number) =>
      new Promise(resolve => setTimeout(resolve, ms));

    await this.setState({
      showToastNotification: true,
      toastNotificationMessage: message,
    });

    await delay(2000);

    await this.setState({
      showToastNotification: false,
    });

    await delay(300);

    this.setState({
      toastNotificationMessage: '',
    });
  };

  public render() {
    const {
      showToastNotification,
      toastNotificationMessage,
      activeSort,
      copyFormat,
    } = this.state;

    return (
      <>
        <GlobalStyles />
        <Header
          updateInputValue={this.updateInputValue}
          activeSort={activeSort}
          copyFormat={copyFormat}
        />
        <ColorCards
          activeSort={sorts[activeSort]}
          onClick={this.copyToClipboard}
          copyFormat={copyFormat}
        />
        <Footer />
        <ToastNotification
          show={showToastNotification}
          message={toastNotificationMessage}
        />
      </>
    );
  }
}

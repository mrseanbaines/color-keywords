import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import ColorCards from './components/ColorCards';
import Header from './components/Header';
import ToastNotification from './components/ToastNotification';
import { alphabetically, byLuminosity } from './utils/sorts';

const sorts: any = {
  alphabetically,
  byLuminosity,
};

interface State {
  activeSort: string;
  copyFormat: string;
  showToastNotification: boolean;
  toastNotificationMessage: string;
}

class Index extends PureComponent<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      activeSort: 'alphabetically',
      copyFormat: 'keyword',
      showToastNotification: false,
      toastNotificationMessage: '',
    };
  }

  updateInputValue = (e: any) => {
    interface Target {
      value: string;
      name: string;
    }

    const { value, name }: Target = e.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  copyToClipboard = (value: string) => {
    const copyTextarea = document.createElement('textarea');
    copyTextarea.value = value;
    copyTextarea.style.position = 'fixed';
    copyTextarea.style.opacity = '0';
    copyTextarea.style.width = '0';
    copyTextarea.style.height = '0';
    copyTextarea.style.pointerEvents = 'none';
    document.body.appendChild(copyTextarea);
    copyTextarea.focus();
    copyTextarea.select();

    try {
      document.execCommand('copy');

      this.showToastNotification(`Successfully copied ${value} to clipboard!`);
    } catch (err) {
      throw new Error(err);
    } finally {
      copyTextarea.remove();
    }
  };

  showToastNotification = async (message: string) => {
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

  render() {
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
        <ToastNotification
          show={showToastNotification}
          message={toastNotificationMessage}
        />
      </>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root') as HTMLElement);

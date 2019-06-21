import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import ColorCards from './components/ColorCards';
import Header from './components/Header';
import ToastNotification from './components/ToastNotification';
import * as sorts from './utils/sorts';

class Index extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeSort: sorts.alphabetically,
      showToastNotification: false,
      toastNotificationMessage: '',
    };
  }

  updateActiveSort = (e: any) => {
    const { value } = e.target;

    this.setState({ activeSort: sorts[value] });
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
      activeSort,
      showToastNotification,
      toastNotificationMessage,
    } = this.state;

    return (
      <>
        <GlobalStyles />
        <Header updateActiveSort={this.updateActiveSort} />
        <ColorCards activeSort={activeSort} onClick={this.copyToClipboard} />
        <ToastNotification
          show={showToastNotification}
          message={toastNotificationMessage}
        />
      </>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

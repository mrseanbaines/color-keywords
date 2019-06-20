import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import ColorCards from './components/ColorCards';
import Header from './components/Header';
import * as sorts from './utils/sorts';
import { copyToClipboard } from './utils';

class Index extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeSort: sorts.alphabetically,
    };
  }

  updateActiveSort = (e: any) => {
    const { value } = e.target;

    this.setState({ activeSort: sorts[value] });
  };

  render() {
    const { activeSort } = this.state;

    return (
      <>
        <GlobalStyles />
        <Header updateActiveSort={this.updateActiveSort} />
        <ColorCards activeSort={activeSort} onClick={copyToClipboard} />
      </>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

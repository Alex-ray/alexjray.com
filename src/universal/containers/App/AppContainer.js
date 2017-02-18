import React, {Component, PropTypes} from 'react';
import App from 'universal/components/App/App.js';

class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  render () {
    return (
      <App {...this.props}/>
    );
  }
}

export default AppContainer;

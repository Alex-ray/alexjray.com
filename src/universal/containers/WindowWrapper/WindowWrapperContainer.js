// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';


// Ducks
import {
  setScroll,
  setMouse,
  setWindowDimensions,
  setGyro
} from 'universal/ducks/Window.js';

// Components
import WindowWrapper from 'universal/Components/WindowWrapper/WindowWrapper.js';

@connect(mapStateToProps, mapDispatchToProps)
class WindowWrapperContainer extends Component {
  static propTypes = {
    handleScroll: PropTypes.func.isRequired,
    handleOnMouseMove: PropTypes.func.isRequired,
    handleWindowDimensions: PropTypes.func.isRequired,
    handleGyro: PropTypes.func.isRequired
  };

  render () {
    return (<WindowWrapper {...this.props} />);
  }
}


function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatcher) {
  return {
    handleScroll: setScroll(dispatcher),
    handleOnMouseMove: setMouse(dispatcher),
    handleWindowDimensions: setWindowDimensions(dispatcher),
    handleGyro: setGyro(dispatcher)
  };
}
export default WindowWrapperContainer;

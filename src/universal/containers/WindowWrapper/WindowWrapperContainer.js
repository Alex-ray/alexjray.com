// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';


// Ducks
import {
  setScroll,
  setMouse,
  setWindowDimensions
} from 'universal/ducks/Window.js';

// Components
import WindowWrapper from 'universal/Components/WindowWrapper/WindowWrapper.js';

@connect(mapStateToProps, mapDispatchToProps)
class WindowWrapperContainer extends Component {
  static propTypes = {
    handleScroll: PropTypes.func.isRequired,
    handleOnMouseMove: PropTypes.func.isRequired,
    handleWindowDimensions: PropTypes.func.isRequired
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
    handleWindowDimensions: setWindowDimensions(dispatcher)
  };
}
export default WindowWrapperContainer;

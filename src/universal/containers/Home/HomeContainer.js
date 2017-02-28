// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';

// Components
import Home from 'universal/components/Home/Home.js';

// Ducks
import {
  setScrollOffsets
} from 'universal/ducks/Window.js';

@connect(mapStateToProps, mapDispatchToProps)
class HomeContainer extends Component {
  static propTypes = {};

  render () {
    return (
      <Home  />
    );
  }
};

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default HomeContainer;

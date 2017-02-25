// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';

// Components
import Home from 'universal/components/Home/Home.js';

// Ducks
import {
  setScrollOffsets
} from 'universal/ducks/Scroll.js';


@connect(mapStateToProps, mapDispatchToProps)
class HomeContainer extends Component {
  static propTypes = {
    setScrollOffsets: PropTypes.func.isRequired,
  };

  render () {
    const {
      setScrollOffsets,
    } = this.props;

    return (
      <Home setScrollOffsets={setScrollOffsets} />
    );
  }
};

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    setScrollOffsets: setScrollOffsets(dispatch)
  };
}

export default HomeContainer;

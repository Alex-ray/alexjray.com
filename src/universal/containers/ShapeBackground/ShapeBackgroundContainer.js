// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';

// Components
import ShapeBackground from 'universal/components/ShapeBackground/ShapeBackground.js';


@connect(mapStateToProps)
class ShapeBackgroundContainer extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    scrollHeight: PropTypes.number,
    scrollWidth: PropTypes.number
  };

  render () {
    const {
      x,
      y,
      scrollHeight,
      scrollWidth
    } = this.props;

    return (<ShapeBackground offset={{x: x, y: y}} scrollHeight={scrollHeight} scrollWidth={scrollWidth}/>);
  }
};

function mapStateToProps (state) {
  let offset = state.getIn(['scroll', 'offsets']).toJS();
  return {
    scrollHeight: state.getIn(['scroll', 'scrollHeight']),
    scrollWidth: state.getIn(['scroll', 'scrollWidth']),
    x: offset.x,
    y: offset.y
  };
}

export default ShapeBackgroundContainer;

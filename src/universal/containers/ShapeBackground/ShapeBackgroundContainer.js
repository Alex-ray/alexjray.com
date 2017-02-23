// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';

// Components
import ShapeBackground from 'universal/components/ShapeBackground/ShapeBackground.js';

// Ducks
import {
  setShapes
} from 'universal/ducks/ShapeBackground.js';


@connect(mapStateToProps, mapDispatchToProps)
class ShapeBackgroundContainer extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    scrollHeight: PropTypes.number,
    scrollWidth: PropTypes.number,
    setShapes: PropTypes.func.isRequired
  };

  render () {
    const {
      x,
      y,
      scrollHeight,
      scrollWidth,
      shapes
    } = this.props;

    return (<ShapeBackground shapes={shapes} offset={{x: x, y: y}} scrollWidth={scrollWidth} scrollHeight={scrollHeight} />);
  }

  componentDidUpdate (prevProps) {
    const {
      scrollHeight,
      scrollWidth,
      setShapes
    } = this.props;

    let updateHeight = (scrollHeight !== 0 && scrollHeight !== prevProps.scrollHeight);
    let updateWidth  = (scrollWidth !== 0 && scrollWidth !== prevProps.scrollWidth);

    if (updateHeight || updateWidth) {
      setShapes(30, scrollWidth, scrollHeight);
    }

  }
};

function mapDispatchToProps(dispatch) {
  return {
    setShapes: setShapes(dispatch)
  };
}

function mapStateToProps (state) {
  let offset = state.getIn(['scroll', 'offsets']).toJS();
  let shapes = state.getIn(['shapeBackground', 'shapes']).toJS();
  return {
    scrollHeight: state.getIn(['scroll', 'scrollHeight']),
    scrollWidth: state.getIn(['scroll', 'scrollWidth']),
    shapes: shapes,
    x: offset.x,
    y: offset.y
  };
}

export default ShapeBackgroundContainer;

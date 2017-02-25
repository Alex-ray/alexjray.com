// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';

// Components
import ShapeBackground from 'universal/components/ShapeBackground/ShapeBackground.js';

// Ducks
import {
  setShapes,
  setShapeDimensions
} from 'universal/ducks/ShapeBackground.js';

const REF_SHAPE_BACKGROUND = 'REF_SHAPE_BACKGROUND';


@connect(mapStateToProps, mapDispatchToProps)
class ShapeBackgroundContainer extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
    // Actions
    setShapes: PropTypes.func.isRequired,
    setDimensions: PropTypes.func.isRequired
  };

  render () {
    const {
      x,
      y,
      height,
      width,
      shapes,
      setDimensions
    } = this.props;

    return (<ShapeBackground setDimensions={setDimensions} shapes={shapes} offset={{x: x, y: y}} scrollWidth={width} scrollHeight={height} />);
  }

  componentDidUpdate (prevProps) {
    const {
      height,
      width,
      setShapes
    } = this.props;

    let updateHeight = (height !== 0 && height !== prevProps.height);
    let updateWidth  = (width !== 0 && width !== prevProps.width);


    if (updateHeight || updateWidth) {
      setShapes(15, width, height);
    }

  }
};

function mapDispatchToProps(dispatch) {
  return {
    setShapes: setShapes(dispatch),
    setDimensions: setShapeDimensions(dispatch)
  };
}

function mapStateToProps (state) {
  let offset = state.getIn(['scroll', 'offsets']).toJS();
  let shapes = state.getIn(['shapeBackground', 'shapes']).toJS();
  return {
    height: state.getIn(['shapeBackground', 'height']),
    width: state.getIn(['shapeBackground', 'width']),
    shapes: shapes,
    x: offset.x,
    y: offset.y
  };
}

export default ShapeBackgroundContainer;

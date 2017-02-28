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
      setDimensions,
      shapeOffset
    } = this.props;

    return (<ShapeBackground setDimensions={setDimensions} shapes={shapes} offset={{x: x, y: y}} scrollWidth={width} scrollHeight={height} shapeOffset={shapeOffset}/>);
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
      setShapes(width, height);
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
  let offset = state.getIn(['window', 'scroll', 'offsets']).toJS();
  let shapes = state.getIn(['shapeBackground', 'shapes']).toJS();

  let mouseOffset  = state.getIn(['window', 'mouse', 'offsets']).toJS();
  let windowWidth  = state.getIn(['window', 'width']);
  let windowHeight = state.getIn(['window', 'height']);

  let gyro  = state.getIn(['window', 'gyro']).toJS();
  let xRatio = 0;
  let yRatio = 0;

  if (gyro.tiltX && gyro.tiltY) {
    let center = {x: 180/2, y: 360/2};

    xRatio = ((gyro.tiltX - center.x)/center.x);
    yRatio = ((gyro.tiltY - center.y)/center.y);
  } else {
    let center = {x: windowWidth/2, y: windowHeight/2};

    xRatio = ((mouseOffset.x - center.x)/center.x);
    yRatio = ((mouseOffset.y - center.y)/center.y);
  }

  const shapeOffset = {x: xRatio*10, y: yRatio*10};

  return {
    height: state.getIn(['shapeBackground', 'height']),
    width: state.getIn(['shapeBackground', 'width']),
    shapes: shapes,
    shapeOffset: shapeOffset,
    x: offset.x,
    y: offset.y
  };
}

export default ShapeBackgroundContainer;

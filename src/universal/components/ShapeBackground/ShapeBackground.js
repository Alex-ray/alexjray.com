// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import Shape from 'universal/components/Shape/Shape.js';

// Styles
import {container} from './ShapeBackground.less';


const REF_SHAPE_BACKGROUND = 'REF_SHAPE_BACKGROUND';


class ShapeBackground extends Component {
  static propTypes = {
    offset: PropTypes.object,
    shapes: PropTypes.array,
    scrollHeight: PropTypes.number,
    scrollWidth: PropTypes.number,
    setDimensions: PropTypes.func
  };

  render () {

    const {
      shapes,
      scrollHeight,
      shapeOffset,
      offset: {
        x,
        y
      }
    } = this.props;
    // max pixel offset 20

    let ratio = (y/scrollHeight);
    let diff  =  ratio * 150;

    let shapeEls = [];

    for (var i = 0; i < shapes.length; i++) {
      let {
        type,
        color,
        degree,
        coordinates: {
          x,
          y
        }
      } = shapes[i];

      shapeEls.push((<Shape key={i} type={type} x={x} y={y} color={color} degree={degree} />));
    }

    let styles = {
      'transform': `translate3d(${shapeOffset.x}px, ${shapeOffset.y+diff}px, 0)`
    };

    return (
      <div ref={this.setRef(REF_SHAPE_BACKGROUND)} className={container} style={styles}>
        {shapeEls}
      </div>
    );
  }

  setRef (key) {
    return (ref) => {
      this[key] = ref;
    };
  }

  componentDidMount () {
    let el = this[REF_SHAPE_BACKGROUND];
    this.props.setDimensions(el.clientWidth, el.clientHeight);
  }


}

export default ShapeBackground;

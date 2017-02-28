// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';

// Components
import Footer from 'universal/components/Footer/Footer.js';

// Ducks
import {
  setVisibility,
  setDimensions
} from 'universal/ducks/Footer.js';


@connect(mapStateToProps, mapDispatchToProps)
class FooterContainer extends Component {
  static propTypes = {
    setDimensions: PropTypes.func.isRequired,
    setVisibility: PropTypes.func.isRequired
  };

  render () {
    return (
      <Footer {...this.props}/>
    );
  }

  componentDidUpdate(prevProps) {
    const {
      height,
      topOffset,
      scrollYOffset,
      visible,
      setVisibility
    } = this.props;

    let clientBottomPosition = height + scrollYOffset ;
    let isInView = (clientBottomPosition >= topOffset+50);

    if (visible !== isInView) {
      setVisibility(visible);
    }
  }
};

function mapStateToProps (state) {
  let height    = state.getIn(['footer', 'height']);
  let topOffset = state.getIn(['footer', 'offset', 'top']);

  let scrollYOffset = state.getIn(['window', 'scroll', 'offsets', 'y']);

  let isVisible = state.getIn(['footer', 'visible']);

  return {
    height: height,
    isVisible: isVisible,
    topOffset: topOffset,
    scrollYOffset: scrollYOffset
  };
}

function mapDispatchToProps (dispatch) {
  return {
    setDimensions: setDimensions(dispatch),
    setVisibility: setVisibility(dispatch)
  };
}

export default FooterContainer;

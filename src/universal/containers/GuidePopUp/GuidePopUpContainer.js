// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';

// Components
import GuidePopUp from 'universal/components/GuidePopUp/GuidePopUp.js';

// Ducks
import {
  closeGuidePopUp
} from 'universal/ducks/GuidePopUp.js';


@connect(mapStateToProps, mapDispatchToProps)
class GuidePopUpContainer extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    open: PropTypes.bool.isRequired,
    closeGuide: PropTypes.func.isRequired
  };

  render () {
    const {
      open,
      x,
      y,
      closeGuide,
    } = this.props;

    return (
      <GuidePopUp
      open={open}
      handleClose={closeGuide} />
    );
  }
};

function mapStateToProps (state) {
  return {
    open: state.getIn(['guidePopUp', 'open'])
  };
}

function mapDispatchToProps (dispatch) {
  return {
    closeGuide: closeGuidePopUp(dispatch)
  };
}

export default GuidePopUpContainer;

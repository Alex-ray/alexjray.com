// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';


// Components
import Header from 'universal/components/Header/Header.js';

// Ducks
import {
  openGuidePopUp
} from 'universal/ducks/GuidePopUp.js';


@connect(mapStateToProps, mapDispatchToProps)
class HeaderContainer extends Component {
  static propTypes = {
    hideGuide: PropTypes.bool,
    fixed: PropTypes.bool,
    openGuide: PropTypes.func.isRequired
  };

  render () {
    const {
      openGuide,
      hideGuide,
      fixed
    } = this.props;

    return (
      <Header handleOpenGuide={openGuide} fixed={fixed} hideGuide={hideGuide}/>
    );
  }
};

function mapStateToProps (state, ownProps) {
  let footerVisible = state.getIn(['footer', 'visible']);
  let hideGuide = (footerVisible && ownProps.fixed);

  return {
    fixed: ownProps.fixed,
    hideGuide: hideGuide
  };
}

function mapDispatchToProps (dispatch) {
  return {
    openGuide: openGuidePopUp(dispatch)
  };
}

export default HeaderContainer;

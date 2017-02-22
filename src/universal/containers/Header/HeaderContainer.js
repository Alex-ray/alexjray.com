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
    fixed: PropTypes.bool,
    openGuide: PropTypes.func.isRequired
  };

  render () {
    const {
      openGuide
    } = this.props;

    return (
      <Header handleOpenGuide={openGuide} />
    );
  }
};

function mapStateToProps (state, ownProps) {
  console.log('mapStateToProps ownProps', ownProps);
  return {
    fixed: ownProps.fixed
  };
}

function mapDispatchToProps (dispatch) {
  return {
    openGuide: openGuidePopUp(dispatch)
  };
}

export default HeaderContainer;

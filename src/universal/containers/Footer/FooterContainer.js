// Libraries
import React, {Component, PropTypes} from 'react';

// Decorators
import {connect} from 'react-redux';

// Components
import Footer from 'universal/components/Footer/Footer.js';

// Ducks
import {
  setVisibility
} from 'universal/ducks/Footer.js';


@connect(mapStateToProps, mapDispatchToProps)
class FooterContainer extends Component {
  static propTypes = {
    setScrollState: PropTypes.func.isRequired
  };

  render () {
    const {
      enableScrollListener,
      setScrollState
    } = this.props;

    return (
      <Footer
        enableScrollListener={enableScrollListener}
        setScrollState={setScrollState} />
    );
  }
};

function mapStateToProps (state, ownProps) {
  return {
    enableScrollListener: ownProps.enableScrollListener,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    setScrollState: setVisibility(dispatch)
  };
}

export default FooterContainer;

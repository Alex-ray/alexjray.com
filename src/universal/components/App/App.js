import React, {Component, PropTypes} from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Containers
import WindowWrapperContainer from 'universal/containers/WindowWrapper/WindowWrapperContainer.js'

// Styles
import {
  enter,
  enterActive,
  leave,
  leaveActive,
  appear,
  appearActive
} from 'universal/styles/animations.less';

class App extends Component {
  render () {
    const {
      children,
      location
    } = this.props;

    return (
      <WindowWrapperContainer>
        <ReactCSSTransitionGroup
           component="div"
            transitionName={ {
              enter: enter,
              enterActive: enterActive,
              leave: leave,
              leaveActive: leaveActive,
              appear: appear,
              appearActive: appearActive
            } }
           transitionEnterTimeout={500}
           transitionLeaveTimeout={500}
         >
           {React.cloneElement(children, {
             key: location.pathname
           })}
         </ReactCSSTransitionGroup>
      </WindowWrapperContainer>
    );
  }
}

export default App;

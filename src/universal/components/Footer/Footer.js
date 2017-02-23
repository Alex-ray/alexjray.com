// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// Components
import TableOfContents from 'universal/components/TableOfContents/TableOfContents.js';
import FootNotes       from 'universal/components/FootNotes/FootNotes.js';
import ScrollWrapper   from 'universal/components/ScrollWrapper/ScrollWrapper.js';

// Styles
import {
  fullScreen,
  centerContent
} from 'universal/styles/layout.less';

import {
  container,
  copyRight
} from './footer.less';

function cacheRef (_this, name) {
  return (ref) => {
    _this[name] = ref;
  };
}

const CONTAINER_EL = 'CONTAINER_EL';

class Footer extends Component {
  static propTypes = {
    enableScrollListener: PropTypes.bool,
    setScrollState: PropTypes.func.isRequired
  };

  handleScroll = (event, y, x) => {
    const {
      setScrollState
    } = this.props;

    if (!this[CONTAINER_EL]) return false;

    let clientHeight = this[CONTAINER_EL].clientHeight;
    let offsetTop    = this[CONTAINER_EL].offsetTop + 50;
    let clientBottomPosition = clientHeight + y ;
    let isInView = (clientBottomPosition >= offsetTop);

    setScrollState(isInView);
  }

  render () {
    const {
      enableScrollListener
    } = this.props;

    const onWindowScroll = enableScrollListener ? this.handleScroll : null;

    return (
      <ScrollWrapper onWindowScroll={onWindowScroll}>
        <div ref={cacheRef(this, CONTAINER_EL) } className={classNames(container, fullScreen, centerContent)}>
          <TableOfContents />
          <FootNotes />
        </div>
      </ScrollWrapper>
    );
  }
}

export default Footer;

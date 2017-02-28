// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// Components
import TableOfContents from 'universal/components/TableOfContents/TableOfContents.js';
import FootNotes       from 'universal/components/FootNotes/FootNotes.js';

// Styles
import {
  fullScreen,
  centerContent
} from 'universal/styles/layout.less';

import {
  container
} from './footer.less';


// TODO: Abstract out into component utility
function cacheRef (_this, name) {
  return (ref) => {
    _this[name] = ref;
  };
}

const CONTAINER_EL = 'CONTAINER_EL';

class Footer extends Component {
  static propTypes = {};

  componentDidMount ( ) {
    let clientHeight = this[CONTAINER_EL].clientHeight;
    let clientWidth  = this[CONTAINER_EL].clientWidth;
    let offsetTop    = this[CONTAINER_EL].offsetTop;

    this.props.setDimensions({
      height: clientHeight,
      width: clientWidth,
      offset: {
        top: offsetTop
      }
    });
  }

  render () {
    return (
      <div ref={cacheRef(this, CONTAINER_EL) } className={classNames(container, fullScreen, centerContent)}>
        <TableOfContents />
        <FootNotes />
      </div>
    );
  }
}

export default Footer;

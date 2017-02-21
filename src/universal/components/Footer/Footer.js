// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// Components
import TableOfContents from 'universal/components/TableOfContents/TableOfContents.js';

// Styles
import {
  fullScreen,
  centerContent
} from 'universal/styles/layout.less';

import {
  container
} from './footer.less';

class Footer extends Component {
  render () {
    return (
      <div className={classNames(container, fullScreen, centerContent)}>
        <TableOfContents />
      </div>
    );
  }
}

export default Footer;

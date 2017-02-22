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
  container,
  copyRight
} from './footer.less';

class Footer extends Component {
  render () {
    return (
      <div className={classNames(container, fullScreen, centerContent)}>
        <TableOfContents />
        <FootNotes />
      </div>
    );
  }
}

export default Footer;

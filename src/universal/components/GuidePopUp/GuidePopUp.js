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
  container,
  popUpOpen,
  popUpClosed,
  closeLink
} from './guide-pop-up.less';

class GuidePopUp extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func
  };

  render () {
    const {
      open,
      handleClose
    } = this.props;

    let containerClassOptions = {
      [popUpOpen]  : open === true,
      [popUpClosed]: open !== true
    };

    return (
      <aside className={classNames(container, fullScreen, centerContent, containerClassOptions)}>
        <a className={closeLink} href="#" onClick={handleClose} >Close</a>
        <TableOfContents />
      </aside>
    );
  }
}

export default GuidePopUp;

import React, {Component, PropTypes} from 'react';
import GuideLink from 'universal/components/GuideLink/GuideLink.js';
import classNames from 'classnames';

import {
  container,
  fixedContainer,
  link
} from './header.less';

class Header extends Component {
  static propTypes = {
    fixed: PropTypes.bool,
    handleOpenGuide: PropTypes.func.isRequired
  };

  render () {
    const {
      fixed,
      handleOpenGuide
    } = this.props;

    return (
      <header className={classNames(container, {[fixedContainer]: fixed})}>
        <a className={link} href='/'>Alexander James Ray</a>
        <GuideLink handleClick={handleOpenGuide} className={link} />
      </header>
    );
  }
}

export default Header;

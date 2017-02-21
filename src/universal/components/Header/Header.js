import React, {Component, PropTypes} from 'react';
import GuideLink from 'universal/components/GuideLink/GuideLink.js';

import {
  container,
  link
} from './header.less';

class Header extends Component {
  static propTypes = {
    handleOpenGuide: PropTypes.func.isRequired
  };

  render () {
    const {
      handleOpenGuide
    } = this.props;

    return (
      <header className={container}>
        <a className={link} href='/'>Alexander James Ray</a>
        <GuideLink handleClick={handleOpenGuide} className={link} />
      </header>
    );
  }
}

export default Header;

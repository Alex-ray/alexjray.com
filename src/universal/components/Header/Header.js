import React, {Component, PropTypes} from 'react';
import MenuLink from 'universal/components/MenuLink/MenuLink.js';

import {
  container,
  link
} from './header.less';

class Header extends Component {
  render () {
    return (
      <header className={container}>
        <a className={link} href='/'>Alexander J Ray</a>
        <MenuLink className={link} />
      </header>
    );
  }
}

export default Header;

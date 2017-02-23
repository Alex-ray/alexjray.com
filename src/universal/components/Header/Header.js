// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

// Components
import GuideLink from 'universal/components/GuideLink/GuideLink.js';

// Styles
import {
  container,
  fixedContainer,
  hideLink,
  headerLink,
  headerNameLink
} from './header.less';

class Header extends Component {
  static propTypes = {
    hideGuide: PropTypes.bool,
    fixed: PropTypes.bool,
    handleOpenGuide: PropTypes.func.isRequired
  };

  render () {
    const {
      fixed,
      hideGuide,
      handleOpenGuide
    } = this.props;

    let classOptions = {
      [fixedContainer]: fixed
    };

    let guideClassOptions = {
      [hideLink]: hideGuide
    };

    return (
      <header className={classNames(container, classOptions)}>
        <Link className={headerNameLink} to='/'>Alexander James Ray</Link>
        <GuideLink hide={hideGuide} handleClick={handleOpenGuide} className={classNames(headerLink, guideClassOptions)} />
      </header>
    );
  }
}

export default Header;

// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// Containers
import HeaderContainer     from 'universal/containers/Header/HeaderContainer.js';
import GuidePopUpContainer from 'universal/containers/GuidePopUp/GuidePopUpContainer.js';

// Components
import HeaderSpinner   from 'universal/components/HeaderSpinner/HeaderSpinner.js';
import ShapeBackground from 'universal/components/ShapeBackground/ShapeBackground.js';

import Footer from 'universal/components/Footer/Footer.js';

import Logo from 'universal/components/Logo/Logo.js';

// Styles

import {
  shapeBackgroundContainer,
  shapeBackgroundContent
} from 'universal/components/ShapeBackground/ShapeBackground.less';

import {
  fullScreen,
  centerContent
} from 'universal/styles/layout.less';

import {
  largeHeader
} from 'universal/styles/typography.less';

const TITLES = [
  'Web Developer',
  'Design Nerd',
  'Rock Climber',
  'Friend',
  'Snowboarder',
  'Environmentalist',
  'Digtal Nomad',
  'Artist',
  'Dreamer'
];

class Home extends Component {
  render () {
    return (
      <div>
        <div className={shapeBackgroundContainer}>
          <div className={shapeBackgroundContent}>
            <HeaderContainer />
            <div onClick={this.handleClick} className={classNames(fullScreen, centerContent)}>
              <HeaderSpinner titles={TITLES} />
              <Logo />
            </div>
          </div>

          <ShapeBackground />

        </div>

        <Footer />
        <GuidePopUpContainer />
      </div>
    );
  }
}


export default Home;

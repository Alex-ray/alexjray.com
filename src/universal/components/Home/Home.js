// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// Components
import Header from 'universal/components/Header/Header.js';
import HeaderSpinner from 'universal/components/HeaderSpinner/HeaderSpinner.js';

import Footer from 'universal/components/Footer/Footer.js';

// Styles
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
        <Header />
        <div className={classNames(fullScreen, centerContent)}>
          <HeaderSpinner titles={TITLES} />
        </div>
        <Footer />
      </div>
    );
  }
}


export default Home;

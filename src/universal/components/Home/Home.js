// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// Containers
import HeaderContainer          from 'universal/containers/Header/HeaderContainer.js';
import GuidePopUpContainer      from 'universal/containers/GuidePopUp/GuidePopUpContainer.js';
import ShapeBackgroundContainer from 'universal/containers/ShapeBackground/ShapeBackgroundContainer.js';
import FooterContainer          from 'universal/containers/Footer/FooterContainer.js';

// Components
import HeaderSpinner   from 'universal/components/HeaderSpinner/HeaderSpinner.js';
import ScrollWrapper   from 'universal/components/ScrollWrapper/ScrollWrapper.js';

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
  'Rock Climber',
  'Design Nerd',
  'Environmentalist',
  'Digital Nomad',
  'Engineer',
  'Artist',
  'Stoic',
  'Dreamer'
];

class Home extends Component {
  static propTypes = {
    setScrollOffsets: PropTypes.func.isRequired
  };

  handleScrollEvent = (event, y, x) => {
    this.props.setScrollOffsets({x, y});
  }

  render () {
    return (
      <ScrollWrapper onWindowScroll={this.handleScrollEvent} >
        <div>
          <div className={shapeBackgroundContainer}>
            <div className={shapeBackgroundContent}>
              <HeaderContainer />
              <div onClick={this.handleClick} className={classNames(fullScreen, centerContent)}>
                <HeaderSpinner titles={TITLES} delay={1750}/>
                <Logo bottom />
              </div>
            </div>

            <ShapeBackgroundContainer />
          </div>

          <FooterContainer enableScrollListener={false} />
          <GuidePopUpContainer />
        </div>
      </ScrollWrapper>
    );
  }
}


export default Home;

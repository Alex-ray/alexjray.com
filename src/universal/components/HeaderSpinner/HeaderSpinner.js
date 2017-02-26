// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import {
  headerWrapper,
  nextTransition,
  currentTransition,
  transitionDown,
  transitionSlow,
  transitionFast,
  transitionMedium
} from './header-spinner.less';

const SPEED_SLOW   = 200;
const SPEED_MEDIUM = 250;
const SPEED_FAST   = 350;

function getTransitionSpeed (itemIndex, maxItems) {
  if (itemIndex === 0 || itemIndex === maxItems) {
    return SPEED_SLOW;
  } else if (itemIndex === 2 || itemIndex === 1 || itemIndex === maxItems -1 ) {
    return SPEED_MEDIUM;
  }

  return SPEED_FAST;
}

class HeaderSpinner extends Component {
  static propTypes = {
    titles: PropTypes.array.isRequired,
    delay: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props);

    this.state = {
      currentTitleIndex: 0,
      nextTitleIndex: 1,
      transitioning: false
    };
  }


  transition = (index) => {
    const {
      titles
    } = this.props;

    this.active = true;

    index = !titles[index] ? 0 : index;
    let nextIndex = !titles[index + 1] ? 0 : index + 1;

    this.setState({
      currentTitleIndex: index,
      nextTitleIndex: nextIndex,
      transitioning: false
    });

    if (!this.stop) {
      let durationMS = getTransitionSpeed(index, titles.length-1)

      // Buffer
      durationMS += 100;

      this.timeout = setTimeout(() => {
        this.setState({transitioning: true});
        this.timeout = setTimeout(()=> {
          this.transition(nextIndex);
        }, durationMS);
      }, durationMS);

    } else {
      this.active = false;
    }

    let fullRotation = nextIndex === 0 && index === titles.length-1;
    this.stop = fullRotation;
  }

  startTransitions = () => {
    if (!this.active) {
      this.stop = false;
      this.transition();
    }
  }

  componentDidMount() {
    const {
      delay
    } = this.props;

    this.timeout = setTimeout(this.startTransitions, delay);
  }

  componentWillUnmount () {
    this.stop = true;
    if (this.timeout && typeof window !== "undefined") {
      window.clearTimeout(this.timeout);
    }
  }

  render () {
    const {
      props: {
        titles
      },
      state: {
        currentTitleIndex,
        nextTitleIndex,
        transitioning
      }
    } = this;

    let currentTitle = titles[currentTitleIndex];
    let nextTitle    = titles[nextTitleIndex];

    let transitionSpeed = getTransitionSpeed(currentTitleIndex, titles.length-1);

    const transitionClassOptions = {
      [transitionDown]  : transitioning,
      [transitionSlow]  : transitionSpeed === SPEED_SLOW,
      [transitionFast]  : transitionSpeed === SPEED_FAST,
      [transitionMedium]: transitionSpeed === SPEED_MEDIUM
    };

    const nextTransitionClass    = classNames(nextTransition, transitionClassOptions);
    const currentTransitionClass = classNames(currentTransition, transitionClassOptions);

    return (
      <h1 onClick={this.startTransitions} className={headerWrapper}>
        <span className={nextTransitionClass}>{nextTitle}</span>
        <span className={currentTransitionClass}>{currentTitle}</span>
      </h1>
    );
  }
}

export default HeaderSpinner;

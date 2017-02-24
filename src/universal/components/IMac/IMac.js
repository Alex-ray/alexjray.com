import React, {Component, PropTypes} from 'react';

import {
  hold,
  main,
  inner,
  sub,
  top,
  mid,
  part,
  bot,
  image
} from './i-mac.less';

class IMac extends Component {
  render () {
    return (
      <div className={hold}>
        <div className={main}>
          <div className={inner}>
            <img className={image} src={this.props.image}/>
          </div>
        </div>
        <div className={sub}>
          <div className={top}></div>
          <div className={mid}>
            <div className={part}></div>
          </div>
          <div className={bot}></div>
        </div>
      </div>
    );
  }
}

export default IMac;

import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

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
} from './i-phone.less';

class IPhone extends Component {
  render () {
    return (
      <div className={classNames(hold, this.props.className)}>
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
    ) ;
  }

}

export default IPhone;

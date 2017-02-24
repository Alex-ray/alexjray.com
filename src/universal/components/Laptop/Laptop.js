import React, {Component, PropTypes} from 'react';

import {
  container,
  main,
  inner,
  body,
  image,
  top,
  bottom
} from './laptop.less';

class Laptop extends Component {
  render () {
    return (
      <div className={container}>
        <div className={main}>
          <div className={inner}>
            <img className={image} src={this.props.image}/>
          </div>
        </div>
        <div className={body}>
        <div className={top}></div>
          <div><div></div></div>
          <div className={bottom}></div>
        </div>
      </div>
    );
  }
}

export default Laptop;

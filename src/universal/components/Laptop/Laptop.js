import React, {Component, PropTypes} from 'react';
import Preload     from 'react-preload';
import ImageLoading from 'universal/components/ImageLoading/ImageLoading.js';

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
    const loader = (<ImageLoading />);

    const {
      image
    } = this.props;

    return (
      <div className={container}>
        <div className={main}>
          <div className={inner}>
            <Preload
              loadingIndicator={loader}
              images={[image]}
              autoResolveDelay={3000}
            >
              {loader}
            </Preload>
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

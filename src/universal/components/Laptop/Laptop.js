import React, {Component, PropTypes} from 'react';
import Preload     from 'react-preload';
import ImageLoading from 'universal/components/ImageLoading/ImageLoading.js';

import {
  container,
  main,
  inner,
  body,
  image as imageClass,
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
            >
              <img className={imageClass} src={image} />
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

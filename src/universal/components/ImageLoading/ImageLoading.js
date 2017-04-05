import React, {Component, PropTypes} from 'react';
import {Loader} from 'react-loaders';

import {
  container
} from './image-loading.less';

class ImageLoading extends Component {
  render () {
    return (
      <div className={container}>
        <Loader type="ball-pulse" active />
      </div>
    );
  }
}

export default ImageLoading;

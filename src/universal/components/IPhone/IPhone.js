import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import Preload     from 'react-preload';
import ImageLoading from 'universal/components/ImageLoading/ImageLoading.js';

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
    const loader = (<ImageLoading />);

    const {
      image
    } = this.props;

    return (
      <div className={classNames(hold, this.props.className)}>
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

// Libraries
import React, {Component, PropTypes} from 'react';
import ReactPlayer from 'react-player';
import Preload     from 'react-preload';
import ImageLoading from 'universal/components/ImageLoading/ImageLoading.js';

// Styles
import {
  hold,
  main,
  inner,
  sub,
  top,
  mid,
  part,
  bot,
  image as imageClass
} from './i-mac.less';

function getVideoEl (videoSrc) {
  return (<ReactPlayer url={videoSrc} height={198} width={330} controls />);
}

function getImageEl (imageSrc) {
  const loader = (<ImageLoading />);
  return (
    <Preload
      loadingIndicator={loader}
      images={[imageSrc]}
      onError={() => {console.log('error')}}
      autoResolveDelay={3000}
    >
      <img className={imageClass} src={imageSrc} />
    </Preload>
  )
}


class IMac extends Component {
  static propTypes = {
    image: PropTypes.string,
    video: PropTypes.string
  }

  render () {

    let mediaNode = this.props.video ? getVideoEl(this.props.video) : getImageEl(this.props.image);

    return (
      <div className={hold}>
        <div className={main}>
          <div className={inner}>
            {mediaNode}
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

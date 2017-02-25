// Libraries
import React, {Component, PropTypes} from 'react';
import ReactPlayer from 'react-player';

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
  image
} from './i-mac.less';

function getVideoEl (videoSrc) {
  return (<ReactPlayer url={videoSrc} height={198} width={330} youtubeConfig={{playerVars: {modestbranding: 1, showinfo: 0}}} />);
}

function getImageEl (imageSrc) {
  return (<img className={image} src={imageSrc}/>)
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

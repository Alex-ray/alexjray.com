// Libraries
import React, {Component, PropTypes} from 'react';
import ReactPlayer from 'react-player';



// Components
import Page from 'universal/components/Page/Page.js';
import IMac   from 'universal/components/IMac/IMac.js';
import Laptop from 'universal/components/Laptop/Laptop.js';

import {
  styledContent,
  description,
  subTitle,
  media,
  mediaVideo
} from 'universal/components/Page/page.less';

// Images
import screenImage from 'universal/../images/buffer/overview-analytics.png';

// Video
import overviewAnalyticsVideo from 'universal/../videos/buffer/overview-analytics.mov';

class Buffer extends Component {
  render () {
    return (
      <Page title={'Buffer'} linkSrc={'https://buffer.com'} bullets={['PHP', 'MongoDB', 'Node.js', 'JavaScript', 'React', 'Redux', 'Webpack', 'CSSModules', 'LESS']}>
        <div className={styledContent}>
          <div className={description}>
            <h2 className={subTitle}>Remote Product Engineer -</h2>
            <p>
              In addition to my daily roles as a product engineer I also,

              Lead migration from Backbon.js to Wepback, React and Redux.

              Helped rebuild the Buffer for Business adminster dashboard utilizing technologies such as PHP, React, Webpack and CSS Modules.

              Completely re-built the Buffer for Business Twitter Analytics from the ground up using React, Redux, Webpack, Highcharts, PHP and twitters data API, Gnip.
            </p>
          </div>

          <div className={media}>
            <IMac image={screenImage}/>
            <ReactPlayer className={mediaVideo} url={"https://youtu.be/jqDQDbcf1Cc"}  youtubeConfig={{playerVars: {modestbranding: 1, showinfo: 0}}} />
            <ReactPlayer className={mediaVideo} url={"https://youtu.be/LeHMbG4gm5I"}  youtubeConfig={{playerVars: {modestbranding: 1, showinfo: 0}}} />
          </div>

        </div>
      </Page>
    );
  }
}

export default Buffer;

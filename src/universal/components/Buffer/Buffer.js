// Libraries
import React, {Component, PropTypes} from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
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

class Buffer extends Component {
  render () {
    return (
      <Page title={'Buffer'}
            linkSrc={'https://buffer.com'}
            bullets={['PHP', 'MongoDB', 'Node.js', 'JavaScript', 'React', 'Redux', 'Webpack', 'CSSModules', 'LESS']}>
        <div className={styledContent}>
          <div className={description}>
            <h2 className={subTitle}>Remote Product Engineer -</h2>
            <p>
              In addition to my daily responsibilties as a Buffer for Business product engineer, fixing bugs, responding to customer tickets and owning product features.

              I also helped lead the migration from a Backbone.js architeture to a fully modern Webpack, React and Redux front end.
            </p>
            <p>
              Most recently I helped rethink and rebuild two core Buffer for Business products. The Organization Admin and Business Analytics..
            </p>
          </div>

          <div className={media}>
            <IMac image={screenImage}/>
            <div className={mediaVideo}>
              <ResponsiveEmbed src={"https://www.youtube.com/embed/jqDQDbcf1Cc?autoplay=0&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&controls=0&start=0&origin=http%3A%2F%2Flocalhost%3A3000&modestbranding=1&enablejsapi=1&widgetid=1"}/>
            </div>
            <div className={mediaVideo}>
              <ResponsiveEmbed src={"https://www.youtube.com/embed/LeHMbG4gm5I?autoplay=0&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&controls=0&start=0&origin=http%3A%2F%2Flocalhost%3A3000&modestbranding=1&enablejsapi=1&widgetid=1"}/>
            </div>
          </div>

        </div>
      </Page>
    );
  }
}

export default Buffer;

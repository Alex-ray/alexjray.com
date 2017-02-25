// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import Page from 'universal/components/Page/Page.js';
import IMac   from 'universal/components/IMac/IMac.js';
import Laptop from 'universal/components/Laptop/Laptop.js';


import {
  styledContent,
  description,
  subTitle,
  media
} from 'universal/components/Page/page.less';

// Images
import screenImage from 'universal/../images/addvocate/screen.png';

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
            <IMac video={"https://www.youtube.com/watch?v=jqDQDbcf1Cc"}/>
          </div>

        </div>
      </Page>
    );
  }
}

export default Buffer;

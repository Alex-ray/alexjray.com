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
import screenImage from 'universal/../images/gramercy/frame-io-widget.png';

class Gramercy extends Component {
  render () {
    return (
      <Page title={'Gramercy'}
            linkSrc={'https://gramercy.io'}
            bullets={['Node.js', 'sails.js', 'Postgres', 'JavaScript/ES6', 'React', 'Redux', 'Webpack', 'CSSModules', 'cssnext', 'RXjs']}>
        <div className={styledContent}>
          <div className={description}>
            <h2 className={subTitle}>Senior Software Engineer -</h2>
            <p>
              In 6 months....
            </p>
            <p>
              I Lead the development and execution of Gramercy's main product; a referral widget.
            </p>
            <p>
              Helped launch the first product and scaled traffic from a dozen users to over a million every month.
            </p>
            <p>
              Built robust internal testing dashboard to QA, events, cookies, referrals etc...
            </p>
            <p>
              Built and launched a cutting edge demo engine sales tool that automated thousands of sales leads into custom live demo landing pages.
            </p>
            <p>
              1st engineering hire and stake holder in the company.
            </p>
          </div>

          <div className={media}>
            <IMac image={screenImage}/>
          </div>
        </div>
      </Page>
    );
  }
}

export default Gramercy;

import React, {Component, PropTypes} from 'react';

// Components
import Page from 'universal/components/Page/Page.js';
import IMac   from 'universal/components/IMac/IMac.js';
import Laptop from 'universal/components/Laptop/Laptop.js';
import IPhone from 'universal/components/IPhone/IPhone.js';

import {
  styledContent,
  columnTwo,
  description,
  media,
  subTitle,
  phoneMedia
} from 'universal/components/Page/page.less';

// Images
import screenImage from 'universal/../images/red/lionel.png';
import mobileScreenImage from 'universal/../images/red/lionel-mobile.png';


class RedInteractive extends Component {
  render () {
    return (
      <Page title='RED' linkSrc='https://ff0000.com'   bullets={['Web','Postgresql', 'Python', 'Django', 'Ember.js', 'SASS', 'Grunt', 'Gulp']}>
        <div className={styledContent}>
        <div className={description}>
          <h2 className={subTitle}>Web Developer - </h2>
          <p>
            Collaborated with clients, creatives and project managers to take websites from concept to production using our in house built CMS Scarlet (django, python) and Emberjs
          </p>
        </div>

        <div className={media}>
          <IMac image={screenImage}/>
          <IPhone className={phoneMedia} image={mobileScreenImage} />
        </div>
        </div>
      </Page>
    );
  }
}

export default RedInteractive;

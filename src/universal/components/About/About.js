// Libraries
import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';

// Components
import Page from 'universal/components/Page/Page.js';

// Styles
import {
  centerContent
} from 'universal/styles/layout.less';

import {
  aboutList
} from './about.less';

class About extends Component {
  render () {
    return (
      <Page className={centerContent}>
      <DocumentTitle title={'About | Alexander J Ray'}>
       <ul className={aboutList}>
        <li>
        Motto
          <ul>
            <li>It's All About the People.</li>
          </ul>
        </li>
        <li>
          Currently
          <ul>
            <li>Open to new opportunities</li>
          </ul>
        </li>
        <li>
        Previously
          <ul>
            <li><Link to='gramercy'>Gramercy</Link></li>
            <li><Link to='buffer'>Buffer</Link></li>
            <li><Link to='red'>RED</Link></li>
            <li><Link to='addvocate'>Addvocate</Link></li>
            <li><Link to='ck12'>CK 12</Link></li>
          </ul>
        </li>
        <li>
          Expertise
          <ul>
            <li>ES6, JavaScript, Node.js, Express</li>
            <li>React, Redux, RXjs, Ember.js</li>
            <li>Webpack, Grunt, Gulp, Babel</li>
            <li>HTML, CSS, LESS, SASS</li>
            <li>PHP, Ruby (on Rails)</li>
            <li>Python, Django</li>
            <li>Docker, Kubernetes</li>
            <li>Postgres, Mongodb, Knex, SQL</li>
            <li>Git</li>
            <li>Adobe, Sketch, Pencil & Paper</li>
          </ul>
        </li>
        <li>
          Connect
          <ul>
            <li><a href='mailto:alexjamesray@gmail.com'>Email</a></li>
            <li><a href='https://github.com/alex-ray'>Github</a></li>
            <li><a href='https://www.linkedin.com/in/alexander-ray-a0348759'>Linkedin</a></li>
            <li><a href='https://twitter.com/_alexray'>Twitter</a></li>
            <li><a href='https://instagram.com/alexjray'>Instagram</a></li>
            <li><a href='https://open.spotify.com/user/124707193'>Spotify</a></li>
          </ul>
        </li>
       </ul>
      </DocumentTitle>
      </Page>
    );
  }
}

export default About;

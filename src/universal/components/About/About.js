// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

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
            <li><a href='https://buffer.com'>Buffer</a></li>
            <li><a href='https://ffffff.com'>RED</a></li>
            <li><a href='https://addvocate.com'>Addvocate</a></li>
            <li><a href='https://ck12.org'>CK 12</a></li>
          </ul>
        </li>
        <li>
          Expertise
          <ul>
            <li>JavaScript, Node.js</li>
            <li>React, Redux, Ember.js</li>
            <li>Webpack, Grunt, Gulp</li>
            <li>HTML, CSS</li>
            <li>PHP</li>
            <li>Ruby (on Rails)</li>
            <li>Python, Django</li>
            <li>Docker, Kubernetes</li>
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
      </Page>
    );
  }
}

export default About;

// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import Page from 'universal/components/Page/Page.js';

class About extends Component {
  render () {
    return (
      <Page>
       <ul>
        <li>
        Motto
          <ul>
            <li>It's All About the People.</li>
          </ul>
        </li>
        <li>
          Currently
          <ul>
            <li>Open for new opportunties!</li>
          </ul>
        </li>
        <li>
        Previously
          <ul>
            <li>Buffer</li>
            <li>RED</li>
            <li>Addvocate</li>
            <li>CK 12</li>
          </ul>
        </li>
        <li>
          Skills
          <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Ruby on Rails</li>
            <li>Python</li>
            <li>Node</li>
            <li>React, Redux</li>
            <li>Webpack, Grunt, Gulp</li>
            <li>HTML, CSS</li>
            <li>Docker</li>
            <li>Git</li>
            <li>Sketch</li>
            <li>Adobe</li>
          </ul>
        </li>
        <li>
          Connect
          <ul>
            <li>Email</li>
            <li>Github</li>
            <li>Linkedin</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Spotify</li>
          </ul>
        </li>
       </ul>
      </Page>
    );
  }
}

export default About;

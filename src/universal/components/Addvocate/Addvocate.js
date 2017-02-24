// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import Page from 'universal/components/Page/Page.js';
import IMac   from 'universal/components/IMac/IMac.js';
import Laptop from 'universal/components/Laptop/Laptop.js';

import {
  styledContent,
  columnTwo,
  description,
  media,
  subTitle
} from 'universal/components/Page/page.less';

// Images
import screenImage from 'universal/../images/addvocate/screen.png';


class Addvocate extends Component {
  render () {
    return (
      <Page title='Addvocate' linkSrc='https://angel.co/addvocate'   bullets={['Web', 'Python', 'Backbone.js', 'Grunt.js', 'D3.js', 'LESS']}>
        <div className={styledContent}>
          <div className={description}>
            <h2 className={subTitle}>Web Developer - </h2>
            <p>
              Helped reinvent, design and architect the entire front end of the Addvocate application
              using cutting edge techonolgies.

              Specifically I helped implement the following front end aritectures.

              <ul>
                <li>Completely asychronous architecture.</li>
                <li>Real time updates over the wire (long polling).</li>
                <li>Client Side caching and data managment.</li>
                <li>Universal JavaScript (JS rendered on the client as well as the server).</li>
                <li>Blazing fast UI animations and render times.</li>
              </ul>
            </p>
          </div>

          <div className={media}>
            <Laptop image={screenImage}/>
          </div>
        </div>
      </Page>
    );
  }
}

export default Addvocate;

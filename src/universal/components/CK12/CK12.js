// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import Page from 'universal/components/Page/Page.js';
import Laptop from 'universal/components/Laptop/Laptop.js';
import IMac   from 'universal/components/IMac/IMac.js';

import {
  styledContent,
  columnTwo,
  description,
  media,
  subTitle
} from 'universal/components/Page/page.less';

// Images
import chatUiImage     from 'universal/../images/ck12/chat-ui.png';
import chatMobileImage from 'universal/../images/ck12/chat-mobile.png';

class CK12 extends Component {
  render () {
    return (
      <Page
        title='CK 12'
        linkSrc='http://ck12.org'
        bullets={['Web', 'Python', 'Backbone.js', 'Grunt.js', 'D3.js', 'LESS']}>
        <div className={styledContent}>
        <div className={description}>
          <h2 className={subTitle}>Front End Engineer -</h2>
          <p>
            In addition to vetting front-end technologies and brainstorm about new products I helped develop two key products for CK 12.
          </p>
          <p>
            The first was a intrenal analytics platform to help visualize and measure key metrics about the CK 12 platform.

            The second and more ambitious project was a Disqus like chat platform for students to ask, answer and vote for questions.
          </p>
        </div>

        <div className={media}>
          <IMac image={chatUiImage}/>
        </div>

        </div>
      </Page>
    );
  }
}

export default CK12;

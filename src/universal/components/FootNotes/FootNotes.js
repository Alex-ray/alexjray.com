// Libraries
import React, {Component, PropTypes} from 'react';

import {
  container,
  copyRight,
  email,
  connect
} from './foot-notes.less';

class FootNotes extends Component {
  render () {
    return (
      <div className={container}>
        <a className={email} target='_blank' href='mailto:alexjamesray@gmail.com'>alexjamesray@gmail.com</a>
        <a className={connect} target='_blank' href='https://keybase.io/alexjray'>Connect</a>
      </div>
    );
  };
}

export default FootNotes;

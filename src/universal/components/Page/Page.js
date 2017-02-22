// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import HeaderContainer from 'universal/containers/Header/HeaderContainer.js';

// Styles
import {
  section
} from './page.less';

class Page extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  };

  render () {
    const {
      title,
      children
    } = this.props;

    return (
      <section className={section}>
        <HeaderContainer fixed/>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
};

export default Page;

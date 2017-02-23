// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// Containers
import HeaderContainer     from 'universal/containers/Header/HeaderContainer.js';
import GuidePopUpContainer from 'universal/containers/GuidePopUp/GuidePopUpContainer.js';

// Components
import Footer from 'universal/components/Footer/Footer.js';
import Logo from 'universal/components/Logo/Logo.js';

// Styles
import {
  content,
  titleType
} from './page.less';

function Title (props) {
  return props.title ? (<h1 className={titleType}>{props.title}</h1>): null;
}

class Page extends Component {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: React.PropTypes.element.isRequired
  };

  render () {
    const {
      title,
      className,
      children
    } = this.props;

    return (
      <section>
        <HeaderContainer fixed/>
        <div className={classNames(content, className)}>
          <Title title={title} />
          {children}
          <Logo bottom />
        </div>
        <GuidePopUpContainer />
        <Footer/>
      </section>
    );
  }
};

export default Page;

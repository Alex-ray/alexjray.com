// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// Containers
import HeaderContainer     from 'universal/containers/Header/HeaderContainer.js';
import GuidePopUpContainer from 'universal/containers/GuidePopUp/GuidePopUpContainer.js';
import FooterContainer     from 'universal/containers/Footer/FooterContainer.js';

// Components
import Footer from 'universal/components/Footer/Footer.js';
import Logo from 'universal/components/Logo/Logo.js';

// Styles
import {
  content,
  contentWrapper,
  titleType,
  titleLink,
  flexContent,
  bottomContentBorder,
  bottomTagList
} from './page.less';

function Title (props) {
  return props.title ? (<h1 className={titleType}>{props.title}</h1>): null;
}

class Page extends Component {
  static propTypes = {
    title: PropTypes.string,
    linkSrc: PropTypes.string,
    className: PropTypes.string,
    children: React.PropTypes.element.isRequired
  };

  getBullets (bullets ) {
    let list = [];

    for (var i = 0; i < bullets.length; i++) {
      let bullet = bullets[i];

      list.push(<li key={i}>{bullet}</li>);
    }

    return list;
  }


  render () {
    const {
      title,
      linkSrc,
      className,
      children,
      bullets
    } = this.props;

    let bulletList = bullets ? this.getBullets(bullets) : [];

    return (
      <section>
        <HeaderContainer fixed/>
        <div className={classNames(content, className)}>
          <div className={contentWrapper}>
            <div>
              <Title title={title} />
              <a className={titleLink} href={linkSrc}>{linkSrc}</a>
            </div>
            <div className={flexContent}>
              {children}

              {bullets ? <span className={bottomContentBorder}>...............</span> : null}

              <ul className={bottomTagList}>{bulletList}</ul>
            </div>
            <Logo bottom />
          </div>
        </div>
        <GuidePopUpContainer />
        <FooterContainer enableScrollListener/>
      </section>
    );
  }
};

export default Page;

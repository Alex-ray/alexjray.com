// Libraries
import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

const MAX_CHARACTER_LENGTH = 60;

import {
  contentListItem,
  contentListCharacterHover,
  contentListCharacterHoverDark,
  contentListItemLink,
  contentListItemLabel,
  contentListItemCategory
} from './table-of-contents-list-item.less';

class TableOfContentsListItem extends Component {
  static propTypes = {
    onLinkClick: PropTypes.func
  };

  constructor (props) {
    super(props);

    this.state = {
      highlightIndex: -1
    };
  }

  highLightText = (textLength, force) => {
    let index = this.state.highlightIndex;

    if (force || index < textLength && index !== -1 && !this.stop) {
      this.setState({highlightIndex: index+3});

      this.timeout = setTimeout(() => {
        this.highLightText(textLength);
      }, 0);
    }
  }

  handleMouseEnter = (textLength) => {
    return () => {
      // this.highLightText(textLength, true);
    };
  }

  handleMouseLeave = () => {
    // this.setState({highlightIndex: -1});
  }

  componentWillUnmount () {
    this.stop = true;
    if (this.timeout && window) {
      window.clearTimeout(this.timeout);
    }
  }

  getText (text, highlightIndex) {
    let textList = [];

    for (let i = 0; i < text.length; i++) {

      let characterClass = i <= highlightIndex ? contentListCharacterHover : null;

      if (i <= highlightIndex && i % 2 === 0 ) {
        characterClass = contentListCharacterHoverDark;
      }

      textList.push(
        <span className={characterClass} key={i}>{text[i]}</span>
      );
    }

    return textList;
  }

  render () {
    let {
      name,
      categories,
      link,
      index,
      onLinkClick
    } = this.props;

    name+= ' ';

    let categorieString = ' ' + categories.join(',');
    let dotLength  = MAX_CHARACTER_LENGTH - (name.length + categorieString.length) ;
    let dots = '';

    for (var j = 0; j < dotLength; j++) {
      dots += '.';
    }

    // let text = name + dots + categorieString;
    // let textList = this.getText(text, this.state.highlightIndex);

    let category = categories.length > 0 ? (<span className={contentListItemCategory}>{categorieString}</span>) : null;

    return (
      <li className={contentListItem}
          key={index}>
        <Link to={link} onClick={onLinkClick} className={contentListItemLink}>
          <span className={contentListItemLabel}>{name}</span>
          {category}
        </Link>
      </li>
    );
  }
}

export default TableOfContentsListItem;

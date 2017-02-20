// Libraries
import React, {Component, PropTypes} from 'react';

const MAX_CHARACTER_LENGTH = 60;

import {
  contentListItem,
  contentListCharacterHover,
  contentListCharacterHoverDark
} from './table-of-contents-list-item.less';

class TableOfContentsListItem extends Component {

  constructor (props) {
    super(props);

    this.state = {
      highlightIndex: -1
    };
  }

  highLightText = (textLength, force) => {
    let index = this.state.highlightIndex;

    if (force || index < textLength && index !== -1) {
      this.setState({highlightIndex: index+1});

      setTimeout(() => {
        this.highLightText(textLength);
      }, 0);
    }
  }

  handleMouseEnter = (textLength) => {
    return () => {
      this.highLightText(textLength, true);
    };
  }

  handleMouseLeave = () => {
    this.setState({highlightIndex: -1});
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
      index
    } = this.props;

    name+= ' ';

    let categorieString = ' ' + categories.join(',');
    let dotLength  = MAX_CHARACTER_LENGTH - (name.length + categorieString.length) ;
    let dots = '';

    for (var j = 0; j < dotLength; j++) {
      dots += '.';
    }

    let text = name + dots + categorieString;
    let textList = this.getText(text, this.state.highlightIndex);

    return (
      <li onMouseEnter={this.handleMouseEnter(text.length)}
          onMouseLeave={this.handleMouseLeave}
          className={contentListItem}
          key={index}>
        <a href={link}>{textList}</a>
      </li>
    );
  }
}

export default TableOfContentsListItem;

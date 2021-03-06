// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import TableOfContentsListItem from 'universal/components/TableOfContentsListItem/TableOfContentsListItem.js';

// Styles
import {
  container
} from './table-of-contents.less';

const CONTENTS = [
  {name: 'About', link: 'about', categories: []},
  {name: 'Gramercy', link: 'gramercy', categories: []},
  {name: 'Buffer', link: 'buffer', categories: []},
  {name: 'Red Interactive', link: 'red', categories: []},
  {name: 'Addvocate', link: 'addvocate', categories: []},
  {name: 'CK 12', link: 'ck12', categories: []}
  // {name: 'Secret Stash', link: 'stash', categories: ['Other']}
];

class TableOfContents extends Component {

  static propTypes = {
    handleLinkClick: PropTypes.func
  };

  getList (contents) {
    let list = [ ];

    const {
      handleLinkClick
    } = this.props;

    for (var i = 0; i < contents.length; i++) {
      let item = contents[i];
      list.push(<TableOfContentsListItem {...item} onLinkClick={handleLinkClick} index={i} key={i}/>)
    }

    return list;
  }

  render () {
    let list = this.getList(CONTENTS);
    return (
      <ul className={container}>
        {list}
      </ul>
    );
  }
}

export default TableOfContents;

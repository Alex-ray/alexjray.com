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
  {name: 'Buffer', link: 'buffer', categories: ['Web']},
  {name: 'Red Interactive', link: 'red', categories: ['Web']},
  {name: 'Addvocate', link: 'addvocate', categories: ['Web']},
  {name: 'CK 12', link: 'ck12', categories: ['Web']},
  {name: 'Secret Stash', link: 'stash', categories: ['Other']}
];

class TableOfContents extends Component {

  getList (contents) {
    let list = [ ];

    for (var i = 0; i < contents.length; i++) {
      let item = contents[i];
      list.push(<TableOfContentsListItem {...item} index={i} key={i}/>)
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

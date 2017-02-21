// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import TableOfContentsListItem from 'universal/components/TableOfContentsListItem/TableOfContentsListItem.js';

// Styles
import {
  container
} from './table-of-contents.less';

const CONTENTS = [
  {name: 'Buffer', link: '/#', categories: ['Web Development']},
  {name: 'Red Interactive', link: '/#', categories: ['Web Development']},
  {name: 'Addvocate', link: '/#', categories: ['Web Development']},
  {name: 'CK 12', link: '/#', categories: ['Web Development']}
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

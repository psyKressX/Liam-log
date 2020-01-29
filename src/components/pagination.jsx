import React, { Component } from 'react';
import _ from 'lodash'

class Pagination extends Component {

  render() {
    //use page size and item length to render dynamic pagination
    const { itemsCount, pageSize, onPageChange, currentPage } =this.props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if(pageCount === 1 ) return null;
    const pages=_.range(1, pageCount +1);    

    return (
      <div>
        <nav aria-label="Page navigation example">
        <ul className="pagination">
          { pages.map( page => (
            <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
              <a onClick={() =>onPageChange(page)} className="page-link">{page}</a>
            </li>
          )) }
        </ul>
        </nav>
      </div>
    );
  }

}

export default Pagination;

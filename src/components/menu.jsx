import React, { Component } from 'react';
import Pagination from './pagination';
import MenuItem from './menuItem';
import { paginate } from '../utils/paginate';
import MyModal from './modal';

class Menu extends Component {
//can change page item limit in page size, tells current page for pagnation to render and actives the model when item is added
state = {
  pageSize:8,
  currentPage:1,
  show:false
}

handlePageChange = page => this.setState({ currentPage : page });
// increments the amount of item in basket and activates the model to appear
onAdd = (plist) =>{
  this.props.onIncrement(plist);
  this.handleShow();
}
//reset page to p1 menu change
componentDidUpdate(pP){
  if(pP.selected!==this.props.selected) {
    this.setState({currentPage : 1});
  }
}
//modal show close
handleClose = () => this.setState({ show : false });
handleShow = () => this.setState({ show: true});


render() {
  //gets items list length, and page length then renders through pagnation component
  const { items, selected} = this.props;
  const {pageSize, currentPage} =this.state;
  const count = items.length;
  const pageList = paginate( items, currentPage, pageSize );

  return (
    <div>

      <MyModal
        handleClose={this.handleClose}
        handleShow={this.handleShow}
        show={this.state.show}
      />

      <table className="table mt-4">

      <thead className="bg-light">
        <tr>
         <th> <h3>Item</h3> </th>
         <th> <h3>Price</h3> </th>
         <th> <h3>Add</h3> </th>
        </tr>
      </thead>

      {pageList.map(pageList => (
          <MenuItem
            key={pageList.id}
            pageList={pageList}
            onAdd={this.onAdd}
          />
        ))}
      </table>

      <Pagination
        selected={selected}
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={this.handlePageChange}
        currentPage={currentPage}
      />

    </div>
  );
}



}

export default Menu;

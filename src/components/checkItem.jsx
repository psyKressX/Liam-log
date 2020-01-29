import React, { Component } from 'react';

class CheckItem extends Component {
// row render for checkout item list 
  render() {

    const { pageList, onIncrement, onReduction, onDelete, } = this.props;

    return (
      <tr className="py-2">
        <th> <h5>{pageList.name}</h5> </th>
        <td> <h5>${pageList.price}</h5> </td>
        <td> <span className='badge m-2 badge-primary'>{pageList.value}</span> </td>
        <td>
          <button onClick={ ()=>onIncrement(pageList)} className='btn btn-secondary btn-sm m-1'>+</button>
          <button onClick={ ()=> onReduction(pageList)} className='btn btn-secondary btn-sm m-1'>-</button>
          <button onClick={ ()=>onDelete(pageList)} className='btn btn-danger btn-sm m2'>Delete</button>
        </td>
      </tr>
    );
  }


}

export default CheckItem;

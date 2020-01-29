import React, { Component } from 'react';
//row render for menu table, not check out
class MenuItem extends Component {


  render() {

    const { pageList, onAdd } = this.props;

    return (
      <tr>
        <th> <h5>{pageList.name}</h5> </th>
        <td> <h5>${pageList.price}</h5> </td>
        <td>
          <button onClick={()=>onAdd(pageList)} className='btn btn-secondary btn-sm m-1'>+</button>
        </td>
      </tr>
    );
  }

}

export default MenuItem;

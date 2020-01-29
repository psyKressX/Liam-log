import React, { Component } from 'react';
import CheckItem from './checkItem';

class CheckOut extends Component {

  render() {
    const { onReset, items, onDelete, onIncrement, onReduction } =this.props;
    //accum total cost
    const total = items.reduce((accum, cost)=>{
      return accum + cost.price*cost.value;
    }, 0);

    //checks if cart is empty
    if(items.length > 0){

    return (
      <div>

        <table className="table mt-4">

        <thead className="bg-light">
          <tr>
           <th> <h3>Item</h3> </th>
           <th> <h3>Price</h3>  </th>
           <th> <h3>Quantity</h3>  </th>
           <th></th>
          </tr>
        </thead>

        {items.map(list => (
          <CheckItem
            key={list.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            pageList={list}
            onReduction={onReduction}
          />))}
        </table>

          <div>
          <h4>Total Cost: ${total}</h4>
          </div>
          <button className='btn btn-primary btn-sm m-2'onClick={onReset}>Delete Order</button>
      </div>
    );
  }

  else{
    return(
      <div className='mt-4'>
        <h4>Cart is empty!</h4>
      </div>
    )
  }
}
}

export default CheckOut;

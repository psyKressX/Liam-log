import React, { Component } from 'react';
import Menu from './menu';
import CheckOut from './checkOut';

class MainBody extends Component {

  render() {
    const { onReset, items, onDelete, onIncrement, selected, onReduction, isCheckingOut} = this.props;

    //renders either menu or checkout component
    if(isCheckingOut){
      return(
        <CheckOut
        //passes item list filter items with no value/ammount
          items={items.filter(c => c.value >0)}
          onReset={onReset}
          onIncrement={onIncrement}
          onDelete={onDelete}
          onReduction={onReduction}
        />
      );
    }
    else{
      return(
        <Menu
          //passes item list filtered by the selected catagory
          items={items.filter(e => (e.catagory===selected))}
          selected={selected}
          onIncrement={onIncrement}
        />
      )
    }

  }

}

export default MainBody;

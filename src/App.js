import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import MainBody from './components/mainBody';
import '../node_modules/font-awesome/css/font-awesome.min.css'

class App extends Component {
  //hard coded list items, which catagory is selected
  state ={
    items: [
        { id: 1, name:'Cheese', value: 0, price:10, catagory:'pizza'},
        { id: 2, name:'BBQ chicken', value: 0, price:14, catagory:'pizza'},
        { id: 3, name:'Buffilo chicken', value: 0, price:16, catagory:'pizza'},
        { id: 4, name:'Meat lovers', value: 0, price:12, catagory:'pizza'},
        { id: 5, name:'Vegiterian', value: 0, price:15, catagory:'pizza'},
        { id: 6, name:'Prosciutto', value: 0, price:18, catagory:'pizza'},
        { id: 7, name:'Hawaiian', value: 0, price:14, catagory:'pizza'},
        { id: 8, name:'Aussi', value: 0, price:16, catagory:'pizza'},
        { id: 9, name:'The lot', value: 0, price:12, catagory:'pizza'},
        { id: 10, name:'Linguine', value: 0, price:10, catagory:'pasta'},
        { id: 11, name:'Carbonara', value: 0, price:10, catagory:'pasta'},
        { id: 12, name:'Amatriciana', value: 0, price:10, catagory:'pasta'},
        { id: 13, name:'Pomodoro', value: 0, price:10, catagory:'pasta'},
        { id: 14, name:'Napoletana', value: 0, price:10, catagory:'pasta'},
        { id: 15, name:'Melanzane', value: 0, price:10, catagory:'pasta'},
        { id: 16, name:'Ricotta', value: 0, price:10, catagory:'pasta'},
        { id: 17, name:'Primavera', value: 0, price:10, catagory:'pasta'},
        { id: 19, name:'Soup', value: 0, price:10, catagory:'entre'},
        { id: 20, name:'Fries', value: 0, price:10, catagory:'entre'},
        { id: 21, name:'Bruschetta', value: 0, price:10, catagory:'entre'},
        { id: 22, name:'Meat platter', value: 0, price:10, catagory:'entre'},
        { id: 23, name:'Vitello al Limone', value: 0, price:10, catagory:'entre'},
        { id: 24, name:'Cheese fries', value: 0, price:10, catagory:'entre'},
        { id: 25, name:'Pollo Marsala', value: 0, price:10, catagory:'entre'},
        { id: 26, name:'Onion rings', value: 0, price:10, catagory:'entre'},
        { id: 27, name:'Garlic bread', value: 0, price:10, catagory:'entre'},
        { id: 28, name:'Coke', value: 0, price:6, catagory:'drinks'},
        { id: 29, name:'Lemonade', value: 0, price:7, catagory:'drinks'},
        { id: 30, name:'Fanta', value: 0, price:8, catagory:'drinks'},
        { id: 31, name:'Red wine', value: 0, price:6, catagory:'drinks'},
        { id: 32, name:'White wine', value: 0, price:7, catagory:'drinks'},
        { id: 33, name:'Beer1', value: 0, price:8, catagory:'drinks'},
        { id: 34, name:'Beer2', value: 0, price:6, catagory:'drinks'},
        { id: 35, name:'Beer3', value: 0, price:7, catagory:'drinks'},
        { id: 36, name:'Cider', value: 0, price:8, catagory:'drinks'},
        { id: 37, name:'Water', value: 0, price:9, catagory:'drinks'}

    ],
    selected:'pizza',
    isCheckingOut:false
  }

  //changes component to menu and selects catagory
  handleMenu = newSelect => {
    this.setState({ isCheckingOut : false});
    this.setState({ selected : newSelect });
  }
  //changes component to checkOut
  toCheckout =()=>{
    this.setState({isCheckingOut: true});
  }
  //resets all values to 0
  handleReset = () => {
    const items = this.state.items.map(i => {
      i.value= 0;
      return i;
    });
    this.setState({ items });
  }
  //clones list, sets the selected item value to 0 then setState
  handleDelete = item => {
    const updateMenu = [...this.state.items];
    const index= updateMenu.indexOf(item);
    updateMenu[index].value=0;
    this.setState({ items : updateMenu });
  }
  //clones list, sets the selected item value to ++ then setState
  addToOrder = item => {
    const updateMenu = [...this.state.items];
    const index= updateMenu.indexOf(item);
    updateMenu[index].value++;
    this.setState({ items : updateMenu });
  }
  //clones list, sets the selected item value to -- then setState
  handleReduction = item => {
    const updateMenu = [...this.state.items];
    const index= updateMenu.indexOf(item);
    updateMenu[index].value--
    this.setState({ items : updateMenu });
  }


render() {
  return (
    <React.Fragment>
      <NavBar
        totalCounters={this.state.items.filter(c => c.value >0).length}
        onMenu={this.handleMenu}
        toCheckout={this.toCheckout}
      />
      <main className='container'>
        <MainBody
          items={this.state.items}
          isCheckingOut={this.state.isCheckingOut}
          onReset={this.handleReset}
          onIncrement={this.addToOrder}
          onDelete={this.handleDelete}
          onReduction={this.handleReduction}
          selected={this.state.selected}
        />
      </main>
    </React.Fragment>
  );
}
}
export default App;

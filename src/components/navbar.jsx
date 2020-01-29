import React, { Component } from 'react';

class NavBar extends Component {
  //state just for adding dynamic active class to selected nav and nav hide
  state={
    active:'pizza',
    navHide: true,
  }
  //changes active nav
  changeActive =(newActive)=>{
    this.setState({ active: newActive });
  }
  //toggles if menu is collapsed or not
  menuToggle = () => {
    this.setState(prev => ({
      navHide: !prev.navHide
    }))
  }


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <div>
        <button
          className="navbar-toggler" type="button" onClick={this.menuToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${(this.state.navHide === false) ? "show" : ""} `}>

          <ul className="navbar-nav">
            <li
              className={`nav-item nav-link ${(this.state.active==="pizza") ? "active" : ""}`}
              onClick={()=>{this.props.onMenu("pizza"); this.changeActive('pizza')}}>
              <h4>Pizza</h4>
            </li>
            <li
              className={`nav-item nav-link ${(this.state.active==="pasta") ? "active" : ""}`}
              onClick={()=>{this.props.onMenu("pasta"); this.changeActive('pasta')}}>
              <h4>Pasta</h4>
            </li>
            <li
              className={`nav-item nav-link ${(this.state.active==="drink") ? "active" : ""}`}
              onClick={()=>{this.props.onMenu("drinks"); this.changeActive('drink')}}>
              <h4>Drinks</h4>
            </li>
          </ul>
        </div>
        </div>
        <div onClick={()=>{this.props.toCheckout(); this.changeActive('cart')}} className="align-self-start">
          <i className='fa fa-shopping-cart mr-2' style={{color: 'rgba(0, 0, 0, 0.5)'}}></i>
          <span className={`badge badge-pill  ${(this.state.active==="cart") ? "badge-primary" : "badge-secondary"}`}>
            {this.props.totalCounters}
          </span>
        </div>

      </nav>


    );
  }

}

export default NavBar;

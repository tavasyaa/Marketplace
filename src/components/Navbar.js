import React from 'react';
import mainlogo from '../images/mainlogo.png';
import cart from '../images/cart.png';

class Navbar extends React.Component {
	render() {
		return(
			<nav className="navbar navbar-default" style={{margin: 0}}>
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#"><img src={mainlogo} className="navimage"/></a>
			    </div>
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav navbar-right">
			        <li><a href="#">About</a></li>
			        <li><a href="#">Products</a></li>
			        <li><a href="#">Contact</a></li>
			        <li><a href="#"><img src={cart} className="cart"/></a></li>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
	}
}

export default Navbar;
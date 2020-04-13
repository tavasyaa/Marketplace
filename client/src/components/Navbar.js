import React from 'react';
import { Link } from 'react-router-dom';
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
			      <Link className="navbar-brand nav-link" to={'/'}><img src={mainlogo} className="navimage"/></Link>
			    </div>
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav navbar-right">
			        <li><Link className="nav-link" to={'/about'}>About</Link></li>
			        <li><Link className="nav-link" to={'/products'}>Products</Link></li>
			        <li><Link className="nav-link" to={'/contact'}>Contact</Link></li>
			        <li><a href="#"><img src={cart} className="cart"/></a></li>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
	}
}

export default Navbar;
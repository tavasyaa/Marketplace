import React from 'react';
import { Link } from 'react-router-dom';
import mainlogo from '../images/mainlogo.png';
import cart from '../images/cart.png';

class Navbar extends React.Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <Link className="navbar-brand nav-link" to={'/'}><img src={mainlogo} className="navimage"/></Link>
			  <div className="collapse navbar-collapse" id="navbarNavDropdown">
			    <ul className="navbar-nav">
			      <li className="nav-item">
			        <Link className="nav-link" to={'/about'}>About</Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to={'/products'}>Products</Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to={'/contact'}>Contact</Link>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}

export default Navbar;
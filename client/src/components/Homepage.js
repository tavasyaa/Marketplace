import React from 'react';
import airmax from '../images/airmax.png';
import blackkicks from '../images/blackkicks.png'
import $ from 'jquery';
import { Link } from 'react-router-dom';
/* make the jquery scrolling button */

class Homepage extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron hometitlejumbo">
					<h1 className="display-4">The Garnett Shoe Company</h1>
					<p className="lead">Some of the finest sneakers created in the United States.</p>
					<hr className="my-4" />
					<p className="lead">
						<Link className="btn btn-primary btn-lg homepagebutton" to={'/products'}>Products</Link>
					</p>
				</div>
				<div className="flex-container">
					<div className="container">
						<img className="homepageimage" src={airmax} alt="Nike Airmax (red)"/>
					</div>
					<div className="container">
					  <p className="lead">Sourced directly from Nike providers, 
					  we sell all the latest gear at prices close to cost.</p>
					</div>
				</div>
				<div className="flex-container row2">
					<div className="container">
					  <p className="lead">Browse our website for:
						  <li>Sneakers </li>
						  <li>Cleats </li>
						  <li>Kicks </li>
					  </p>
					</div>
					<div className="container">
						<img className="homepageimage" src={blackkicks} alt="Nike sneakers (black)"/>
					</div>
				</div>
			</div>
		)
	}	
}

export default Homepage;
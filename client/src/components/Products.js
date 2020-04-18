import React from 'react';
import airmax from '../images/airmax.png';


class Products extends React.Component {
	state = {
		data: []
	};

	constructor() {
		super();
		this.callBackend();
	}

	callBackend = () => {
		fetch('/express_backend')
			.then(res => res.json())
			.then(res => this.setState({data: res.express}))
	}

	render() {
		if (this.state.data.length){

			const itemcards = []

			for (var i = 0; i < this.state.data.length; i++) {
				itemcards.push(
					<div class="card productitem">
					  <img class="card-img-top" src={airmax} alt="Item" />
					  <div class="card-body">
					    <h5 class="card-title">{this.state.data[i].title}</h5>
					    <p class="card-text">${this.state.data[i].price}</p>
					    <a href="#" class="btn btn-primary">See more</a>
					  </div>
					</div>
				)
			}

			return(
				<div>
					<div class="container">
						{itemcards}
					</div>
				</div>
			)
		}
		else {
			return(
				<div>
					<p>Loading...</p>
				</div>
			)
		}
	}
}

export default Products;
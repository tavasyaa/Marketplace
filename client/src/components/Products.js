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
			return(
				<div>
					<div class="container">
						<div class="row">
							<div class="col-3">col-3</div>
							<div class="col-9">
								<div class="card" style={{maxWidth: 250}}>
								  <img class="card-img-top" src={airmax} alt="Card image cap" />
								  <div class="card-body">
								    <p class="card-text">{this.state.data[0].title}</p>
								  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
		else {
			return(
				<div></div>
			)
		}
	}
}

export default Products;
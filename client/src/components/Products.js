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
					<p>{this.state.data[0].title}</p>
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
import React from 'react';

class Products extends React.Component {
	state = {
		data: []
	};

	componentDidMount() {
		this.callBackend()
			.then(res => this.setState({ data: res.express }))
			.catch(err => console.log(err))
	}

	callBackend = async () => {
		const response = await fetch('/express_backend');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message) 
		}
		return body;
};

	render() {
		return(
			<div className="jumbotron" style={{margin: 0}}>
				<div className="col-sm-3">
					<h2>Search</h2>
				</div>
				<div className="col-sm-9">
					{console.log(this.state.data[0])}
				</div>
			</div>
		)
	}
}

export default Products;
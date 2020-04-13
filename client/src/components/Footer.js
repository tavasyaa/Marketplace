import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="jumbotron footer" style={{margin: 0, backgroundColor: "#000000"}}>
			  <p className="footertext">About</p>
			  <p className="footertext">Privacy Policy</p>
			  <p className="footertext">Terms & Conditions</p>
			</div>
		)
	}
}

export default Footer;
import React from 'react';
import airmax from '../images/airmax.png';
import $ from 'jquery';
/* make the jquery scrolling button */

class Homepage extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron homepagetopjumbotron" style={{margin: 0}}>
					<div className="row">
						<div className="col-sm-6">
						  <img src={airmax} className="homepageimg"/>
						</div>
						<div className="col-sm-6 homecolumn">
							<div className="hometext">
							  <h2 className="homebannertop">Garnett Shoe Company: the finest shoe products on the web</h2>
							  <p className="homebannertop"> Sourced from the finest manufacturers in the United States, our products mean that you can wear your style
							  and be assured of high quality at the same time.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="jumbotron jumbo2" id="jumbo2" style={{margin: 0}}>
					<div className="row">
						<div className="col-sm-6 homecolumn">
						  <h3 className="homebannertop">We guarantee:</h3>
						  <p className="homebannertop"> Sourced from the finest manufacturers in Illinois, our products mean that you can wear your style
						  and be assured of high quality at the same time.</p>
						</div>
						<div className="col-sm-6">
						  <img src={airmax} className="homepageimg"/>
						</div>
					</div>
				</div>
				<div className="jumbotron jumbo3" style={{margin: 0}}>
					<div className="row">
						<div className="col-sm-6">
						  <img src={airmax} className="homepageimg"/>
						</div>
						<div className="col-sm-6 homecolumn">
						  <h2 className="homebannertop">Garnett Shoe Company: the finest shoe products on the web</h2>
						  <p className="homebannertop"> Sourced from the finest manufacturers in Illinois, our products mean that you can wear your style
						  and be assured of high quality at the same time.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}	
}

export default Homepage;
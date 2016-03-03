import React from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import CircleNav from './CircleNav.jsx';
import Scroll from 'react-scroll';
import Footer from './Footer.jsx';

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;

class HomeBanner extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let divStyle = {
	      	"background": "url("+this.props.currentData.img+")",
	      	"backgroundSize":"cover",
	      	"backgroundPosition":"center center",
	      	"backgroundRepeat":"no-repeat",
	      	"width":this.props.width,
	      	"height": this.props.height
	    };

		return (
			<Element name="home" className="element">
				<div id="home" className="section text-center" style={divStyle}>
					<Jumbotron className="vertical-center jumbotron">
						<Grid className="no-pad">
							<Row fluid={true}>
								<Col sm={8} smOffset={2} className="text-center">
									{this.props.children}
								</Col>
							</Row>
						</Grid>
						<Link activeClass="active" to="detail" spy={true} smooth={true} offset={50} duration={500} >
							<div className="indicator text-center" onClick={this.props.indiClick}>
								<p className="text-white">Click to see the case study</p>
								<i className="fa fa-angle-down fa-4x text-white"></i>
							</div>
						</Link>
					</Jumbotron>
					<Footer></Footer>
		        </div>
	        </Element>
		)
	}

}

export default HomeBanner;
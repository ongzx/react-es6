import React from 'react';
import cx from 'classnames';
import {Grid, Col, Row} from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;

class HomeDetail extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let navClasses = cx({
      		'nav': true,
	      	'hidden': this.props.isHiddenNav
	    });

		let sectionClass = cx({
			'section':true,
			'text-center':true,
			'hidden': this.props.isHiddenDetail
		})

		return (
			<Element name="detail" className="element">
				<div id="home-detail" className={sectionClass}>
		          	<div className={navClasses} ref="navRef">
		            	<div className="nav-inner">
		            	</div>
		         	 </div>
		          
		          	<Grid>
			          	<Row>
			          		<Col sm={12} className="text-center info-title">
			          			<h2>{this.props.data.title}</h2>
			          		</Col>
			          	</Row>
			          	<Row className="info-row">
			          		<Col sm={3} className="text-center">
			          			<label>Industry:</label>
			          			<p>{this.props.data.industry}</p>
			          		</Col>
			          		<Col sm={3} className="text-center">
			          			<label>Services:</label>
			          			<p>{this.props.data.service}</p>
			          		</Col>
			          		<Col sm={3} className="text-center">
			          			<label>Client:</label>
			          			<p>{this.props.data.client}</p>
			          		</Col>
			          		<Col sm={3} className="text-center">
			          			<label>Share:</label>
			          			<p>{this.props.data.share}</p>
			          		</Col>
			          	</Row>
			          	<Row className="info-desc">
			          		<Col sm={10} smOffset={1} className="text-center">
			          			<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed commodo sapien ut facilisis sagittis. Nullam et libero eget orci viverra hendrerit non eget sem. Nulla ac varius ex, eleifend efficitur odio. Donec in gravida enim. Sed imperdiet rhoncus ipsum eget rutrum.
			          			</p>
			          			<label className="highlight">
			          				Revelator’s passion is music and their platform makes managing a music business simple, efficient, and well, manageable. We helped the SaaS revamp its visual identity and product, and created a marketing site to tell the story of one solution that really does it all. 
			          			</label>
			          			<div className="image"></div>
			          		</Col>
			          	</Row>
		          	</Grid>
		        </div>
		    </Element>
		)
	}
}

export default HomeDetail;
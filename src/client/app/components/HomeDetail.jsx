import React from 'react';
import cx from 'classnames';
import {Grid, Col, Row} from 'react-bootstrap';
import Scroll from 'react-scroll';
import Menu from './Menu.jsx';
import MenuItem from './MenuItem.jsx';

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;

class HomeDetail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			windowWidth:window.innerWidth,
			windowHeight: window.innerHeight+60
		}
		this.showLeft = this.showLeft.bind(this);
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {

	    Events.scrollEvent.register('begin', function(to, element) {
	      	console.log("begin", arguments);
	    });
	 
	    Events.scrollEvent.register('end', function(to, element) {
	      	console.log("end", arguments);
	    });

	    window.addEventListener('resize', this.handleResize);
  	}

  	componentWillUnmount() {
  		Events.scrollEvent.remove('begin');
    	Events.scrollEvent.remove('end');
	    window.removeEventListener('resize', this.handleResize);
  	}

  	handleResize() {
  		this.setState({
	      windowWidth: window.innerWidth,
	      windowHeight: window.innerHeight + 60
	    });
  	}

	showLeft () {
        this.refs.innerLeft.show();
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
		});

		let innerMenuStyle = {
			'width': this.state.windowWidth,
			'height':this.state.windowHeight
		}

		return (
			<Element name="detail" className="element">
				<div id="home-detail" className={sectionClass}>
					<div className="inner-menu" style={innerMenuStyle}>
						<Menu ref="innerLeft" alignment="left">
			                <MenuItem hash="/">Home</MenuItem>
			                <MenuItem hash="about">About Us</MenuItem>
			                <MenuItem hash="work">What We Do</MenuItem>
			                <MenuItem hash="clients">Clients</MenuItem>
			                <MenuItem hash="news">News</MenuItem>
			                <MenuItem hash="contact">Reach Us</MenuItem>
			            </Menu>
		            </div>
		          	<div className={navClasses} ref="navRef">
		            	<div className="nav-inner">
		            		<img src={'./public/assets/images/logo.png'} id="logo" />
		            		<button className="menu-btn" onClick={this.showLeft}><i className="fa fa-bars text-white"></i> Menu</button>
		            		<Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} >
		            			<div className="timeline text-left">
									<p className="text-white"><i className="fa fa-chevron-circle-left text-white"></i>Timeline</p>
								</div>
		            		</Link>
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
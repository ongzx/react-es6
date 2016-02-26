import React from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';


class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
		this.state = {visible: false};
	}

	show() {
		this.setState({visible:true});
		document.addEventListener("click", this.hide);
	}

	hide() {
		document.removeEventListener("click", this.hide);
        this.setState({ visible: false });
	}

	render() {
		
		return (
			<div className="menu">
	            <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>
		            <Jumbotron className="vertical-center jumbotron no-pad">
		            	<Grid fluid={true} className="menu-container">
							<Row>
								<Col sm={3} className="menu-left text-left">
									<img src={'./public/assets/images/logo.png'} id="menu-logo" />
									<img src={'./public/assets/images/grey-logo.png'} id="menu-grey" />
								</Col>
								<Col sm={9} className="menu-right text-left">
									{this.props.children}
								</Col>
							</Row>
						</Grid>
					</Jumbotron>
	            </div>
	        </div>
		)
	}

}

export default Menu;
import React from 'react';
import {Col} from 'react-bootstrap';
import cx from 'classnames';

class WorkItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isHover: false
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOut() {
		this.setState({
			isHover:false
		});
	}

	handleMouseOver() {
		this.setState({
			isHover:true
		});
	}

	render() {
		let itemClass = cx({
			'work-label':true,
	      	'show': this.state.isHover
	    });

		return (
			<Col sm={4} className="work-item" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
				<div className="overlay"></div>
				<label className={itemClass}>{this.props.data.title}</label>
			</Col>
		)

	}

}

export default WorkItem;
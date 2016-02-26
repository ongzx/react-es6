import React from 'react';

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footer">
				<small id="copyright">2015 &copy; Copyright. All rights reserved.</small>
		        <div className="footer-right">
		        	<img src={'./public/assets/images/grey-logo.png'} className="grey" />
		        	<a href={'#cookie'} className="text-link">Cookies</a>
		        	<a href={'#privacy'} className="text-link">Privacy</a>
		        </div>
	        </div>
		)
	}
}

export default Footer;
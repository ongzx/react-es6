import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link } from 'react-router';
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import MenuItem from './components/MenuItem.jsx';
import Work from './components/Work.jsx';
import About from './components/About.jsx';
import AboutWork from './components/AboutWork.jsx';
import Footer from './components/Footer.jsx';

class AppWrapper extends React.Component {
	
	constructor(props) {
	    super(props);
		this.showLeft = this.showLeft.bind(this);
	}

	showLeft () {
        this.refs.left.show();
    }

	render() {
	  	return (
	  		<div className="site-wrapper container-fluid no-pad">
	  			<img src={'./public/assets/images/logo.png'} id="logo" />
		      	<button className="menu-btn" onClick={this.showLeft}><i className="fa fa-bars text-white"></i> Menu</button>
		      	<Menu ref="left" alignment="left">
	                <MenuItem hash="/">Home</MenuItem>
	                <MenuItem hash="about">About Us</MenuItem>
	                <MenuItem hash="aboutwork">What We Do</MenuItem>
	                <MenuItem hash="work">Works</MenuItem>
	                <MenuItem hash="news">News</MenuItem>
	                <MenuItem hash="contact">Reach Us</MenuItem>
	            </Menu>
		        {this.props.children || <Home/>}
	      	</div>
	  	);
	}
}


class App extends React.Component {
	render() {
	  	return (
	  		<Router>
			    <Route path="/" component={AppWrapper}>
			      	<Route path="about" component={About}/>
			      	<Route path="aboutwork" component={AboutWork}/>
  					<Route path="work" component={Work}/>
  					<Route path="news" component={AppWrapper}/>
  					<Route path="contact" component={AppWrapper}/>
			    </Route>
		  	</Router>
	  	);
	}
}

render(<App/>, document.getElementById('app'));

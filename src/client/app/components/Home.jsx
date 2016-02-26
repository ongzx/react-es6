import React from 'react';
import HomeDetail from './HomeDetail.jsx';
import HomeBanner from './HomeBanner.jsx';
import CircleNav from './CircleNav.jsx';
import Scroll from 'react-scroll';

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;

class Home extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	      currentIndex: 0,
	      hiddenNav: true,
	      hiddenDetail: true,
	      selectedIndex: 0,
	      windowWidth: window.innerWidth,
	      windowHeight: window.innerHeight,
	      logo: "./public/assets/images/logo.png",
	      dataList: [
	        {	
	        	"id":1, 
	        	"img":"./public/assets/images/bg1.jpg", 
	        	"year":"1976",
	        	"title_img":"./public/assets/images/title1.png",
	        	"title":"Hello 1", 
	        	"industry":"Advertising",
	        	"service":"Travel & Tourism",
	        	"client":"Hooll Airways",
	        	"share":"Facebook, Twitter",
	        	"dotStyle":{ "left":0, "top":0}
	        },
	        {	
	        	"id":2, 
	        	"img":"./public/assets/images/bg2.jpg", 
	        	"year":"1986",
	        	"title_img":"./public/assets/images/title2.png",
	        	"title":"Hello 2", 
	        	"industry":"Advertising",
	        	"service":"Travel & Tourism",
	        	"client":"Haaaa Airways",
	        	"share":"Facebook, Twitter",
	        	"dotStyle":{ "left":0, "top":0}
	        },
	        {	
	        	"id":3, 
	        	"img":"./public/assets/images/bg1.jpg", 
	        	"year":"1996",
	        	"title_img":"./public/assets/images/title1.png",
	        	"title":"Hello 3", 
	        	"industry":"Advertising",
	        	"service":"Travel & Tourism",
	        	"client":"Kkaaa Airways",
	        	"share":"Facebook, Twitter",
	        	"dotStyle":{ "left":0, "top":0}
	        },
	        {	
	        	"id":4, 
	        	"img":"./public/assets/images/bg2.jpg", 
	        	"year":"2006",
	        	"title_img":"./public/assets/images/title2.png",
	        	"title":"Hello 4", 
	        	"industry":"Advertising",
	        	"service":"Travel & Tourism",
	        	"client":"Kkfffaa Airways",
	        	"share":"Facebook, Twitter",
	        	"dotStyle":{ "left":0, "top":0}
	        }

	      ]
	    };
	    this.handleResize = this.handleResize.bind(this);
	    this.handleScroll = this.handleScroll.bind(this);
	    this.indiClick = this.indiClick.bind(this);
	    this.toggleFn = this.toggleFn.bind(this);
  	}

  	handleResize() {
  		this.setState({
	      windowWidth: window.innerWidth,
	      windowHeight: window.innerHeight
	    });
  	}

  	handleScroll() {
  		let heightToShow = window.innerHeight - 60;

	    if (window.pageYOffset > heightToShow) {
	      this.setState({ hiddenNav: false });
	    }

	    if (window.pageYOffset < heightToShow) {
	      this.setState({ hiddenNav: true });
	    }
  	}

  	componentDidMount() {
	    this.interval = setInterval(this.slideshow.bind(this),8000);

	    Events.scrollEvent.register('begin', function(to, element) {
	      	console.log("begin", arguments);
	    });
	 
	    Events.scrollEvent.register('end', function(to, element) {
	      	console.log("end", arguments);
	    });

	    window.addEventListener('scroll', this.handleScroll);
	    window.addEventListener('resize', this.handleResize);
  	}

  	componentWillUnmount() {
  		Events.scrollEvent.remove('begin');
    	Events.scrollEvent.remove('end');
	    window.removeEventListener('scroll', this.handleScroll);
	    window.removeEventListener('resize', this.handleResize);
  	}

  	slideshow() {
  		
      	let currentIndex = this.state.currentIndex;
     	let total = this.state.dataList.length;

      	if ( currentIndex < total - 1)
		{
			this.setState({
		  		currentIndex: ++currentIndex
			});
		} else {
			this.setState({
		  		currentIndex: 0
			});
		}
  	}

  	indiClick() {
  		this.setState({
  			selectedIndex: this.state.currentIndex,
  			hiddenDetail: false
  		});
  		console.log(this.state.currentIndex);
  	}

  	toggleFn(index) {
	    this.setState({
	      	currentIndex: index
	    });
  	}

  	render() {
	    let index = this.state.currentIndex;
	    let selectedIndex = this.state.selectedIndex;
	    	   
	    return (
	      <div className="section-wrapper">
	        <HomeBanner currentData={this.state.dataList[index]} data={this.state.dataList} width={this.state.windowWidth} height={this.state.windowHeight} toggleFn={this.toggleFn} indiClick={this.indiClick}>
	        	<CircleNav dataList={this.state.dataList} currentData={this.state.dataList[index]} title={this.state.dataList[index].title} toggleFn={this.toggleFn}></CircleNav>
	        </HomeBanner>
	        <HomeDetail data={this.state.dataList[selectedIndex]} isHiddenNav={this.state.hiddenNav} isHiddenDetail={this.state.hiddenDetail}></HomeDetail>
	      </div>
	    )
  	}	
}

export default Home;
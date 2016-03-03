import React from 'react';

class CircleNav extends React.Component {

	constructor(props) {
		super(props);
		this.calculateDots = this.calculateDots.bind(this);
	}

	componentWillMount() {
	    this.calculateDots();
  	}

  	componentDidMount() {
	    window.addEventListener('resize', this.calculateDots);
  	}

  	componentWillUnmount() {
	    window.removeEventListener('resize', this.calculateDots);
  	}

  	calculateDots() {
  		console.log("resizing dots"+window.innerWidth);
  		let width = 0;
    	let height = 0;
    	let radius = 0;

  		if (window.innerWidth < 768) {
  			width = 250;
	    	height = 250;
	    	radius = 125;
  		} else {
  			width = 450;
	    	height = 450;
	    	radius = 225;
  		}

	    let angle = 11;
	    let total = this.props.dataList.length;
	    let step = (2*Math.PI) / total;
	    let dot_width = 5;

	    for (let i = 0; i< total; i++){
	      	let x = Math.round(width/2 + radius * Math.cos(angle) - dot_width/2);
	      	let y = Math.round(height/2 + radius * Math.sin(angle) - dot_width/2);
	      	this.props.dataList[i].dotStyle.left = x;
	      	this.props.dataList[i].dotStyle.top = y;
	      	angle += step;
	    }
  	}


	render() {

		return (
			<div className="circle-wrapper">
                <div className="outer-circle">
                  	<img src={this.props.currentData.title_img} className="img-responsive title-img" />
	                  	{	
	                  		this.props.dataList.map(function(item,i){
	                    	let dotClick = this.props.toggleFn.bind(null, i);
	                    	return <div key={i} onClick={dotClick} className="dot" style={item.dotStyle}></div>;
	                  	}, this)}
                  	<div className="middle-circle">
               	 		<div className="inner-circle"></div>
                  	</div>
                </div>
          	</div>
		)
	}

}

export default CircleNav;
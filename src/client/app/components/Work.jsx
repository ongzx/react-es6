import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import WorkItem from './WorkItem.jsx';
import Footer from './Footer.jsx';

class Work extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			workList: [
				{ id:1, title: "Work 1" },
				{ id:2, title: "Work 2" },
				{ id:3, title: "Work 3" },
				{ id:4, title: "Work 4" },
				{ id:5, title: "Work 5" },
				{ id:6, title: "Work 6" },
				{ id:7, title: "Work 7" },
				{ id:8, title: "Work 8" },
				{ id:9, title: "Work 9" }
			]
		}
	}

	render() {
		
		return (
			<div className="section-wrapper">
				<Grid fluid={true}>
					<Row>
						{
							this.state.workList.map( item => {
								return <WorkItem key={item.id} data={item}></WorkItem>
							})
						}
					</Row>
				</Grid>
				<Footer></Footer>
			</div>
		)

	}
}

export default Work;
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import WorkItem from './WorkItem.jsx';
import Footer from './Footer.jsx';

class Work extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			workList: [
				{ id:1, title: "Journey", subtitle: "Qatar Airways" },
				{ id:2, title: "F&B", subtitle: "Qatar Airways" },
				{ id:3, title: "Premium Lounge", subtitle: "Qatar Airways" },
				{ id:4, title: "Premium Class", subtitle: "Qatar Airways" },
				{ id:5, title: "Destination", subtitle: "Qatar Airways" },
				{ id:6, title: "From Africa to Asia", subtitle: "Qatar Airways" },
				{ id:7, title: "From East Asia to Europe", subtitle: "Qatar Airways" },
				{ id:8, title: "From Europe to Bali", subtitle: "Qatar Airways" },
				{ id:9, title: "Private Jet Service", subtitle: "Qatar Executive" },
				{ id:10, title: "Singapore Girl", subtitle: "Singapore Airlines" },
				{ id:11, title: "First to Fly A380", subtitle: "Singapore Airlines" },
				{ id:12, title: "Destination First to Fly A380", subtitle: "Singapore Airlines" },
				{ id:13, title: "F1", subtitle: "Audi" },
				{ id:14, title: "A8 Tunnel", subtitle: "Audi" },
				{ id:15, title: "A4 Sound", subtitle: "Audi" },
				{ id:16, title: "", subtitle: "Mercedes Benz" },
				{ id:17, title: "", subtitle: "Raffles Hotel" }
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
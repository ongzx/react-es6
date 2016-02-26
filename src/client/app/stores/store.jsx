import alt from '../alt';
import MyActions from '../actions/action';

class MyStore {
	constructor() {
		this.bindListeners({
			updateLikes: MyActions.updateLikes
		});

		this.state = {
			likes: []
		};
	}

	updateLikes(like) {
		this.setState({likes: this.state.likes.concat(like)});
	}
}

export default alt.createStore(MyStore, 'MyStore');
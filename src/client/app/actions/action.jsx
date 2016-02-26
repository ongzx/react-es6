import alt from '../alt';

class MyActions {
	updateLikes(id, count) {
		return {id, count}
	}
}

export default alt.createActions(MyActions);
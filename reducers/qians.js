const qians = (state = [], action) => {
	switch (action.type) {
		case 'INIT_QIANS':
			return action.qians;
		default:
			return state;
	}
}

export default qians
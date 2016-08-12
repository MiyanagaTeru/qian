// a place to store inputs temporally
const newQian = (state = {}, action) => {
	switch (action.type) {
		case 'EDIT_NEW_QIAN':
			return {
				...state,
				...action.data
			};
		case 'ADD_QIAN':
			return {};
		default:
			return state;
	}
}

export default newQian
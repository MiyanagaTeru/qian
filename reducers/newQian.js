// a place to store inputs temporally
const newQian = (state = {}, action) => {
	switch (action.type) {
		case 'EDIT_NEW_QIAN':
			return {
				...state,
				...action.data
			}
		default:
			return state;
	}
}

export default newQian
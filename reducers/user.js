const user = (state = { name: 'teru' }, action) => {
	switch (action.type) {
		case 'SET_USER_NAME':
			return {
				...state,
				name: action.name
			}
		default:
			return state;
	}
}

export default user
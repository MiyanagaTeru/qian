import moment from 'moment'

const qians = (state = [], action) => {
	switch (action.type) {
		case 'INIT_QIANS':
			return action.qians;
		case 'ADD_QIAN':
			return [
				...state,
				{
					...action.newQian,
					id: state.length,
					status: 'waiting',
					createDate: moment().format(),
					completeDate: '',
					deleteDate: '',
				}
			];
		default:
			return state;
	}
}

export default qians
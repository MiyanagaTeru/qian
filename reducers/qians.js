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
					id: state[state.length-1].id + 1,
					status: 'waiting',
					createDate: moment().format(),
					startDate: '',
					completeDate: '',
					deleteDate: '',
				}
			]
		case 'UPDATE_QIAN':
			const dateToChange = {
				current: 'startDate',
				done: 'completeDate',
				deleted: 'deleteDate'
			}
			return state.map( qian => {
				return qian.id === action.id ?
					{
						...qian,
						status: action.status,
						[dateToChange[action.status]]: moment().format()
					} :
					qian
				}

			)
		default:
			return state;
	}
}

export default qians
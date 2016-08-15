import actions from '../actions'

const saveDataMiddleware = store => next => action => {
	if (['UPDATE_QIAN', 'ADD_QIAN'].indexOf(action.type) !== -1) {
		let result = next(action)
		store.dispatch(actions.asyncSaveQians()).then(
			() => result
		)
	} else {
		return next(action)
	}
}

export default saveDataMiddleware
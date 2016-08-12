const saveDataMiddleware = store => next => action => {
	if (['UPDATE_QIAN', 'ADD_QIAN'].indexOf(action.type) !== -1) {
		let result = next(action)
		return result
	}
	return next(action)
}

export default saveDataMiddleware
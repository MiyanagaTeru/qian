import { combineReducers } from 'redux'

import user from './user'
import qians from './qians'
import newQian from './newQian'
import eStatus from './eStatus'

const reducers = combineReducers({
	user,
	qians,
	newQian,
	eStatus
})

export default reducers
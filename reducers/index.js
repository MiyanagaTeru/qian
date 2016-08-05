import { combineReducers } from 'redux'

import user from './user'
import qians from './qians'
import newQian from './newQian'
import visibleContainer from './visibleContainer'

const reducers = combineReducers({
	user,
	qians,
	newQian,
	visibleContainer
})

export default reducers
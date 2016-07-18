import { combineReducers } from 'redux'

import user from './user'
import qians from './qians'
import visibleContainer from './visibleContainer'

const reducers = combineReducers({
	user,
	qians,
	visibleContainer
})

export default reducers
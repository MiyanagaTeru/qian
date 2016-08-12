import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import saveDataMiddleware from './utils/saveDataMiddleware'

import qianApp from './reducers'
import App from './components/App'
import bootstrap from './bootstrap'

let store = createStore(
	qianApp,
	compose(
		applyMiddleware(thunk, saveDataMiddleware),
		window.devToolsExtension && window.devToolsExtension()
	)
)

bootstrap(store).then(
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
)

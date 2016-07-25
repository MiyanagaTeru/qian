import React from 'react'

import Waiting from '../containers/Waiting';
import Current from '../containers/Current';
import Done from '../containers/Done';

import styles from './App.css';

class App extends React.Component {
	render () {
		return (
				<div className={ styles.wrapper }>
					<Waiting />
					<Current />
					<Done />
				</div>
			)
	}
}

export default App

import React from 'react'

import Waiting from '../containers/Waiting';
import Current from '../containers/Current';
import Done from '../containers/Done';
import Nav from '../containers/Nav';

import reset from './reset.css';
import styles from './App.css';

class App extends React.Component {
	render () {
		return (
			<div className={ styles.wrapper }>
				<Nav />
				<div className={styles.content}>
					<Waiting />
					<Current />
					<Done />
				</div>
			</div>
		)
	}
}

export default App

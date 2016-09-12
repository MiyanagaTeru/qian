import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions';

import styles from './Nav.css';

const Nav = ({ updateVisibleContainer }) => (
	<div className={styles.wrapper}>
		<div
			className={styles.item}
			onClick={ () => updateVisibleContainer('Waiting') }
		>
			Waiting
		</div>
		<div
			className={styles.item}
			onClick={ () => updateVisibleContainer('Current') }
		>
			Current
		</div>
		<div
			className={styles.item}
			onClick={ () => updateVisibleContainer('Done') }
		>
			Done
		</div>
	</div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
	updateVisibleContainer: visibleContainer => dispatch(actions.updateVisibleContainer(visibleContainer))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
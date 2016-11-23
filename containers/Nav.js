import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions';

import styles from './Nav.css';

const Nav = ({
	visibleContainer,
	updateVisibleContainer
}) => (
	<div className={styles.wrapper}>
		<div
			className={`${styles.item} ${visibleContainer === 'Waiting' && styles.selectedItem}`}
			onClick={ () => updateVisibleContainer('Waiting') }
		>
			签筒
		</div>
		<div
			className={`${styles.item} ${visibleContainer === 'Current' && styles.selectedItem}`}
			onClick={ () => updateVisibleContainer('Current') }
		>
			进行中
		</div>
		<div
			className={`${styles.item} ${visibleContainer === 'Done' && styles.selectedItem}`}
			onClick={ () => updateVisibleContainer('Done') }
		>
			已完成
		</div>
	</div>
)

const mapStateToProps = state => ({
	visibleContainer: state.visibleContainer
})

const mapDispatchToProps = dispatch => ({
	updateVisibleContainer: visibleContainer => dispatch(actions.updateVisibleContainer(visibleContainer))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';

import styles from './Nav.css';

const Nav = ({
	visibleContainer,
	updateEStatus
}) => (
	<div className={styles.wrapper}>
		<div
			className={`${styles.item} ${visibleContainer === 'Waiting' && styles.selectedItem}`}
			onClick={ () => updateEStatus('visibleContainer', 'Waiting') }
		>
			签筒
		</div>
		<div
			className={`${styles.item} ${visibleContainer === 'Current' && styles.selectedItem}`}
			onClick={ () => updateEStatus('visibleContainer', 'Current') }
		>
			进行中
		</div>
		<div
			className={`${styles.item} ${visibleContainer === 'Done' && styles.selectedItem}`}
			onClick={ () => updateEStatus('visibleContainer', 'Done') }
		>
			已完成
		</div>
	</div>
);

const mapStateToProps = state => ({
	visibleContainer: state.eStatus.visibleContainer
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
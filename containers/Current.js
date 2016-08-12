import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions'
import Qian from '../components/Qian';

import styles from './containers.css'

const Current = ({ visibleContainer, qians, updateQian }) =>
	<div className={visibleContainer === 'Current' ? '': styles.hidden}>
		{
			qians.map((qian, i) =>
				<Qian key={i} qian={qian} updateQian={updateQian}/>
			)
		}
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'current'),
	visibleContainer: state.visibleContainer
})

const mapDispatchToProps = dispatch => ({
	updateQian: (id, status) => dispatch(actions.updateQian(id, status))
})

export default connect(mapStateToProps, mapDispatchToProps)(Current)
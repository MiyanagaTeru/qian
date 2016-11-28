import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import actions from '../actions'
import Qian from '../components/Qian';

import styles from './containers.css'

const Done = ({ qians, eStatus, updateQian, updateEStatus }) =>
	<div className={eStatus.visibleContainer === 'Done' ? '': styles.hidden}>
		{
			qians.map((qian, i) =>
				<Qian key={i} qian={qian} eStatus={eStatus} updateQian={updateQian} updateEStatus={updateEStatus}/>
			)
		}
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'done'),
	eStatus: state.eStatus
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Done)
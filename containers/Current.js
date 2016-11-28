import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions'
import Qian from '../components/Qian';

import styles from './containers.css'

const Current = ({ eStatus, qians, updateQian, updateEStatus }) =>
	<div className={[
		eStatus.visibleContainer === 'Current' ? '': styles.hidden
	].join(' ')}>
		{
			qians.map((qian, i) =>
				<Qian key={i} qian={qian} eStatus={eStatus} updateQian={updateQian} updateEStatus={updateEStatus}/>
			)
		}
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'current'),
	eStatus: state.eStatus
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Current)
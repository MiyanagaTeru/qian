import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import actions from '../actions'
import Qian from '../components/Qian';

import styles from './containers.css'

const Current = ({ eStatus, qians, updateQian, updateEStatus }) =>
	<div className={[
		eStatus.visibleContainer === 'Current' ? '': styles.hidden
	].join(' ')}>
		{
			qians.length < 1 ?
				<div className={styles.placeholder}>
					没有进行中的心愿
				</div> : ''
		}
		<ReactCSSTransitionGroup
			transitionName="changeStatus"
			transitionEnterTimeout={1}
			transitionLeaveTimeout={500}>
			{
				qians.map(qian =>
					<Qian key={qian.id} qian={qian} eStatus={eStatus} updateQian={updateQian} updateEStatus={updateEStatus}/>
				)
			}
		</ReactCSSTransitionGroup>
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'current'),
	eStatus: state.eStatus
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Current)
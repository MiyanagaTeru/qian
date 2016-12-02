import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import actions from '../actions'
import ChouQian from '../components/ChouQian';
import Qian from '../components/Qian';

import styles from './containers.css'

const Current = ({ eStatus, qians, waitingIds, updateQian, updateEStatus }) =>
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
		{
			waitingIds.length > 0 &&
			<ChouQian
				chouing={eStatus.chouing}
				onClick={ e => {
					updateEStatus('chouing', 1);
					let count = 2;
					let animating = setInterval(
						() => {
							if (count > 6) {
								clearInterval(animating);
								count = 2;
								updateEStatus('chouing', false);
								const rdmId = waitingIds[Math.floor((Math.random() * waitingIds.length))];
								updateQian(rdmId, 'current');
								updateEStatus(`qian${rdmId}`, '');
							} else {
								updateEStatus('chouing', count++)
							}
						},
						300
					);
			}}/>
		}
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'current'),
	waitingIds: state.qians.filter(qian => qian.status === 'waiting').map(qian => qian.id),
	eStatus: state.eStatus
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Current)
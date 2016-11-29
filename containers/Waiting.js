import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import actions from '../actions';
import AddQian from '../components/AddQian';
import Qian from '../components/Qian';

import styles from './containers.css';

const Waiting = ({
	eStatus,
	qians,
	newQian,
	editNewQian,
	addQian,
	updateQian,
	updateEStatus
}) =>
	<div className={eStatus.visibleContainer === 'Waiting' ? '': styles.hidden}>
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
		<AddQian
			onChange={ e => editNewQian({[e.target.name]: e.target.value}) }
			onSubmit={ () => addQian(newQian) }
			newQian={newQian}
		/>
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'waiting'),
	newQian: state.newQian,
	eStatus: state.eStatus
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Waiting)
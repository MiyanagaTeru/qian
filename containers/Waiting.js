import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import actions from '../actions'
import AddQian from '../components/AddQian'
import Qian from '../components/Qian'

import styles from './containers.css'

const Waiting = ({ eStatus, qians, newQian, onChange, onSubmit, updateQian, updateEStatus }) =>
	<div className={eStatus.visibleContainer === 'Waiting' ? '': styles.hidden}>
		{
			qians.map((qian, i) =>
				<Qian key={i} qian={qian} eStatus={eStatus} updateQian={updateQian} updateEStatus={updateEStatus}/>
			)
		}
		<AddQian onChange={onChange} onSubmit={() => onSubmit(newQian) } newQian={newQian} />
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'waiting'),
	newQian: state.newQian,
	eStatus: state.eStatus
})

const mapDispatchToProps = dispatch => ({
	onChange: (name, value) => dispatch(actions.editNewQian({[name]:value})),
	onSubmit: newQian => dispatch(actions.addQian(newQian)),
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Waiting)
import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions'
import AddQian from '../components/AddQian'
import Qian from '../components/Qian'

import styles from './containers.css'

const Waiting = ({ visibleContainer, qians, newQian, onChange, onSubmit, updateQian }) =>
	<div className={visibleContainer === 'Waiting' ? '': styles.hidden}>
		Qians waiting.
		{
			qians.map((qian, i) =>
				<Qian key={i} qian={qian} updateQian={updateQian} />
			)
		}
		<AddQian onChange={onChange} onSubmit={() => onSubmit(newQian) } newQian={newQian} />
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'waiting'),
	newQian: state.newQian,
	visibleContainer: state.visibleContainer
})

const mapDispatchToProps = dispatch => ({
	onChange: (name, value) => dispatch(actions.editNewQian({[name]:value})),
	onSubmit: newQian => dispatch(actions.addQian(newQian)),
	updateQian: (id, status) => (dispatch(actions.updateQian(id, status)), dispatch(actions.asyncSaveQians()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Waiting)
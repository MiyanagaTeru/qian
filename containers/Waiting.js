import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions'
import AddQian from '../components/AddQian'

const Waiting = ({ onChange, onSubmit, newQian}) =>
	<div>
		Qians waiting.
		<AddQian onChange={onChange} onSubmit={() => onSubmit(newQian)}/>
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'waiting'),
	newQian: state.newQian
})

const mapDispatchToProps = dispatch => ({
	onChange: (name, value) => dispatch(actions.editNewQian({[name]:value})),
	onSubmit: newQian => dispatch(actions.addQian(newQian))
})

export default connect(mapStateToProps, mapDispatchToProps)(Waiting)
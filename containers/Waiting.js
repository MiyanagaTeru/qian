import React from 'react'
import { connect } from 'react-redux'

const Waiting = () =>
	<div>
		Qians waiting.
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'waiting')
})

const mapDispatchToProps = dispatch => ({
	onButtonClick: data => {
		return false
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Waiting)
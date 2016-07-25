import React from 'react'
import { connect } from 'react-redux'

const Done = () =>
	<div>
		Qians done.
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'done')
})

const mapDispatchToProps = dispatch => ({
	onButtonClick: data => {
		return false
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Done)
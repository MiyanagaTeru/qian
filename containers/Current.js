import React from 'react'
import { connect } from 'react-redux'

const Current = () =>
	<div>
		Qians current.
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'current')
})

const mapDispatchToProps = dispatch => ({
	onButtonClick: data => {
		return false
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Current)
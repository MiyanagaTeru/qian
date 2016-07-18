import React from 'react'
import { connect } from 'react-redux'

const Menu = () =>
	<div>
		I am a menu.
	</div>


const mapStateToProps = state => ({
	data: state
})

const mapDispatchToProps = dispatch => ({
	onButtonClick: data => {
		return false
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
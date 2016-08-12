import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions'


const Nav = ({ updateVisibleContainer }) => (
	<div>
		<span onClick={ () => updateVisibleContainer('Waiting') }> Waiting </span>
		<span onClick={ () => updateVisibleContainer('Current') }> Current </span>
		<span onClick={ () => updateVisibleContainer('Done') }> Done </span>
	</div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
	updateVisibleContainer: visibleContainer => dispatch(actions.updateVisibleContainer(visibleContainer))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
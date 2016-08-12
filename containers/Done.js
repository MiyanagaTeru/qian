import React from 'react'
import { connect } from 'react-redux'

import Qian from '../components/Qian';

import styles from './containers.css'

const Done = ({ qians, visibleContainer }) =>
	<div className={visibleContainer === 'Done' ? '': styles.hidden}>
		Qians done.
		{
			qians.map((qian, i) =>
				<Qian key={i} qian={qian} />
			)
		}
	</div>


const mapStateToProps = state => ({
	qians: state.qians.filter(qian => qian.status === 'done'),
	visibleContainer: state.visibleContainer
})

const mapDispatchToProps = dispatch => ({
	onButtonClick: data => {
		return false
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Done)
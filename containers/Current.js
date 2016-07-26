import React from 'react';
import { connect } from 'react-redux';

import Qian from '../components/Qian';

const Current = ({ qians }) =>
	<div>
		{
			qians.map((qian, i) =>
				<Qian key={i} qian={qian} />
			)
		}
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
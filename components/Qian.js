import React from 'react';

import styles from './Qian.css';

const Qian = ({ qian, updateQian }) => (
	<div>
		{
			qian.status === 'waiting' ?
				<span onClick={ e => updateQian(qian.id, 'deleted') }> X </span> :
				''
		}
		<div className={[
				styles.wrapper,
				styles[qian.status]
			].join(' ')}>
			<div className={styles.front}>
				{ qian.title }
			</div>
			<div className={styles.back}>
				{ qian.description }
			</div>
		</div>
		{
			qian.status === 'waiting' ?
				<span onClick={ e => updateQian(qian.id, 'current') }> + </span> :
				qian.status === 'current' ?
					<span onClick={ e => updateQian(qian.id, 'done') }> Done </span> :
					''
		}
	</div>
)

export default Qian;

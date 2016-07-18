import React from 'react';

import styles from './Qian.css';

const Qian = ({ qian }) => (
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
)

export default Qian;

import React from 'react';
import styles from './Qian.css';

const ChouQian = ({
	chouing = false,
	onClick = () => {}
}) =>
	<div className={styles.wrapper}>
		{
			chouing ?
				<div
					className={styles.chouing}
					>
					{
						`抽签中${'.'.repeat(chouing)}`
					}
				</div> :
				<div
					className={styles.chouQian}
					onClick={onClick}
					>
					抽签
				</div>

		}
	</div>;

export default ChouQian;
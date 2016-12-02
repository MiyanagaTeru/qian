import React from 'react';

import styles from './Qian.css';

const Qian = ({ qian, updateQian, eStatus, updateEStatus }) => (
	<div className={styles.wrapper}>
		{
			qian.status === 'waiting' ?
				<div
					className={styles.cancel}
					onClick={ e => updateQian(qian.id, 'deleted') }>
					取消
				</div> :
				<div className={styles.void}></div>
		}
		<div
			className={[
				styles.qianWrapper,
				eStatus[`qian${qian.id}`] === 'back-up' ? styles['back-up'] : ''
			].join(' ')}
			>
			<div
				onClick={ e => updateEStatus(`qian${qian.id}`, 'back-up') }
				className={styles.front}>
				{ qian.title }
			</div>
			<div
				onClick={ e => updateEStatus(`qian${qian.id}`, '') }
				className={styles.back}>
				{ qian.description }
			</div>
		</div>
		{
			qian.status === 'waiting' ?
				<div
					className={styles.add}
					onClick={ e => {
						updateQian(qian.id, 'current');
						updateEStatus(`qian${qian.id}`, '');
					}}>
					添加
				</div> :
				qian.status === 'current' ?
					<div
						className={styles.done}
						onClick={ e => {
							updateQian(qian.id, 'done');
							updateEStatus(`qian${qian.id}`, '');
						}}>
						完成
					</div> :
					<div className={styles.void}></div>
		}
	</div>
)

export default Qian;

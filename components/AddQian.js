import React from 'react';
import styles from './Qian.css';

const AddQian = ({onChange, onSubmit, newQian}) => (
	<form
		className={styles.wrapper}
		onSubmit={ e => {
			e.preventDefault();
			onSubmit();
		}}
		>
		<div className={styles.void}></div>
		<div className={styles.inputsWrapper}>
			<div className={styles.inputWrapper}>
				<input
					type='text'
					name='title'
					onChange={onChange}
					value={newQian.title || ''}
					required
					className={styles.input}
					placeholder='添加一个新的心愿……'
				/>
			</div>
			<div className={styles.inputWrapper}>
				<input
					type='text'
					name='description'
					onChange={onChange}
					value={newQian.description || ''}
					className={styles.input}
					placeholder={newQian.title && '背面写什么呢？（选填）'}
				/>
			</div>
		</div>
		<div className={styles.add}>
			<input
				className={styles.inputSubmit}
				type='submit'
				value='确定'
			/>
			确定
		</div>
	</form>
)

export default AddQian
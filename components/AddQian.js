import React from 'react';

const AddQian = ({onChange, onSubmit, newQian}) => (
	<form onSubmit={ e => (e.preventDefault(), onSubmit())}>
		<input
			type='text'
			name='title'
			onChange={ e =>
				onChange( e.target.name, e.target.value)
			}
			value={newQian.title}
			required
		/>
		<input
			type='text'
			name='description'
			onChange={ e =>
				onChange( e.target.name, e.target.value)
			}
			value={newQian.description}
		/>
		<input
			type='submit'
			value='submit'
			/>
	</form>
)

export default AddQian
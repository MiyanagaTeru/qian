import React from 'react';

const AddQian = ({onChange, onSubmit}) => (
	<form onSubmit={ e => (e.preventDefault(), onSubmit())}>
		<input
			type='text'
			name='title'
			onChange={ e =>
				onChange( e.target.name, e.target.value)
			}
			required
		/>
		<input
			type='text'
			name='description'
			onChange={ e =>
				onChange( e.target.name, e.target.value)
			}
		/>
		<input
			type='submit'
			value='submit'
			/>
	</form>
)

export default AddQian
import validatedFetch from '../utils/validatedFetch';

const asyncInitQians = () =>
	(dispatch, getState) =>
		validatedFetch(
			getState,
			'initQians/?user=' + getState().user.name,
			{
				method: 'post'
			}
		).then(
			response =>
				dispatch({
					type: 'INIT_QIANS',
					qians: response
				})
		)

export default asyncInitQians
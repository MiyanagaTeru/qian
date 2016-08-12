import validatedFetch from '../utils/validatedFetch';

const asyncSaveQians = () =>
	(dispatch, getState) =>
		validatedFetch(
			getState,
			'saveQians/?user=' + getState().user.name,
			{
				method: 'post',
				body: JSON.stringify(getState().qians)
			}
		)

export default asyncSaveQians
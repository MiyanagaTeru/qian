import actions from './actions';

const bootstrap = store =>
	store.dispatch(actions.asyncInitQians())

export default bootstrap
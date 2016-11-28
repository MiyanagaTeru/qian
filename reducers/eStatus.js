const initialState = {
	visibleContainer: 'Current'
};

const eStatus = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_E_STATUS':
      return {
      	...state,
      	[action.element]: action.status
      };
    default:
      return state
  }
};

export default eStatus;

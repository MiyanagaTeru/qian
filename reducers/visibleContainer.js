const visibleContainer = (state = 'Current', action) => {
  switch (action.type) {
    case 'SET_VISIBLE_CONTAINER':
      return action.container
    default:
      return state
  }
}

export default visibleContainer

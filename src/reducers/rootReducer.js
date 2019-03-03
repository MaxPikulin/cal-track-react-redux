const INITIAL_STATE = {
  counter: 0,
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'DEC':
    return {
      ...state,
      counter: state.counter - 1,
    }
    default:
      return state;
  }
}

export default rootReducer;
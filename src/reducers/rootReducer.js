const INITIAL_STATE = {
  counter: 0,
  calsIn100: '',
  grams: '',
  myCals: '',
};

function rootReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_C100':
      return {
        ...state,
        calsIn100: payload,
      }
    case 'CHANGE_GRAMS':
      const { calsIn100, myCals } = state;
      if (calsIn100) {
        return {
          ...state,
          grams: payload,
          myCals: calsIn100 + payload,
        }
      }
      return {
        ...state,
        grams: payload,
      }
    case 'CHANGE_MYCALS':
      return {
        ...state,
        myCals: payload,
      }
      
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
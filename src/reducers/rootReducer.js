const INITIAL_STATE = {
  counter: 0,
  calsIn100: '',
  grams: '',
  myCals: '',
};

function rootReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  const { calsIn100 } = state;
  switch (type) {
    case 'CHANGE_C100':
      return {
        ...state,
        calsIn100: payload,
      }
    case 'CHANGE_GRAMS':
      if (calsIn100) {
        return {
          ...state,
          grams: payload,
          myCals: Math.ceil(calsIn100 * payload / 100),
        }
      }
      return {
        ...state,
        grams: payload,
      }
    case 'CHANGE_MYCALS':
    if (calsIn100 && payload!==0) {
      return {
        ...state,
        grams: Math.floor(100 / (calsIn100 / payload)),
        myCals: payload,
      }
    }
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
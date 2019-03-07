const INITIAL_STATE = {
  counter: 0,
  calsIn100: 0,
  grams: 0,
  myCals: 0,
  noteCals: 0,
  todayList: [],
};

function rootReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  const { calsIn100,todayList } = state;
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
      if (calsIn100 && payload !== 0) {
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
      
    case 'CHANGE_NOTE':
      return {
        ...state,
        noteCals: payload,
      }
      
    case 'ADD_TODAY_ENTRY':
      return {
        ...state,
        todayList: todayList.concat(payload),
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
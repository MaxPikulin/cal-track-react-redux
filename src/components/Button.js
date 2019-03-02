import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INC':
      return state + 1 > 100 ? 100 : state + 1;
    case 'DEC':
      return state - 1 < 0 ? 0 : state - 1;
    default:
      return state;
  }
}
const handleClick = (e) => {
  if (e.ctrlKey) store.dispatch({ type: 'DEC' })
  else store.dispatch({ type: 'INC' });
}

store.subscribe(() => {
  console.log(store.getState());
})


class Button extends Component {

  render() {
    return (
      <div>
        <Provider store={store}><button onClick={handleClick}>Click</button></Provider>
      </div>
    );
  }
}

export default Button;
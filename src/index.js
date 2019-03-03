import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  const storage = store.getState();
  localStorage.setItem('ct2.0', JSON.stringify(storage));
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

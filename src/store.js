import React from 'react';
import ReactDOM from 'react-dom';

// redux specific
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

import TodoApp from './TodoApp';

// store gets updated by the todoApp reducer
let store = createStore(rootReducer);

// store makes App re-render when state changes
store.subscribe(() => {
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
  )
});

export default store;

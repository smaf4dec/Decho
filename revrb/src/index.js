import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/App';
import {createStore} from 'redux';

//TODO:STORE-->GLOBALIZED STATE

//TODO:ACTION-->INCREMENT
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//TODO:REDUCER
const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

//Display in console
store.subscribe(() => console.log(store.getState()));


//TODO:DISPATCH
store.dispatch(increment());

store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <UserForm /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

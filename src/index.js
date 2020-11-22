import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ShoesData from './data/shoes';
import BagData from './data/bag';
import capData from './data/cap'
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let Data = ShoesData;
let Data2 = BagData;
let Data3 = capData;
let UserCart = [];
function CapFn(state=Data3) {
  return state
}


function ShoesFn(state=Data) {
  return state;
}

function BagFn(state=Data2) {
  return state
}

function UserArray (state=UserCart , action){
  if(action.type === 'add'){
    let copy = [...state];
    copy[action.index].count += 1;
    return copy;
  }else if(action.type === 'subtract'){
    let copy = [...state];
    if(copy[action.index].count>0){
      copy[action.index].count -= 1;
    }else{
      copy[action.index].count = 0;
    }
    
    return copy;
  }else if(action.type === 'select'){
    let copy = [...state];
    action.payload.map(function(a,i){
      return(copy.push(a))
    })
    console.log(copy)
    return copy
  }else{
    return state
  }
}

let store = createStore(combineReducers({ShoesFn, BagFn, CapFn, UserArray}));

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/portfolio01"> */}
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>  
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

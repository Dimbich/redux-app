import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import * as actions from './actions';
import reducer from './reducer';
import Counter from './counter';


const store = createStore(reducer);
const {dispatch} = store;
const {inc, dec, clean} = bindActionCreators(actions,dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const cleanDispatch = bindActionCreators(clean, dispatch);


// document.getElementById('inc').addEventListener('click', inc);

// document.getElementById('dec').addEventListener('click', dec)

// document.getElementById('clear').addEventListener('click',clean);    

 const update=()=>{
   ReactDOM.render(<Counter 
      counter={store.getState()}
      inc = {inc}
      dec = {dec}
      clean = {clean} 
      />,
      document.getElementById('root'));
 }

 store.subscribe(update);

 update();


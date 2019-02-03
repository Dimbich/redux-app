import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';
import App from './componets/app';


const store = createStore(reducer);

//const {inc, dec, clean} = bindActionCreators(actions,dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const cleanDispatch = bindActionCreators(clean, dispatch);


// document.getElementById('inc').addEventListener('click', inc);

// document.getElementById('dec').addEventListener('click', dec)

// document.getElementById('clear').addEventListener('click',clean);    


ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

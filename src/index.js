import {createStore, bindActionCreators} from 'redux';
import * as actions from './actions';
import reducer from './reducer';

const store = createStore(reducer);
const {dispatch} = store;
const res = document.getElementById('counter');

const {inc, dec, clean} = bindActionCreators(actions,dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const cleanDispatch = bindActionCreators(clean, dispatch);


document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec)

document.getElementById('clear').addEventListener('click',clean);    

 const update=()=>{
    res.innerHTML = store.getState();
 }

 store.subscribe(update);
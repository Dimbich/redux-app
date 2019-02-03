import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'CLEAN':
            return 0;    
        default:
            return state;
    }
}

const inc =()=>({type: 'INC'});
const dec =()=>({type:'DEC'});
const clean=(value)=>({type: 'CLEAN'});

const store = createStore(reducer);

const res = document.getElementById('counter');

document.getElementById('inc').addEventListener('click',()=>{
    store.dispatch(inc());    
})

document.getElementById('dec').addEventListener('click',()=>{
    store.dispatch(dec());    
})

document.getElementById('clear').addEventListener('click',()=>{
    store.dispatch(clean());    
})

 const update=()=>{
    res.innerHTML = store.getState();
 }

 store.subscribe(update);
import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.value;    
        default:
            return 0;
    }
}

const inc =()=>({type: 'INC'});
const dec =()=>({type:'DEC'});
const rnd=(value)=>({type: 'RND',value});

const store = createStore(reducer);

const res = document.getElementById('counter');

document.getElementById('inc').addEventListener('click',()=>{
    store.dispatch(inc());    
})

document.getElementById('dec').addEventListener('click',()=>{
    store.dispatch(dec());    
})

document.getElementById('rnd').addEventListener('click',()=>{
    let value = Math.floor(Math.random()*10); 
    store.dispatch(rnd(value));    
})

 const update=()=>{
    res.innerHTML = store.getState();
 }

 store.subscribe(update);
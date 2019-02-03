import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
//import { bindActionCreators } from 'redux';


const Counter = ({counter, inc, dec, clean}) => {
    return(
        <div className="counter-wrapper">  
            <div className="counter"><h1 id="counter">{counter}</h1></div>
            <div className="btns">
                <button 
                    className="btn btn-inc"
                    onClick={inc}>
                    <img src="./img/Plus.svg" alt="plus"/>
                </button>
                <button 
                    className="btn btn-dec"
                    onClick={dec}>
                    <img src="./img/Minus.svg" alt="minus"/>
                </button>
                <button 
                    className="btn btn-clear"
                    onClick={clean}>
                    <img src="./img/Reset.svg" alt="reset"/>
                </button>
            </div>
        </div>        
    )
}
const mapStateToProps = (state) =>{
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);
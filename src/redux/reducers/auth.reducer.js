import {
   SIGN_IN_SUCCESS,
   SIGN_IN_FAIL,
 } from '../constants';
 
 const initialState = {
  signInAuth: [],
 };
 
 export default function authReducer(state = initialState, action) {
   switch (action.type) {
      
     case SIGN_IN_SUCCESS: {
       return {
         // ...state,
         signInAuth: 
           action.payload[0],
         
       }
     }
     case SIGN_IN_FAIL: {
       return state;
     }
     default: {
       return state;
     }
   }
 }
 
import {
   GET_USER_SUCCESS,
   CREATE_USER_SUCCESS,
 } from '../constants';
 
 const initialState = {
   createUser: [],
 };
 
 export default function signUpModalReducer(state = initialState, action) {
   switch (action.type) {
     case GET_USER_SUCCESS: {
       return {
         ...state,
         createUser: [
           ...action.payload,
         ],
       }
     }
     case CREATE_USER_SUCCESS: {
       return {
         ...state,
         createUser: [
           ...state.createUser,
           action.payload,
         ],
       }
     }
     
     
     default: {
       return state;
     }
   }
 }
 
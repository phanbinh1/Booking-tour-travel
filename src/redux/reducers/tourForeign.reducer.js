import {
   GET_TOUR_FOREIGN_SUCCESS,
   GET_TOUR_FOREIGN_FAIL,
 } from '../constants';
 
 const initialState = {
  tourForeignList: [],
 };
 
 export default function tourForeignReducer(state = initialState, action) {
   switch (action.type) {
     case GET_TOUR_FOREIGN_SUCCESS: {
       return {
         ...state,
         tourForeignList: [
           ...action.payload,
         ],
       }
     }
     case GET_TOUR_FOREIGN_FAIL: {
       return state;
     }
     default: {
       return state;
     }
   }
 }
 
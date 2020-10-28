import {
   GET_TOUR_COUNTRY_SUCCESS,
   GET_TOUR_COUNTRY_FAIL,
 } from '../constants';
 
 const initialState = {
  tourCountryList: [],
 };
 
 export default function tourCountryReducer(state = initialState, action) {
   switch (action.type) {
     case GET_TOUR_COUNTRY_SUCCESS: {
       return {
         ...state,
         tourCountryList: [
           ...action.payload,
         ],
       }
     }
     case GET_TOUR_COUNTRY_FAIL: {
       return state;
     }
     default: {
       return state;
     }
   }
 }
 
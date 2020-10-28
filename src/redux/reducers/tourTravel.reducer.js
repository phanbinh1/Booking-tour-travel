import {
   GET_TOUR_TRAVEL_SUCCESS,
   GET_TOUR_TRAVEL_FAIL,
 } from '../constants';
 
 const initialState = {
  tourTravelList: [],
 };
 
 export default function tourTravelReducer(state = initialState, action) {
   switch (action.type) {
     case GET_TOUR_TRAVEL_SUCCESS: {
       return {
         ...state,
         tourTravelList: [
           ...action.payload,
         ],
       }
     }
     case GET_TOUR_TRAVEL_FAIL: {
       return state;
     }
     default: {
       return state;
     }
   }
 }
 
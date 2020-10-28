import {
   GET_HISTORY_TOUR_SUCCESS,
   CREATE_HISTORY_TOUR_SUCCESS,
 } from '../constants';
 
 const initialState = {
   historyBookTour: [],
 };
 
 export default function historyTourReducer(state = initialState, action) {
   switch (action.type) {
     case  GET_HISTORY_TOUR_SUCCESS: {
       return {
         ...state,
        historyBookTour: [
           ...action.payload,
         ],
       }
     }
     case CREATE_HISTORY_TOUR_SUCCESS: {
       return {
         ...state,
        historyBookTour: [
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
 
import {
   GET_SEARCH_TOUR_SUCCESS,
   CREATE_SEARCH_TOUR_SUCCESS,
 } from '../constants';
 
 const initialState = {
   searchTourData: [],
 };
 
 export default function searchTourReducer(state = initialState, action) {
   switch (action.type) {
     case GET_SEARCH_TOUR_SUCCESS: {
       return {
         // ...state,
         searchTourData: [
           ...action.payload,
         ],
       }
     }
     case CREATE_SEARCH_TOUR_SUCCESS: {
       return {
         // ...state,
         searchTourData: [
           ...state.searchTourData,
           action.payload,
         ],
       }
     }
     
     
     default: {
       return state;
     }
   }
 }
 
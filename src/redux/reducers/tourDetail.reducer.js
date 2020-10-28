import {
   GET_TOUR_DETAIL_SUCCESS,
   GET_TOUR_DETAIL_FAIL,
 } from '../constants';
 
 const initialState = {
  tourDetail: {
   apply: "",
   day: "",
   id: 2,
   image: "",
   name: "",
   place: "",
   price: "",
   start: "",
   transports: [
      {transport:""}
],
   startDays: [
      {day: ""}
   ],
   calendarDays: [
      {
         startDay:"",
         abouttDay:"",
      }
   ]
  },
 };
 
 export default function tourDetailReducer(state = initialState, action) {
   switch (action.type) {
     case GET_TOUR_DETAIL_SUCCESS: {
       return {
         ...state,
         tourDetail:
           action.payload,
       
       }
     }
     case GET_TOUR_DETAIL_FAIL: {
       return state;
     }
     default: {
       return state;
     }
   }

 }
 
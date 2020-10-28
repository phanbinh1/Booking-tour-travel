import {
   GET_TOUR_TRAVEL,
   GET_TOUR_COUNTRY,
   GET_TOUR_FOREIGN,
   GET_TOUR_DETAIL,
   GET_SEARCH_TOUR,
   CREATE_SEARCH_TOUR,
   CREATE_SELECT_TOUR,
   GET_SELECT_TOUR,
   EDIT_TOUR,
   DELETE_TOUR,
   CREATE_HISTORY_TOUR,
   GET_HISTORY_TOUR,

 } from '../constants';
 
 //tour travel tổng
 export function getTourTravelList(params) {
   return {
     type: GET_TOUR_TRAVEL,
     payload: params,
   }
 }

 //tour trong nước
 export function getTourCountryList(params) {
   return {
      type: GET_TOUR_COUNTRY,
      payload: params,
   }
}

//tour ngoài nước
export function getTourForeignList(params) {
   return {
     type: GET_TOUR_FOREIGN,
     payload: params,
   }
 }

 //tour detail
 export function getTourDetail(params) {
   return {
     type: GET_TOUR_DETAIL,
     payload: params,
   }
 }

 //tour search
 export function getSearchTourList(params) {
   return {
     type: GET_SEARCH_TOUR,
     payload: params,
   }
 }
 export function createSearchTour(params) {
   return {
     type: CREATE_SEARCH_TOUR,
     payload: params,
   }
 }
 
 //tour chọn
 export function createSelectTour(params) {
   return {
     type: CREATE_SELECT_TOUR,
     payload: params,
   }
 }
 export function getSelectTour(params) {
   return {
     type: GET_SELECT_TOUR,
     payload: params,
   }
 }

 //edit tour
 export function editTour(params) {
   return {
     type: EDIT_TOUR,
     payload: params,
   }
 }
 //xóa tour
 export function deleteTour(params) {
   return {
     type: DELETE_TOUR,
     payload: params,
   }
 }
 //tạo lịch sử tour
 export function createHistoryTour(params) {
   return {
     type: CREATE_HISTORY_TOUR,
     payload: params,
   }
 }
 //get lịch sử tour
 export function getHistoryTour(params) {
   return {
     type: GET_HISTORY_TOUR,
     payload: params,
   }
 }
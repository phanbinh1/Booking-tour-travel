import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import history from '../../util/history';

import {
  CREATE_SELECT_TOUR,
  CREATE_SELECT_TOUR_SUCCESS,
  CREATE_SELECT_TOUR_FAIL,

  GET_SELECT_TOUR,
  GET_SELECT_TOUR_SUCCESS,
  GET_SELECT_TOUR_FAIL,

  EDIT_TOUR,
  EDIT_TOUR_SUCCESS,
  EDIT_TOUR_FAIL,

  DELETE_TOUR,
  DELETE_TOUR_SUCCESS,
  DELETE_TOUR_FAIL,
} from '../constants';
import { act } from 'react-dom/test-utils';

const apiUrl = 'http://localhost:3001';
//get
function* getSelectTourSaga(action){
  try {
   const { page, limit, id } = action.payload;
    const response = yield axios.get(`${apiUrl}/selectTour`);
    const data = response.data;
    console.log('function*getSelectTourSaga -> data', data);

    yield put({
      type: GET_SELECT_TOUR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_SELECT_TOUR_FAIL,
      payload: error,
    });
  }
}
//post
function* createSelectTourSaga(action){
  try {
   const responseSelect = yield axios.get(`${apiUrl}/selectTour?id=${action.payload.id}`);
   const dataSelect = responseSelect.data;
   console.log('function*createSelectTourSaga -> dataSelect', dataSelect);

   if(dataSelect[0]){
      const response = yield axios.patch(`${apiUrl}/selectTour/${dataSelect[0].id}`,{ 
         countUsers: action.payload.countUsers,
         selectDay: action.payload.selectDay
      });
      const data = response.data;
      console.log('function*createSelectTourSaga -> data', data);
      yield put({
         type: 'UPDATE_SELECT_TOUR_SUCCESS',
         payload: data,
      });
   }else{
      const response = yield axios.post(`${apiUrl}/selectTour`, action.payload);
      const data = response.data;
      console.log('function*createSelectTourSaga -> data', data);
      yield put({
         type: CREATE_SELECT_TOUR_SUCCESS,
         payload: data,
       });
   }
   yield history.push("/checkout/check-cart");
  } catch (error) {
    yield put({
      type: CREATE_SELECT_TOUR_FAIL,
      payload: error,
    });

 
  }
}
//put
function* editTourSaga(action){
   console.log('function*editTourSaga -> editTourSaga');
   try {
     const { id, countUsers, image,
            place,
            name,
            transports,
            selectDay,
            price,
            startDays,
            day,
            userName,
         } = action.payload;
     const response = yield axios.put(`${apiUrl}/selectTour/${id}`, {userName, countUsers, image, place,name,transports,selectDay, price, startDays, day});
     const data = response.data;
     yield put({
       type: EDIT_TOUR_SUCCESS,
       payload: data,
     });
   } catch (error) {
     yield put({
       type: EDIT_TOUR_FAIL,
       payload: error,
     });
   }
 }
 //delete
 function* deleteTourSaga(action){
   try {
     const { id } = action.payload;
     yield axios.delete(`${apiUrl}/selectTour/${id}`);
     yield put({
       type: DELETE_TOUR_SUCCESS,
       payload: { id },
     });
   } catch (error) {
     yield put({
       type: DELETE_TOUR_FAIL,
       payload: error,
     });
   }
 }


export default function* selectTourSaga(){
   yield takeEvery(CREATE_SELECT_TOUR, createSelectTourSaga);
  yield takeEvery(GET_SELECT_TOUR, getSelectTourSaga);

  yield takeEvery(EDIT_TOUR, editTourSaga);
  yield takeEvery(DELETE_TOUR, deleteTourSaga);
}

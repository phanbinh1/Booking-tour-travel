import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  CREATE_HISTORY_TOUR,
  CREATE_HISTORY_TOUR_SUCCESS,
  CREATE_HISTORY_TOUR_FAIL,

  GET_HISTORY_TOUR,
  GET_HISTORY_TOUR_SUCCESS,
  GET_HISTORY_TOUR_FAIL,


} from '../constants';
import { act } from 'react-dom/test-utils';

const apiUrl = 'http://localhost:3001';
//get
function* getHistoryTourSaga(action){
  try {
   const {userName } = action.payload;
    const response = yield axios.get(`${apiUrl}/historyBookTour?userName=${userName}`);
    const data = response.data;

    yield put({
      type: GET_HISTORY_TOUR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_HISTORY_TOUR_FAIL,
      payload: error,
    });
  }
}
//post
function* createHistoryTourSaga(action){
  try {
      const response = yield axios.post(`${apiUrl}/historyBookTour`, action.payload);
      const data = response.data;
      yield put({
         type: CREATE_HISTORY_TOUR_SUCCESS,
         payload: data,
       });

  } catch (error) {
    yield put({
      type: CREATE_HISTORY_TOUR_FAIL,
      payload: error,
    });
  }
}

 //delete
//  function* deleteTourSaga(action){
//    try {
//      const { id } = action.payload;
//      yield axios.delete(`${apiUrl}/selectTour/${id}`);
//      yield put({
//        type: DELETE_TOUR_SUCCESS,
//        payload: { id },
//      });
//    } catch (error) {
//      yield put({
//        type: DELETE_TOUR_FAIL,
//        payload: error,
//      });
//    }
//  }


export default function* historyTourSaga(){
   yield takeEvery(CREATE_HISTORY_TOUR, createHistoryTourSaga);
  yield takeEvery(GET_HISTORY_TOUR, getHistoryTourSaga);
//   yield takeEvery(DELETE_HISTORY_TOUR, deleteTourSaga);
}

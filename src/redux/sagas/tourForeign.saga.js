import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import React from 'react';

import {
   GET_TOUR_FOREIGN,
   GET_TOUR_FOREIGN_SUCCESS,
   GET_TOUR_FOREIGN_FAIL,
} from '../constants';

function* getTourForeignListSaga(action){
  

  try {
    const { page, limit, id } = action.payload;
    const response = yield axios.get(`http://localhost:3001/toursTravel?type=3`);
    const data = response.data;
    yield put({
      type: GET_TOUR_FOREIGN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_TOUR_FOREIGN_FAIL,
      payload: error,
    });
  }
}

export default function* tourForeignSaga(){
  yield takeEvery(GET_TOUR_FOREIGN, getTourForeignListSaga);
}
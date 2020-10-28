import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import React from 'react';

import {
   GET_TOUR_TRAVEL,
   GET_TOUR_TRAVEL_SUCCESS,
   GET_TOUR_TRAVEL_FAIL,
} from '../constants';

function* getTourTravelListSaga(action){
  try {
    const { page, limit } = action.payload;
    const response = yield axios.get(`http://localhost:3001/toursTravel`);
    const data = response.data;
    yield put({
      type: GET_TOUR_TRAVEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_TOUR_TRAVEL_FAIL,
      payload: error,
    });
  }
}

export default function* tourTravelSaga(){
  yield takeEvery(GET_TOUR_TRAVEL, getTourTravelListSaga);
}
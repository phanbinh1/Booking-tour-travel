import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import React from 'react';

import {
   GET_TOUR_DETAIL,
   GET_TOUR_DETAIL_SUCCESS,
   GET_TOUR_DETAIL_FAIL,
} from '../constants';

function* getTourDetailSaga(action){
   // const productId = props.match.params.id;
  

  try {
    const { id } = action.payload;
    const response = yield axios.get(`http://localhost:3001/toursTravel/${id}`);
    const data = response.data;
    yield put({
      type: GET_TOUR_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_TOUR_DETAIL_FAIL,
      payload: error,
    });
  }
}

export default function* tourDetailSaga(){
  yield takeEvery(GET_TOUR_DETAIL, getTourDetailSaga);
}
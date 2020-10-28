import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import React from 'react';

import {
   GET_TOUR_COUNTRY,
   GET_TOUR_COUNTRY_SUCCESS,
   GET_TOUR_COUNTRY_FAIL,
} from '../constants';

function* getTourCountryListSaga(action){
  

  try {
    const { page, limit, id } = action.payload;
    const response = yield axios.get(`http://localhost:3001/toursTravel?type=2`);
    const data = response.data;
    yield put({
      type: GET_TOUR_COUNTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_TOUR_COUNTRY_FAIL,
      payload: error,
    });
  }
}

export default function* tourCountrySaga(){
  yield takeEvery(GET_TOUR_COUNTRY, getTourCountryListSaga);
}
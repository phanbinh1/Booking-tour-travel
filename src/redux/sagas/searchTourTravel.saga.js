import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
   GET_SEARCH_TOUR,
   GET_SEARCH_TOUR_SUCCESS,
   GET_SEARCH_TOUR_FAIL,

   CREATE_SEARCH_TOUR,
   CREATE_SEARCH_TOUR_SUCCESS,
   CREATE_SEARCH_TOUR_FAIL,
} from '../constants';

const apiUrl = 'http://localhost:3001';

function* getSearchTourSaga(action) {
   try {
      const { searchKey } = action.payload;
      const response = yield axios.get(`${apiUrl}/toursTravel?q=${searchKey}`);
      const data = response.data;

      yield put({
         type: GET_SEARCH_TOUR_SUCCESS,
         payload: data,
      });
   } catch (error) {
      yield put({
         type: GET_SEARCH_TOUR_FAIL,
         payload: error,
      });
   }
}

function* createSearchTourSaga(action) {
   try {
      const response = yield axios.post(`${apiUrl}/createSearchTour`, action.payload);
      const data = response.data;
      yield put({
         type: CREATE_SEARCH_TOUR_SUCCESS,
         payload: data,
      });
   } catch (error) {
      yield put({
         type: CREATE_SEARCH_TOUR_FAIL,
         payload: error,
      });
   }
}

export default function* searchTourListSaga() {
   yield takeEvery(GET_SEARCH_TOUR, getSearchTourSaga);
   yield takeEvery(CREATE_SEARCH_TOUR, createSearchTourSaga);
}

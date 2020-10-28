import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import history from '../../util/history';

import {
   SIGN_IN,
   SIGN_IN_SUCCESS,
   SIGN_IN_FAIL,

   SIGN_UP,
   SIGN_UP_SUCCESS,
   SIGN_UP_FAIL,
} from '../constants';

const apiUrl = 'http://localhost:3001';

function* signInSaga(action) {
   try {
      const { userName, password } = action.payload;
      const response = yield axios.get(`${apiUrl}/users?userName=${userName}&password=${password}`);
      const data = response.data;
      
      if (data[0].id) {
         
         yield localStorage.setItem('authData', JSON.stringify(data[0]))


         yield put({
            type: SIGN_IN_SUCCESS,
            payload: data,
         });
         yield history.push('/');
      } else {
         yield put({
            type: SIGN_IN_FAIL,
         });
      }
   } catch (error) {
      yield put({
         type: SIGN_IN_FAIL,
         payload: error,
      });
   }
}

function* signUpSaga(action) {
   try {
      const response = yield axios.post(`${apiUrl}/users`, action.payload);
      const data = response.data;
      yield put({
         type: SIGN_UP_SUCCESS,
         payload: data,
      });
   } catch (error) {
      yield put({
         type: SIGN_UP_FAIL,
         payload: error,
      });
   }
}

export default function* authSaga() {
   yield takeEvery(SIGN_IN, signInSaga);
   yield takeEvery(SIGN_UP, signUpSaga);
}

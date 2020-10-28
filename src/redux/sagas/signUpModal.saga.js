import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,

  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,

  EDIT_PASSWORD,
  EDIT_PASSWORD_SUCCESS,
  EDIT_PASSWORD_FAIL,
} from '../constants';

const apiUrl = 'http://localhost:3001';

function* getUserSaga(action){
  try {
    const response = yield axios.get(`${apiUrl}/createUser`);
    const data = response.data;
    yield put({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_USER_FAIL,
      payload: error,
    });
  }
}

function* createUserSaga(action){
  try {
    const response = yield axios.post(`${apiUrl}/users`, action.payload);
    const data = response.data;
    yield put({
      type: CREATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CREATE_USER_FAIL,
      payload: error,
    });
  }
}

//đổi password
function* editPasswordSaga(action){
   try {
     const { id, password, email
         } = action.payload;
     const response = yield axios.patch(`${apiUrl}/users/${id}`, {password: password});
     const data = response.data;

     yield put({
       type: EDIT_PASSWORD_SUCCESS,
       payload: data,
     });
   } catch (error) {
     yield put({
       type: EDIT_PASSWORD_FAIL,
       payload: error,
     });
   }
 }

export default function* signUpModalSaga(){
  yield takeEvery(GET_USER, getUserSaga);
  yield takeEvery(CREATE_USER, createUserSaga);
  yield takeEvery( EDIT_PASSWORD, editPasswordSaga);

}

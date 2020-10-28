import { fork } from 'redux-saga/effects';

import signUpModalSaga from './signUpModal.saga';
import tourTravelSaga from './tourTravel.saga';
import searchTourListSaga from './searchTourTravel.saga';
import tourDetailSaga from './tourDetail.saga';
import tourForeignSaga from './tourForeign.saga';
import tourCountrySaga from './tourInCountry.saga';
import authSaga from './auth.saga';
import selectTourSaga from './selectTour.saga';
import historyTourSaga from './historyTour.saga';

export default function* mySaga() {
  yield fork(signUpModalSaga);
  yield fork(tourTravelSaga);
  yield fork(searchTourListSaga);
  yield fork(tourDetailSaga);
  yield fork(tourForeignSaga);
  yield fork(tourCountrySaga);
  yield fork(authSaga);
  yield fork(selectTourSaga);
  yield fork(historyTourSaga);

}

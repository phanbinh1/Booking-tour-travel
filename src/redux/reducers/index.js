import { combineReducers } from 'redux';
import signUpModalReducer from './signUpModal.reducer';
import tourTravelReducer from './tourTravel.reducer';
import searchTourReducer from './searchTourTravel.reducer';
import tourDetailReducer from './tourDetail.reducer';
import tourForeignReducer from './tourForeign.reducer';
import tourCountryReducer from './tourInCountry.reducer';
import authReducer from './auth.reducer';
import selectTourReducer from './selectTour.reducer';
import historyTourReducer from './historyTour.reducer';




export default combineReducers({
  signUpModalReducer,
  tourTravelReducer,
  searchTourReducer,
  tourDetailReducer,
  tourForeignReducer,
  tourCountryReducer,
  authReducer,
  selectTourReducer,
  historyTourReducer,
})

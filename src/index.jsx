import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

// import logger from 'redux-logger';

import DefaultLayout from './layout/DefaultLayout';
import CheckLayout from './layout/CheckLayout';

import Main from './components/Main';
import Hotel from './pages/Hotel';
import AirTicket from './pages/AirTicket';
import GuideTravel from './pages/GuideTravel';
import TourTravel from './pages/TourTravel';
import SearchTours from './pages/SearchTours';
import CheckCart from './pages/CheckCart';
import CheckInfo from './pages/CheckInfo';
import CheckPayment from './pages/CheckPayment';
import CheckComplete from './pages/CheckComplete';
import HistorySetTour from './pages/HistorySetTour';
import EditPassword from './pages/editPassword';
import ToursListCountry from './pages/ToursListCountry';
import ToursListForeign from './pages/ToursListForeign';


import history from './util/history';

import myReducer from './redux/reducers';
import mySaga from './redux/sagas';

import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css'; 
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import "./index.css";
const sagaMiddleware = createSagaMiddleware();
const myStore = createStore(myReducer, applyMiddleware(...[sagaMiddleware]));
sagaMiddleware.run(mySaga);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Router history={history}>
      <Switch>
         <DefaultLayout exact path="/" component={Main} />
         <DefaultLayout exact path="/Hotel" component={Hotel} />
         <DefaultLayout exact path="/air-ticket" component={AirTicket} />
         {/* <DefaultLayout exact path="/guide-travel" component={GuideTravel} /> */}
         <DefaultLayout exact path="/search-tour-travel" component={SearchTours} />
         <DefaultLayout exact path="/tours-list-country" component={ToursListCountry} />
         <DefaultLayout exact path="/tours-list-foreign" component={ToursListForeign} />


         <DefaultLayout exact path="/tour-travel/:id" component={TourTravel} />
         <CheckLayout exact path="/checkout/check-cart" component={CheckCart}/>
         <CheckLayout exact path="/checkout/check-info" component={CheckInfo}/>
         <CheckLayout exact path="/checkout/check-payment" component={CheckPayment}/>
         <CheckLayout exact path="/checkout/check-complete" component={CheckComplete}/>
         <DefaultLayout exact path="/checkout/check-history" component={HistorySetTour}/>
         <DefaultLayout exact path="/checkout/check-edit-password" component={EditPassword}/>

         
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
   document.getElementById('root')
);
// serviceWorker.unregister();

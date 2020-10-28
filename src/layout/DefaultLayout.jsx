import React from 'react';
import { Route } from 'react-router-dom';
import history from '../util/history';
import { Select } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles.css';
function DefaultLayout({ component: Component, ...props }) {
  return (
    <Route 
    {...props}
      render={(routerProps) => (
        <>
          
          <Header {...routerProps}/>
          <div className="main">
          <Component {...routerProps} 
          />
          </div>
          <Footer {...routerProps}/>
        </>
      )}
    />
  );
}
export default DefaultLayout;

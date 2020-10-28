import React from 'react';
import image1 from '../../images/not-found.png';
import './styles.css';
function Hotel(props) {
  return (
   <div className="not-found" style={{backgroundColor: '#ECF0F5'}}>
      <div className="not-found-content">
         <img src={image1}/>
         <h2 className="mt-4">404 Not Found</h2>
         <h5>Trang này không tồn tại!</h5>
      </div>
   </div>
  );
}

export default Hotel;

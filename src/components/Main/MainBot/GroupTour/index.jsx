import React,{useState} from 'react';
import {withRouter} from 'react-router';
import { Row, Col } from 'antd';
import './stytes.css';
function GroupTour({
   groupIndex,
   id,
   image,
   place,
   name,
   day,
   transports,
   descriptions,
   price,
   cartTourIndexData,
   setCartTourIndexData,
   history,
            
}){
   //vận chuyển
   const renderTransports = () => {
      return transports.map((item, index)=>{
         return(
            <img src={item.transport} style={{marginRight:'8px'}}/>
         );
      })
   }

   //thông tin tour
   const renderDesriptions = () => {
      return descriptions.map((item, index)=>{
         return(
            <p style={{padding:'0', margin:'0'}}>- {item.description}</p>
         );
      })
   }

   //chọn tour
   const cartTourObject = function(id, image, name, price){
      this.id = id;
      this.image = image;
      this.name = name;
      this.price = price;
   }
   const handleSelectGroup=()=>{
      let keySelect = localStorage.getItem('keySelect');
      const selectName = localStorage.getItem(id);
      if(selectName === null){
         keySelect = (keySelect === null) ? id :  keySelect + ',' + id;
         localStorage.setItem('keySelect', keySelect);

         const cartTour = new cartTourObject(id, image, name, price);
         const json = JSON.stringify(cartTour);
         localStorage.setItem(id,json);
      }
      if(cartTourIndexData.findIndex((data) => data.id === id) === -1){
         setCartTourIndexData([
            ...cartTourIndexData,
               id
               
         ]);
      }
   }

   return(
      <Col span={8} className="col-md-4 mb-4  " onClick={()=>{handleSelectGroup(); history.push(`/tour-travel/${id}`)}} style={{paddingTop:"28px"}}>
         <Row 
         className="row box-hover m-0" style={{height:'444.4px', background:"#fff"}}>
            <Col span={24} className="col-md-12 ">
               <Row className="row">
                  <Col span={24} className="col-md-12 p-0">
                     <img style={{width:'359.8px',height:"224.88px"}} src={image} className="image-tour" alt="logo" />
                  </Col>
                  <Col span={24} className="gly-map-marker">
                     <span>
                        <img src="https://img.icons8.com/offices/18/000000/marker.png"/>
                     </span>
                     <div style={{paddingTop:'0px', paddingLeft:'2px', fontWeight:'500', fontSize:'16px', color:"white"}}>{place}</div>
                  </Col>
               </Row>
            </Col>
            <Col span={24}>
               <Row  style={{paddingLeft: "10px", paddingRight: "10px"}}>
                  <Col span={24} className="col-md-12 name-tour">
                     <span>{name}</span>
                  </Col>
                  <Col span={24} className="col-md-12">
                     <Row className="row">
                        <Col span={12} className="col-md-6">
                           <img src="https://img.icons8.com/material-rounded/14/000000/time-machine.png"/>
                           <span style={{paddingLeft:'2px'}}>{day}</span>
                        </Col>
                        <Col span={12} className="col-md-6" >
                           <span style={{float:"right"}}>{renderTransports()}</span>
                        </Col>
                     </Row>
                  </Col>
                  <Col span={24} className="col-md-12" style={{color:'#00abc5', height:'75px'}}>
                     {renderDesriptions()}
                  </Col>
                  <Col span={24} className="col-md-12 mt-2">
                     <span style={{float:'right', fontSize:'22px',fontWeight: 'bold', color:'#00C1DE'}}>
                        {price}
                        <small className="p-1">VND</small>
                     </span>
                  </Col>
               </Row>
            </Col>
         </Row>
         </Col>
)}
export default withRouter(GroupTour);


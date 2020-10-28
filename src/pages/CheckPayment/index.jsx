
import React, {useState, useEffect} from 'react';
import { Row,Col, Select, Input } from 'antd';
import { connect } from 'react-redux';
function CheckPayment({
   setFormValuePayment,
   formValuePayment,
   valuePayment,
   errorsPayment,
}) {
   
    
    const handleChangeValue = (e) =>{
     
      const {name, value, type, checked}= e.target;
      setFormValuePayment({
         ...formValuePayment,
         [name]:value
      });
   }

   return(
   <Row>
      <Col span={24} style={{background:"#f0f0f0"}}>
         <Row >
            <Col span={14} style={{margin:"0 auto", }}>
               <h1 style={{color:"#003C71"}}>Chuyển Khoản Ngân Hàng</h1>
               <form action="">
               <div style={{paddingBottom:"10px"}}>
                  <label htmlFor="">Tên chủ thẻ</label>
                  <Input placeholder="tên chủ thẻ"
                           value={valuePayment.cardUser}
                           type="cardUser"
                           name='cardUser'
                           onChange={(e)=>handleChangeValue(e)}
                  />
                  <div style={{color:"red", fontStyle:"italic"}}>{errorsPayment.cardUser}</div>
               </div>

               <div style={{paddingBottom:"10px"}}>
                  <label htmlFor="">Số thẻ</label>
                  <Input  placeholder="số thẻ"
                           value={valuePayment.cardNumber} 
                           type="cardNumber"
                           name='cardNumber'
                           onChange={(e)=>handleChangeValue(e)}
                     />
                     <div style={{color:"red", fontStyle:"italic"}}>{errorsPayment.cardNumber}</div>
                     
               </div>

               <div style={{paddingBottom:"10px"}}>
                  <label htmlFor="">Hình thức:</label>
               <div className="form-check">
               <input className="form-check-input" type="radio" name="card" id="exampleRadios1" defaultValue="option1" defaultChecked />
               <label className="form-check-label" htmlFor="exampleRadios1">
                  Internet Banking
               </label>
               </div>
               <div className="form-check ml-5">
               <input className="form-check-input" type="radio" name="card" id="exampleRadios2" defaultValue="option2" />
               <label className="form-check-label" htmlFor="exampleRadios2">
                  ATM
               </label>
               </div>
               <div className="form-check ml-5">
               <input className="form-check-input" type="radio" name="card" id="exampleRadios2" defaultValue="option2" />
               <label className="form-check-label" htmlFor="exampleRadios2">
                  Ứng dụng ngân hàng
               </label>
               </div>  
               </div>
               
               </form>
            </Col>
         </Row>
      </Col>
   </Row>
      
   )
}
export default CheckPayment;


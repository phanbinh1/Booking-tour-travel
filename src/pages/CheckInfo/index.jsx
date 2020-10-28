
import React, {useState, useEffect} from 'react';
import { Row,Col, Select, Input } from 'antd';
import { connect } from 'react-redux';
function CheckInfo({setFormValueInfo, formValueInfo, valueInfo, errors}) {
   const { TextArea } = Input;
    
    const handleChangeValue = (e) =>{
     
      const {name, value, type, checked}= e.target;
      setFormValueInfo({
         ...formValueInfo,
         [name]:value
      });
   }

   return(
   <Row>
      <Col span={24} style={{background:"#f0f0f0"}}>
      <Row>
         <Col span={14} style={{margin:"0 auto",background:"#f0f0f0"}}>
         <h1 style={{color:"#003C71"}}>Thông Tin Liên Hệ</h1>
            <form action="">
            <div style={{paddingBottom:"10px"}}>
               <label htmlFor="">Tên Liên Hệ</label>
               <Input placeholder="Tên liên hệ"
                        value={valueInfo.name}
                        type="name"
                        name='name'
                        onChange={(e)=>handleChangeValue(e)}
               />
               <div style={{color:"red", fontStyle:"italic"}}>{errors.name}</div>
            </div>

            <div style={{paddingBottom:"10px"}}>
               <label htmlFor="">Email</label>
               <Input  placeholder="email"
                        value={valueInfo.email} 
                        type="email"
                        name='email'
                        onChange={(e)=>handleChangeValue(e)}
                  />
                  <div style={{color:"red", fontStyle:"italic"}}>{errors.email}</div>
                  
            </div>

            <div style={{paddingBottom:"10px"}}>
               <label htmlFor="">Số điện thoại</label>
               <Input placeholder="số điện thoại"
                        value={valueInfo.phone}
                        name='phone'
                        onChange={(e)=>handleChangeValue(e)}
               />
               <div style={{color:"red", fontStyle:"italic"}}>{errors.phone}</div>
            </div>

            <div style={{paddingBottom:"10px"}}>
               <label htmlFor="">Yêu cầu khác</label>
               <TextArea row={4} style={{height:"150px"}} placeholder="yêu cầu khác"
                        value={valueInfo.request}
                        name='request'
                        onChange={(e)=>handleChangeValue(e)}
               />
            </div>

            </form>
            
            
         </Col>
      </Row>
      </Col>
   </Row>
      
   )
}
export default CheckInfo;


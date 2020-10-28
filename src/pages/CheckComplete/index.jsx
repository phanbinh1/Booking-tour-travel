import React, { useEffect, useState } from 'react';
import { Row, Col, Tabs, Select, Button } from 'antd';
import { connect } from 'react-redux';
import history from '../../util/history';

function CheckComplete({
   
}) {
   
   return(
      <Row>
         <Col span={24} style={{ margin:"0 auto",background:"#f0f0f0", height:"400px"}}>
            <Row>
               <Col span={14} >
                  <div >
                     <h1 style={{ color:"003C71"}}>Xem lịch sử Tour</h1>
                  </div>
                  <div>
                     <Button type="button" 
                              onClick={()=>{history.push('/checkout/check-history')}}
                     >xem lịch sử</Button>
                  </div>
               </Col>
            </Row>
         </Col>
      </Row>
   )
}

export default CheckComplete;

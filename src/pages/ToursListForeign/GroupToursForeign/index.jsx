import React,{useState} from 'react';
import {withRouter} from 'react-router';
import { Row, Col } from 'antd';
import history from '../../../util/history';
import './styles.css';
function GroupToursCountry ({
   searchTourItem
            
}){
   //vận chuyển
   const renderTransports = () => {
      return searchTourItem.transports.map((item, index)=>{
         return(
            <img src={item.transport} style={{marginRight:'8px'}}/>
         );
      })
   }

   //thông tin tour
   const renderDesriptions = () => {
      return searchTourItem.descriptions.map((item, index)=>{
         return(
            <span style={{padding:"4px", color:"#00C1DE"}}>- {item.description}</span>
         );
      })
   }

   return(
      <Row>
         <Col span={24} className="hover-box-detail" style={{background:"white", border:"1px solid white", marginBottom:"20px"}}
               onClick={()=>{history.push(`/tour-travel/${searchTourItem.id}`)}}
         >
            <Row>
               <Col span={24} >
                  <Row style={{padding:"15px", display:"flex"}}>
                     <Col span={6} style={{overflow:"hidden"}}>
                     <img style={{width:"204px", height:"154px"}} src={searchTourItem.image} alt="" />
                        
                     </Col>
                     <Col span={12} style={{display:"flex"}} >
                        <div style={{display:"flex", flexDirection:"column", padding:"0px 0px 0px 15px"}}>
                           <h2 style={{color:"#003C71"}}>{searchTourItem.name}</h2>
                           <div>
                              <img src="https://img.icons8.com/material-rounded/14/000000/time-machine.png"/>
                              <span style={{paddingLeft:'2px'}}>{searchTourItem.day}</span>
                              <span style={{paddingRight:"15px", paddingLeft:"50px"}}>Phương tiện:</span><span>{renderTransports()}</span>
                           </div>
                           <div style={{padding:"2px"}}>
                           {renderDesriptions()}
                              
                           </div>
                        </div>


                     </Col>
                     <Col span={6}>
                        <div style={{display:"flex", justifyContent:"flex-end", paddingTop:"5px"}}>
                           <span style={{color:"#003C71"}}>Khởi hành: {searchTourItem.start}</span>
                        </div>
                        
                        
                        <div style={{display:"flex", justifyContent:"flex-end", paddingBottom:"70px"}}>
                           <span style={{color:"rgba(129,129,128,.85)"}}>* Áp dụng nhóm: {searchTourItem.apply} </span>
                        </div>
                        <div>
                        <span style={{float:'right', fontSize:'22px',fontWeight: 'bold', color:'#00C1DE'}}>
                           {searchTourItem.price}
                           <small className="p-1">VND</small>
                        </span>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>
      </Row>
)}
export default withRouter(GroupToursCountry);


import React, {useState,useEffect} from 'react';
// import history from '../../util/history';
import GroupCarts from "./GroupCarts";
import { Carousel, Row, Col,Divider } from 'antd';

import { Input } from 'antd';
import image1 from '../../../images/image1.jpg';
import './styles.css';

function MainMid({cartTourIndexData, setCartTourIndexData}) {
   const [cartFixData, setCartFixData] = useState('');
   const cartTourName = localStorage.getItem('keySelect');

   const renderCartTourData=() => {

      if(localStorage.getItem('keySelect') !== null){
         let cartTourSelect = localStorage.getItem('keySelect').split(',');
         if(cartTourSelect.length > 3){
            for(let i = 0; i < (cartTourSelect.length-3); i++){
               localStorage.removeItem(cartTourSelect[i]);
            }
            cartTourSelect.splice(0, (cartTourSelect.length-3));
            localStorage.setItem("keySelect", cartTourSelect.join());
         }
         return localStorage.getItem('keySelect').split(',').map((cartData, cartIndex) => {
            return(
               <GroupCarts key={`cartData-${cartIndex}`}
               cartData= {JSON.parse(localStorage.getItem(cartData))}
               setCartFixData = {setCartFixData}
               cartFixData = {cartFixData}
                />
            )
         })
      } 
   }

  return (
<>
<Row className="overview-container">
        <Col span={18} style={{margin:"0 auto", marginTop:"15px"}}>
        <Row gutter={30}>
      <Col  span={8}>
      <div >
         <img src="https://img.icons8.com/color/48/000000/check-all.png"/>
         <span style={{fontSize:'18px', color:'#003C71'}}>Tour chọn lọc </span><span style={{fontSize:'18px', color:'#003C71', fontWeight:'600'}}>chất lượng nhất</span>
      </div>
      </Col>
      <Col  span={8}>
      <div >
         <img src="https://img.icons8.com/color/48/000000/check-all.png"/>
         <span style={{fontSize:'18px', color:'#003C71'}}>Bảo đảm </span><span style={{fontSize:'18px', color:'#003C71', fontWeight:'600'}}>giá tốt nhất</span>
               </div>
      </Col>
      <Col  span={8}>
      <div >
         <img src="https://img.icons8.com/color/48/000000/check-all.png"/>
         <span style={{fontSize:'18px', color:'#003C71'}}>Đội ngũ tư vấn </span><span style={{fontSize:'18px', color:'#003C71', fontWeight:'600'}}>chi tiết và tận tình</span>
      </div>
      </Col>
    </Row>
    <Row>
       <Col span={24}>
         <h2 style={{fontSize:'35px', color:'#003C71', fontWeight:'500', marginTop:'20px'}}>Tours du lịch bạn đã xem gần đây</h2>
       </Col>
       <Col span={24} >
         <Row  gutter={30}>
            {renderCartTourData()}
            
         </Row>
       </Col>
    </Row>
        </Col>
      </Row>
      </>
  );
}
export default MainMid;

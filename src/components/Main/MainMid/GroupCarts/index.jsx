import React, {useState} from 'react';
// import history from '../../util/history';
import { Input } from 'antd';
import { Carousel, Row, Col,Divider } from 'antd';

function GroupCarts({cartData, cartFixData, setCartFixData}) {
   //xóa card
   const handleDeleteGroup=(id)=>{
            let cartTourName = localStorage.getItem('keySelect');
            let cartTourArrayName = cartTourName.split(',');
            const cartTourIndex = cartTourArrayName.findIndex((cartIndex) => parseInt(cartIndex) === parseInt(id));
            cartTourArrayName.splice(cartTourIndex, 1);
            localStorage.removeItem(id);
            localStorage.setItem("keySelect", cartTourArrayName.join());
            if(localStorage.getItem('keySelect') === ''){
               localStorage.removeItem('keySelect');
            }
            setCartFixData(id);
   }

   
      return (
         <Col span={8}>
            <Row style={{ height:'120px'}}>
               <Col span={24} style={{display:'flex', background:'white'}}>
                  <img src={cartData.image} alt="" style={{width:"120px", height:'120px'}}/>
                  <div className="card-content" style={{width:'231.56px', padding:'3px 0px 0px 10px'}}>
                     <div className="card-name" style={{width:'208.56px',height:'87px'}}>
                        <p style={{ color:'#003C71',fontWeight: 'bold', fontSize:'15px' }}>{cartData.name}</p>
                     </div>
                     <div className="card-price" style={{display:'flex', justifyContent:'flex-end', fontSize:'18px',fontWeight: 'bold', color:'#00C1DE'}}>
                        <p style={{padding:"0", margin:"0"}}>{cartData.price}
                        <small style={{paddingLeft:"2px"}}>VND</small></p>
                     </div>
                  </div>
                  <div>
                     <img style={{position:"relative", top:"-4px", left:"-1px"}} src="https://img.icons8.com/fluent-systems-filled/13/000000/delete-sign.png"
                              onClick={() =>handleDeleteGroup(cartData.id)}
                     />
                  </div>
               </Col>
            </Row>
      </Col>
      );

   }

   
export default GroupCarts;


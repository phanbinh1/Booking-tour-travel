import React, { useEffect } from 'react';
import { Row, Col, Button, Card,Tabs } from 'antd';

import history from '../../util/history';
import { connect } from 'react-redux';
import { getHistoryTour } from '../../redux/actions';





function HistorySetTour({getHistoryTour, historyBookTour}) {
   useEffect(() => {
      getHistoryTour(
         {
            userName:JSON.parse(localStorage.getItem("authData")).userName,
         }
      );
   }, []);
   const { TabPane } = Tabs;
   const renderTabTours = () => {
      return historyBookTour.map((tabToursItem, tabTourIndex) => {
         return(
            <tr>
               <td>{tabToursItem.name}</td>
               <td>{tabToursItem.selectDay}</td>
               <td>{tabToursItem.countUsers}</td>
               <td>{tabToursItem.price}</td>
            </tr>
         )
      })
   }

  return (
     <Row>
        <Col span={24} style={{background:"#ecf0f5", height:"800px"}}>
            <Row >
               <Col span={20} style={{margin:"0 auto", background:"white"}}>
               <Row gutter={30} style={{marginTop:"20px"}}>
                  <Col span={7}>
                     <Row>
                        <Col span={24} style={{background:" rgb(27, 22, 44)", color:"white", height:"800px"}}>
                           <div style={{display:"flex", justifyContent:"center",color:"white"}}>
                           <img src="https://img.icons8.com/fluent/200/000000/user-male-circle.png"/>
                           </div>
                           
                           <div style={{paddingLeft:"50px"}}>
                           <div>
                              Họ tên: <span>{JSON.parse(localStorage.getItem("authData")).userName}</span>
                           </div>
                           <div>
                              Email: <span>{JSON.parse(localStorage.getItem("authData")).email}</span>
                           </div>
                           </div>
                           <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
       
                              <Button type="primary" style={{marginRight:"20px"}} onClick={()=>{history.push('/checkout/check-edit-password');}}>Đổi mật khẩu</Button>
                              <Button type="primary"
                                 onClick={()=>{localStorage.removeItem("authData");history.push('/')}}
                              >Đăng xuất</Button>
                           </div>
                        </Col>
                     </Row>
                  </Col>
                  <Col span={17}>
                     <div><h1  style={{color:"#003C71", padding:"20px 0px 0px 15px"}}>LỊCH SỬ ĐẶT TOURS:</h1></div>
                  <div style={{ padding: "15px" }}>
                           <table>
                              <tr>
                                 <th>Tên tour</th>
                                 <th>Ngày khởi hành</th>
                                 <th>Số khách</th>
                                 <th>Tổng tiền</th>
                              </tr>
                              {renderTabTours()}
                           </table>
                        </div>
                  </Col>
               </Row>

               </Col>
            </Row>
        </Col>
     </Row>
  );
}

const mapStateToProps = (state) => {
   const { historyBookTour } = state.historyTourReducer;

   return {
      historyBookTour,
   }
   };
   
   const mapDispatchToProps = (dispatch) => {
      return {
         getHistoryTour: (params) => dispatch(getHistoryTour(params)),
      };
      }
   export default connect(mapStateToProps, mapDispatchToProps)(HistorySetTour);

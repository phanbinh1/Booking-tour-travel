import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { Row, Col, Select } from 'antd';
// import './stytes.css';
import {
   editTour,
   deleteTour,
} from '../../../redux/actions';
function GroupCheckTour({
   id,
   image,
   place,
   name,
   price,
   transports,
   selectDay,
   countUsers,
   editTour,
   deleteTour,
   startDays,
   day,
   userName,


}) {
   const { Option } = Select;
   const [indexUsers, setIndexUsers] = useState(countUsers);
   const [startDay, setStartDay] = useState(selectDay);

   // useEffect(()=>{
   //       editTour({
   //       id:id,
   //       image:image,
   //       place:place,
   //       name:name,
   //       transports:transports,
   //       selectDay:startDay,
   //       countUsers: indexUsers,
   //       price:price,
   //       startDays:startDays,
   //       day: day,
   //       userName: userName,

   //     });
   // },[indexUsers, startDay]);

   useEffect(() => {
      setStartDay(selectDay)
   }, [selectDay]);

   useEffect(() => {
      setIndexUsers(countUsers)
   }, [countUsers]);

   //vận chuyển
   const renderTransports = () => {
      return transports.map((item, index) => {
         return (
            <img src={item.transport} style={{ marginRight: '8px' }} />
         );
      })
   }
   //select ngày
   const renderOptionDay = () => {
      return startDays.map((itemDay, indexDay) => {
         return (
            <Option value={itemDay.day}>{itemDay.day}</Option>
         )
      })
   }
   //xóa tour
   const handleDeleteTour = () => {
      deleteTour({ id: id });
   }

   return (
      <Row>
         <Col span={24} style={{ background: "white", border: "1px solid white", marginBottom: "20px" }}>
            <Row>
               <Col span={24} >
                  <Row style={{ padding: "15px", display: "flex" }}>
                     <Col span={6} style={{ overflow: "hidden" }}>
                        <img style={{ width: "204px", height: "154px" }} src={image} alt="" />

                     </Col>
                     <Col span={12} style={{ display: "flex" }} >
                        <div style={{ display: "flex", flexDirection: "column", padding: "0px 0px 0px 15px" }}>
                           <h2 style={{ color: "#003C71" }}>{name}</h2>
                           <div>
                              <img src="https://img.icons8.com/material-rounded/14/000000/time-machine.png" />
                              <span style={{ paddingLeft: '2px' }}>{day}</span>
                              <span style={{ paddingRight: "15px", paddingLeft: "50px" }}>Phương tiện:</span><span>{renderTransports()}</span>
                           </div>
                           <div style={{ padding: "2px" }}>
                              <span>Địa điểm : {place}</span>
                           </div>
                        </div>


                     </Col>
                     <Col span={6}>
                        <div >
                           <span style={{ display: "flex", justifyContent: "flex-end", color: "rgba(129,129,128,.85)" }}>Số Người: {indexUsers} </span>
                        </div>
                        <img style={{ position: "relative", top: "-43px", left: "223px" }}
                           src="https://img.icons8.com/material-sharp/18/000000/delete-sign.png"
                           onClick={() => { handleDeleteTour() }}
                        />
                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "34px", marginBottom: "20px" }}>

                           <div style={{ height: "34px", display: "flex", justifyContent: "center" }}>
                              <span style={{ position: "relative", top: "10px", padding: "0px 10px 0px 10px", border: "1px solid #ccc" }}
                                 onClick={() => {
                                    setIndexUsers(indexUsers + 1);
                                    // editTour({
                                    //    id:id,
                                    //    image:image,
                                    //    place:place,
                                    //    name:name,
                                    //    transports:transports,
                                    //    selectDay:startDay,
                                    //    countUsers: indexUsers + 1,
                                    //    price:price,
                                    //    startDays:startDays,
                                    //    day: day,
                                    //    userName: userName,

                                    //  });
                                 }}
                              >
                                 <img src="https://img.icons8.com/ios-filled/20/000000/plus-math.png" />
                              </span>
                           </div>
                           <div style={{ height: "34px", display: "flex", justifyContent: "center", }} >
                              <span style={{ position: "relative", top: "10px", padding: "0px 10px 0px 10px", border: "1px solid #ccc" }}
                                 onClick={() => { if (indexUsers > 2) { setIndexUsers(indexUsers - 1) } }}

                              >
                                 <img src="https://img.icons8.com/android/20/000000/minus-math.png" />
                              </span>
                           </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "5px" }}>
                           <span style={{ color: "#003C71", padding: "5px" }}>Khởi hành: </span>
                           <Select
                              value={startDay}
                              style={{ width: "115px", border: "1px solid #ccc", height: "34px" }}
                              onChange={(value) => {
                                 setStartDay(value)
                                 editTour({
                                    id: id,
                                    image: image,
                                    place: place,
                                    name: name,
                                    transports: transports,
                                    selectDay: value,
                                    countUsers: indexUsers + 1,
                                    price: price,
                                    startDays: startDays,
                                    day: day,
                                    userName: userName,
                                 });
                                 
                              }}
                           >
                              {renderOptionDay()}
                           </Select>
                        </div>
                        <div style={{ marginTop: "10px" }}>
                           <span style={{ float: 'right', fontSize: '22px', fontWeight: 'bold', color: '#00C1DE' }}>
                              {parseFloat(indexUsers) * parseFloat(price).toFixed(2)}0.000
                           <small style={{ paddingLeft: "3px" }}>VND</small>
                           </span>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>
      </Row>
   )
}
const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
   return {

      editTour: (params) => dispatch(editTour(params)),
      deleteTour: (params) => dispatch(deleteTour(params)),

   };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupCheckTour);



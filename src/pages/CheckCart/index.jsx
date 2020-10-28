
import React, {useState, useEffect} from 'react';
import { Row,Col, Select } from 'antd';
import { connect } from 'react-redux';
import GroupCheckTour from './GroupCheckTour';
import { getSelectTour,
   // createSelectTour,
} from '../../redux/actions';
function CheckCart({
   selectTour,
   getSelectTour,
}) {
   console.log('selectTour', selectTour);
   useEffect(() => {
      getSelectTour(
         {
            page:1,
            limit:5
         }
   
      );
   }, []);
  
   const renderGroupCheckTour = () => {
      return selectTour.map((groupCheckItem, checkIndex)=>{
         return(
         <GroupCheckTour 
            key={`group-check-tour-${groupCheckItem.id}`}
            id={groupCheckItem.id}
            image={groupCheckItem.image}
            place={groupCheckItem.place}
            name={groupCheckItem.name}
            price={groupCheckItem.price}
            transports={groupCheckItem.transports}
            selectDay={groupCheckItem.selectDay}
            countUsers={groupCheckItem.countUsers}
            startDays={groupCheckItem.startDays}
            day = {groupCheckItem.day}
            userName = {groupCheckItem.userName}
         />
         )
      })
   }

  return (
   <Row>
      <Col span={24} style={{background:"#f0f0f0"}}>
         <Row>
            <Col span={22} style={{margin:"0 auto", marginTop:"20px"}}>
            {renderGroupCheckTour()}
            </Col>
         </Row>
         
         
         
      </Col>
   </Row>
   
  );
}
const mapStateToProps = (state) => {
   const { selectTour } = state.selectTourReducer;

   return {
      selectTour,
   }
   };
   
   const mapDispatchToProps = (dispatch) => {
   return {
      getSelectTour: (params) => dispatch(getSelectTour(params)),
   };
   }
   export default connect(mapStateToProps, mapDispatchToProps)(CheckCart);


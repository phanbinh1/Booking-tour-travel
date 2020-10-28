import React, { useEffect } from 'react';
import { Row, Col, Button, Card } from 'antd';

import history from '../../util/history';

import { connect } from 'react-redux';
import { getTourForeignList} from '../../redux/actions'

import GroupToursForeign  from '../ToursListForeign/GroupToursForeign';
import { useState } from 'react';
import './styles.css';
function ToursListForeign({tourForeignList,getTourForeignList}) {
   useEffect(() => {
      getTourForeignList(
         {
            page: 1,
            limit: 5,
         }
      );

   }, []);
   const [searchKeyTour, setSearchKeyTour] = useState('');
   const placeHot = ["Sapa", "Hà Nội", "Hạ Long", "Phú Quốc", "Miền Tây", "Đà Nẵng", "Đà Lạt", "Nha Trang", "Quy Nhơn", "Phú Yên"];
   const hadlePlaceHot =()=>{
      return placeHot.map((placeItem)=>{
         return(
         <p style={{padding:"5px 0px 5px 0px",cursor:'pointer'}}
          className="hover-placeHot"
          onClick = {()=>{handleSearchTour(placeItem)}}
          >{placeItem}</p>
         );
      })
   }

   const handleSearchTour = (value) => {
      setSearchKeyTour(value);
      
   }
   const groupSearchTour = ()=> {
      
               const filterGroupTourData = tourForeignList.filter((item) => {
                  return (item.place.toLowerCase()).indexOf(searchKeyTour.toLowerCase()) !== -1;
               });
      return filterGroupTourData.map((searchTourItem, searchTourIndex) => {
         return(
            <GroupToursForeign
               key = {`search-tour-item-${searchTourIndex}`}
               searchTourItem = {searchTourItem}
            />
         );
      });
   }

  return (
     <Row>
        <Col span={24} style={{background:"#ecf0f5"}}>
            <Row >
               <Col span={18} style={{margin:"0 auto"}}>
               <Row gutter={30} style={{marginTop:"20px"}}>
                  <Col span={6}>
                     <Row>
                        <Col span={24} style={{background:"white"}}>
                           <Card title="Card title" bordered={false} style={{ width: "100%" }}>
                              {hadlePlaceHot()}
                           </Card>
                        </Col>
                     </Row>
                  </Col>
                  <Col span={18}>
                     {groupSearchTour()}
                  </Col>
               </Row>

               </Col>
            </Row>
        </Col>
     </Row>
  );
}

const mapStateToProps = (state) => {
   const {  tourForeignList } = state.tourForeignReducer;
   return {
      tourForeignList,
   }
   };
   
   const mapDispatchToProps = (dispatch) => {
      return {
         getTourForeignList: (params) => dispatch(getTourForeignList(params)),
      };
      }
   export default connect(mapStateToProps, mapDispatchToProps)(ToursListForeign);

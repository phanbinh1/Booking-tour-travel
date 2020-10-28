import React, { useEffect } from 'react';
import { Row, Col, Button, Card } from 'antd';

import history from '../../util/history';

import { connect } from 'react-redux';
import { getSearchTourList, createSearchTour, } from '../../redux/actions';
import GroupToursList  from '../SearchTours/GroupToursList';
import { useState } from 'react';
import Search from 'antd/lib/input/Search';
import './styles.css';


function SearchTours({searchTourData, tourTravelList, createSearchTour}) {
   useEffect(() => {
      getSearchTourList(
         {
            page: 1,
            limit: 5,
            
         }

      );
   }, []);
   const [placeActive, setPlaceActive] = useState(100);
   const [searchKeyTour, setSearchKeyTour] = useState('');
   const placeHot = ["Sapa", "Hà Nội", "Hạ Long", "Phú Quốc", "Miền Tây", "Đà Nẵng", "Đà Lạt", "Nha Trang", "Quy Nhơn", "Phú Yên"];
   const hadlePlaceHot =()=>{
      return placeHot.map((placeItem, placeIndex)=>{
         return(
         <p style={{margin:"0px",padding:"10px 0px 10px 10px",cursor:'pointer'}}
          className={`"placeHot" ${placeActive===placeIndex?"place-active":""}`}
          onClick = {()=>{handleSearchTour(placeItem);setPlaceActive(placeIndex)}}
          >{placeItem}</p>
         );
      })
   }

   const handleSearchTour = (value) => {
      setSearchKeyTour(value);

      
   }
   const groupSearchTour = ()=> {
      
               const filterGroupTourData = tourTravelList.filter((item) => {
                  return (item.place.toLowerCase()).indexOf(searchKeyTour.toLowerCase()) !== -1;
               });
      return filterGroupTourData.map((searchTourItem, searchTourIndex) => {
         return(
            <GroupToursList 
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
                           <Card title="Tours Nổi Bật" bordered={false} style={{ width: "100%" }} className="hover-cart">
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
   const { searchTourData } = state.searchTourReducer;
   const { tourTravelList } = state.tourTravelReducer;
   return {
      searchTourData,
      tourTravelList,
   }
   };
   
   const mapDispatchToProps = (dispatch) => {
      return {
         getSearchTourList: (params) => dispatch(getSearchTourList(params)),
         createSearchTour: (params) => dispatch(createSearchTour(params)),
      };
      }
   export default connect(mapStateToProps, mapDispatchToProps)(SearchTours);
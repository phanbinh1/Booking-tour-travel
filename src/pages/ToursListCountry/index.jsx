import React, { useEffect } from 'react';
import { Row, Col, Button, Card } from 'antd';

import history from '../../util/history';

import { connect } from 'react-redux';
import { getTourCountryList} from '../../redux/actions';

import GroupToursCountry  from '../ToursListCountry/GroupToursCountry';
import { useState } from 'react';
import './styles.css';
function ToursListCountry({tourCountryList,getTourCountryList}) {
   useEffect(() => {
      getTourCountryList(
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
      
               const filterGroupTourData = tourCountryList.filter((item) => {
                  return (item.place.toLowerCase()).indexOf(searchKeyTour.toLowerCase()) !== -1;
               });
      return filterGroupTourData.map((searchTourItem, searchTourIndex) => {
         return(
            <GroupToursCountry
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
   const {  tourCountryList } = state.tourCountryReducer;
   return {
      tourCountryList,
   }
   };
   
   const mapDispatchToProps = (dispatch) => {
      return {
         getTourCountryList: (params) => dispatch(getTourCountryList(params)),
      };
      }
   export default connect(mapStateToProps, mapDispatchToProps)(ToursListCountry);

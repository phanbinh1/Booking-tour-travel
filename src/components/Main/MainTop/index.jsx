import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Carousel, Row, Col, Input, Button, Select } from 'antd';

import {
   getSearchTourList,
   createSearchTour,
} from '../../../redux/actions';

import history from '../../../util/history';

import './styles.css';
function MainTop({
   searchTourData,
   getSearchTourList,
}) {
   const handleSearchTour = (value) => {
      getSearchTourList({ searchKey: value });
   }

   const renderSearchOption = () => {
      return searchTourData.map((searchItem, searchIndex) => (
         <Select.Option
            key={`search-item-${searchIndex}`}
            value={searchItem.id}
         >
            {searchItem.name}
         </Select.Option>
      ))
   }
   return (
      <Row>
         <Col span={24}>
            <Row>
               <Col span={24}>
                  <Carousel autoplay>
                     <div className="contentStyle-one">
                     </div>
                     <div className="contentStyle-two">
                     </div>
                     <div className="contentStyle-three">
                     </div>
                     <div className="contentStyle-four">
                     </div>
                  </Carousel>
               </Col>
            </Row>

            <Row className="search-tour-row">
               <Col span={24}>
                  <div className="search-tour-content">
                     
                     <div className="search-tours-title">
                        <div>
                           <h1 style={{ color: 'white', margin:"0px", fontWeight:"800" }}>Đặt tours du lịch!</h1>
                           <h2 style={{ color: 'white', padding:"0px" }}>Hơn 300 tour du lịch Việt Nam Quốc tế</h2>
                        </div>
                        <div className="address-tours">
                           <img src="https://img.icons8.com/ios/24/000000/marker.png" style={{ position: "relative", left: '4px' }} />
                           <Select
                              showSearch
                              style={{ width: "697px", border:"none" }}
                              placeholder="Bạn muốn đi đâu"
                              defaultActiveFirstOption={false}
                              showArrow={false}
                              filterOption={false}
                              onSearch={(value) => handleSearchTour(value)}
                              onSelect={(id) => history.push(`/tour-travel/${id}`)}
                              notFoundContent={null}
                           >
                              {renderSearchOption()}
                           </Select>
                        </div>
                     </div>
                  </div>
               </Col>
            </Row>

         </Col>
      </Row>
   );
}
const mapStateToProps = (state) => {
   const { searchTourData } = state.searchTourReducer;
   return {
      searchTourData,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      getSearchTourList: (params) => dispatch(getSearchTourList(params)),
      createSearchTour: (params) => dispatch(createSearchTour(params)),
   };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainTop);


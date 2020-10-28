import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../util/history';
import { Row,Col, Button } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles.css';
import {
   getSelectTour,
   createHistoryTour,
   deleteTour,
} from '../redux/actions';
function CheckLayOut({ component: Component, ...props
   
}) {
   const {createHistoryTour, getSelectTour, selectTour, deleteTour} = props;
   useEffect(()=>{
      getSelectTour(
         {
            page:1,
            limit:5
         });
      history.push('/checkout/check-cart');
   },[]);

   const [formValueInfo, setFormValueInfo] = useState({
      email:'',
      name:'',
      phone:'',
      request:'',
   });
   const [formValuePayment, setFormValuePayment] = useState({
      cardUser:'',
      cardNumber:'',
   });

   const [valueInfo, setValueInfo] = useState({
      email:'',
      name:'',
      phone:'',
      request:'',
   });
   const [valuePayment, setValuePayment] = useState({
      cardUser:'',
      cardNumber:'',
   });
   const [countModify, setcountModify] = useState(1);

   const [errors, setErrors]= useState({
      email:'',
      password:'',
   });
   const [errorsPayment, setErrorsPayment]= useState({

   });
   useEffect(() => {
      setValueInfo({
         email: formValueInfo.email,
         name: formValueInfo.name,
         phone: formValueInfo.phone,
         request:formValueInfo.request,
      });
      if(countModify === 2){
         checkValidateInfo()
      }
   }, [formValueInfo]);

   useEffect(() => {
      setValuePayment({
         cardUser: formValuePayment.cardUser,
         cardNumber: formValuePayment.cardNumber,
      });
      if(countModify === 3){
         checkValidatePayment()
      }
   }, [formValuePayment]);
   //kiểm tra điều kiện Info
   const checkValidateInfo =()=>{
      let errorsData ={};
         if(formValueInfo.name.length===0 ){
            errorsData={
               ...errorsData,
               name:'Bạn chưa nhập tên',
               
            };
         }else{
            errorsData={
               ...errorsData,
               name:'',
            }
         }
   
         if(formValueInfo.email.length===0 ){
            errorsData={
               ...errorsData,
               email:'Bạn chưa nhập email',
            };
   
         }else{
            errorsData={
               ...errorsData,
               email:'',
            }
         }

         if(formValueInfo.phone.length===0 ){
            errorsData={
               ...errorsData,
               phone:'Bạn chưa nhập số điện thoại',
               
            };
         }else{
            errorsData={
               ...errorsData,
               phone:'',
            }
         }
            setErrors({
               ...errorsData,
            });
   }
   ////kiểm tra điều kiện Payment
   const checkValidatePayment =()=>{
      let errorsDataPayment ={};
         if(formValuePayment.cardUser==='' ){
            
            errorsDataPayment={
               ...errorsDataPayment,
               cardUser:'Bạn chưa nhập tên chủ thẻ',
               
            };
         }else{
            errorsDataPayment={
               ...errorsDataPayment,
               cardUser:'',
            }
         }
   
         if(formValuePayment.cardNumber.length===0 ){
            errorsDataPayment={
               ...errorsDataPayment,
               cardNumber:'Bạn chưa nhập số thẻ',
            };
   
         }else{
            errorsDataPayment={
               ...errorsDataPayment,
               cardNumber:'',
            }
         }
            setErrorsPayment({
               ...errorsDataPayment,
            });

   }
   // chuyển tiếp
   const handleModifyNext = () => {
      //điều kiện để chuyển sang trang 2
      if((countModify === 1) && (localStorage.getItem("authData") != null) ){
         setcountModify(countModify + 1);
         history.push('/checkout/check-info');
      }
      // check điều kiện khi countModfy=2
      if(countModify === 2){
         checkValidateInfo()
      }
      //điều kiện để chuyển sang trang 3
      if((countModify === 2) && errors.email==='' && errors.name===''){
         setcountModify(countModify + 1);
         history.push('/checkout/check-payment');
      }
      // check điều kiện khi countModfy=3
      if(countModify === 3){
         
         checkValidatePayment();
        
      }
      //điều kiện để chuyển sang trang 4   
         if((countModify === 3) && errorsPayment.cardUser==='' && errorsPayment.cardNumber==='' ){
            handleHistory();
            handleDeleteTourComplete();
            setcountModify(countModify + 1);
            history.push('/checkout/check-complete');
         }
   }
   //function chuyển tiếp
   const handleModifyPrevious = () => {
      if(countModify === 4){
         setcountModify(countModify - 1);
         history.push('/checkout/check-payment');
      }
      if(countModify === 3){
         setcountModify(countModify - 1);
         history.push('/checkout/check-info');
      }
      if(countModify === 2){
         setcountModify(countModify - 1);
         history.push('/checkout/check-cart');
      }
   }
   const handleHistory = () => {
      selectTour.map((selectTourItem, selectTourIndex) =>{
         createHistoryTour({
            userName: selectTourItem.userName,
            // userName: tourDetail.image,
            id: selectTourItem.id,
            image: selectTourItem.image,
            place: selectTourItem.place,
            name: selectTourItem.name,
            transports: selectTourItem.transports,
            price: selectTourItem.price,
            startDays: selectTourItem.startDays,
            countUsers: selectTourItem.countUsers,
            selectDay: selectTourItem.selectDay,
            day: selectTourItem.day,
   
         })
      })
      
   }
   //xóa tour đã hoàn tất
   const handleDeleteTourComplete = () => {
      selectTour.map((selectTourItem, selectTourIndex) =>{
         deleteTour({
            id: selectTourItem.id
   
         })
      })
      // deleteTour({ id: id });
    }

  return (
    <Route 
    {...props}
      render={(routerProps) => (
        <>
          <div className="main">
          <Header />
          <Row>
            <Col span={16} style={{margin:"0 auto", paddingTop:"20px"}}>
               <Row style={{ background:"#ccc"}}>
                  <Col span={6}>
                  <div className= {`checkout ${(countModify===1) ? "checkout-active":""}`}>
                     <div className="checkout-number">1</div>
                     <div className="checkout-info">
                        <div className="checkout-title">Kiểm tra</div>
                        <div className="checkout-desc">Tours của bạn</div>
                     </div>
                  </div>
                  </Col>
                  <Col span={6}>
                  <div className= {`checkout ${(countModify===2) ? "checkout-active":""}`}>
                     <div className="checkout-number">2</div>
                     <div className="checkout-info">
                        <div className="checkout-title">Thông tin</div>
                        <div className="checkout-desc">Cá nhân của bạn</div>
                     </div>
                  </div>
                  </Col>
                  <Col span={6}>
                  <div className= {`checkout ${(countModify===3) ? "checkout-active":""}`}>
                     <div className="checkout-number">3</div>
                     <div className="checkout-info">
                        <div className="checkout-title">Xác nhận</div>
                        <div className="checkout-desc">Dịch vụ thanh toán</div>
                     </div>
                  </div>
                  </Col>
                  <Col span={6}>
                  <div className= {`checkout ${(countModify===4) ? "checkout-active":""}`}>
                     <div className="checkout-number">4</div>
                     <div className="checkout-info">
                        <div className="checkout-title">Hoàn tất</div>
                        <div className="checkout-desc" >Đặt tour online</div>
                     </div>
                  </div>
                  </Col>
               </Row>

               <Component {...routerProps}
                  setFormValueInfo={setFormValueInfo}
                  errors={errors} 
                  formValueInfo={formValueInfo} 
                  valueInfo={valueInfo}

                  setFormValuePayment={setFormValuePayment}
                  errorsPayment={errorsPayment} 
                  formValuePayment={formValuePayment} 
                  valuePayment={valuePayment}
               />

               {countModify!=4&&<Row style={{background:"#aaa"}}>
                  <Col span={24}>
                     <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
                        
                           <button 
                           
                           type="button" 
                           onClick={()=>{handleModifyPrevious(); if(countModify===1){history.push("/")}}}
                        >
                              {countModify===1?'Đặt thêm tour':'Trở về'}
                        </button>
                        
                     


                        <Button 
                              type="primary" 
                              onClick={()=>{handleModifyNext()}}
                              
                        >
                              {countModify===4?'Xem lịch sử Tour':'Tiếp theo'}
                        </Button>
                  </div>
                  </Col>
               </Row>}

            </Col>
          </Row>
          <Footer />
          </div>
        </>
      )}
    />
  );
}
const mapStateToProps = (state) => {

   const { selectTour } = state.selectTourReducer;


   return {
      // tourDetail,
      selectTour,
   }
   };
   
   const mapDispatchToProps = (dispatch) => {
   return {
      getSelectTour: (params) => dispatch(getSelectTour(params)),
      createHistoryTour: (params) => dispatch(createHistoryTour(params)),
      deleteTour: (params) => dispatch(deleteTour(params)),
   };
   }
   export default connect(mapStateToProps, mapDispatchToProps)(CheckLayOut);

// export default CheckLayOut;

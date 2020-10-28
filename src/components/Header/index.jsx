import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import history from '../../util/history';
import SignInModal from "./modifyAccountModal/SignInModal";
import SignUpModal from "./modifyAccountModal/SignUpModal";
import b from "../../images/b.png";
import { Carousel, Row, Col,Divider } from 'antd';
import {
  getUser,
  signIn,
}from '../../redux/actions';
import './styles.css';
function Header({
   signIn,signInAuth,
}){

   const userId = signInAuth.id;
   useEffect(() => {
      handleHideModifyModal()
   },[userId]);
   const [isShowModifyModal, setIsShowModifyModal] = useState(false);
   const [isCofirmUser, setIsCofirmUser] = useState(true);
   
   const handleShowModifyModal = () => {
      setIsShowModifyModal(true);
   }

   const handleHideModifyModal = () => {
      setIsShowModifyModal(false);
   }
   const handleSubmitSignIn = (values)=>{
      signIn(values);
      
      // const indexUser = createUser.findIndex(item =>{
      //    return item.userName === values.userName && item.password ===values.password
      // })
      // if(indexUser != -1){
      //    localStorage.setItem("userName", values.userName);
      //    handleHideModifyModal();
      // }else{
      //    setIsCofirmUser(false);
      // }
   }

   const [isShowSignUpModal, setIsShowSignUpModal] = useState(false);
   const handleShowSignUpModal = () => {
   setIsShowSignUpModal(true);
   handleHideModifyModal();
 }

   const handleHideSignUpModal = () => {
   setIsShowSignUpModal(false);
 }
   return (
      <Row>
         <Col span={24} className="header-container">
            <nav className="header-content">
               <div className="logo">
                  <img style={{width:"60px"}} src={b} alt=""/>
               </div>
               <label htmlFor="btn" className="icon">
                  <img className="class-icon" src="https://img.icons8.com/metro/26/000000/menu.png"/>
               </label>
               {/* <input type="checkbox" id="btn" /> */}
               <ul>
                  <li
                     onClick={() => history.push('/Hotel')}>
                     <a 
                        className={`${history.location.pathname === '/Hotel' && 'hover-active'}`}
                     >Khách sạn</a>
                  </li>
                  <li 
                     onClick={() => history.push('/')}>
                     <a  
                        className={`${(history.location.pathname === '/' || history.location.pathname === '/tour-travel') && 'hover-active'}`}
                     >Tours</a>
                  </li>
                  <li onClick={() => history.push('/air-ticket')}>
                     <a 
                        className={`${history.location.pathname === '/air-ticket' && 'hover-active'}`}
                     >Vé máy bay</a> 
                  </li>
                  <li onClick={() => history.push('/checkout/check-history')}><a
                     className={`${history.location.pathname === '/checkout/check-history' && 'hover-active'}`}
                   >Lịch sử đặt tour</a></li>
               </ul>
               {/* <div style={{display:"flex", flexDirection:"column"}}> */}
               <div className="account-person" onClick={() => handleShowModifyModal()} >
                  <div className="person">
                     <img src="https://img.icons8.com/office/22/000000/person-male-skin-type-1-2.png"/>
                  </div>
                  <span style={{fontSize:"18px", color:'white', paddingRight:"15px"}}>
                     {(localStorage.getItem("authData")===null)?'Tài khoản' : JSON.parse(localStorage.getItem("authData")).userName}
                  </span>
               </div>
               {/* <div style={{position:"relative", zIndex:"99"}}>
                  <div>
                     <div style={{padding:"10px 30px 10px 30px"}}>Đăng nhập</div>
                     <div style={{padding:"10px 30px 10px 30px"}}>Đăng kí</div>
                  </div>
                  <div style={{padding:"10px 30px 10px 30px"}}>Đăng xuất</div>
               </div> */}
               {/* </div> */}
               
            
               <div className="help-phone">
                  <a style={{color:'#F79321', textDecoration:'none', fontSize:'25px'}} >
                     <img style={{height:'40px', }} src="https://img.icons8.com/dusk/64/000000/phone.png"/>
                     (028) 3933 8002
                  </a> 
               </div>
            </nav>
         <SignInModal
         isShowModal={isShowModifyModal}
         handleHideModal={handleHideModifyModal}
         handleSubmitSignIn={handleSubmitSignIn}
         handleShowSignUpModal={handleShowSignUpModal}
         isCofirmUser= {isCofirmUser}
         />
         <SignUpModal 
         isShowSignUpModal={isShowSignUpModal}
         handleHideSignUpModal={handleHideSignUpModal}
         handleShowModifyModal={handleShowModifyModal}
         />
         </Col>
      </Row>
   );
}
const mapStateToProps = (state) => {
   const { createUser} = state.signUpModalReducer;
   const {  signInAuth } = state.authReducer;
   return {
      createUser,
      signInAuth,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      signIn: (params) => dispatch(signIn(params)),
   };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

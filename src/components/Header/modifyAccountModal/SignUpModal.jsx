import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Input, Row, Col } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  getUser,
  createUser,
} from '../../../redux/actions';
import './styles.css';

function SignUpModal({
   handleShowModifyModal,
   isShowSignUpModal,
   handleHideSignUpModal,
   getUser,
   createUser,
}) {
   useEffect(() => {
      getUser();
   },[]);
  const renderCustomInput=(props)=>{
    const {field, meta}=props;
    return(
      <Row>
         <Col span={24} style={{marginBottom:"10px", marginTop:"10px"}}>
            <Input
               {...field}
               type= {field.type}
            />
            {meta.touched && meta.error ? <div style={{color:"red"}}> {meta.error}</div>: null}
         </Col>
      </Row>
    )
   }

  const handleSubmitSignUp = (values)=>{
    createUser({
      userName: values.userName,
      email: values.email,
      password: values.password,
     });
     handleHideSignUpModal();
   }

  return (
      <Modal
        title="Sign up"
        visible={isShowSignUpModal}
        onCancel={handleHideSignUpModal}
        footer={false}
      >
        <Formik
          initialValues={
            {
              userName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }
          }
          validationSchema={Yup.object({
            userName: Yup.string()
              .required('Bạn chưa nhập tên')
              .max(15, 'Nhập 15 kí tự trở xuống'),
            email: Yup.string()
              .required('Bạn chưa nhập email')
              .email('Email có định dạng chưa đúng'),
            password: Yup.string()
              .required('Bạn chưa nhập mật khẩu')
              .min(8, 'Mật khẩu phải có độ dài tối thiểu là 8 kí tự'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password")], "Bạn chưa nhập đúng mật khẩu ở trên")
              .required("Bạn chưa nhập lại mật khẩu"),
          })}
          onSubmit={(values) => handleSubmitSignUp(values)}
        >
          <Form>
            <label htmlFor="title" style={{color:"black", fontWeight:"400"}}>Họ và tên</label>
          <Field  
            name='userName'
          >
            {(props)=>renderCustomInput({
            ...props,
            field: {
            ...props.field,
            placeholder:'Họ và tên',
            type:'text',
            },
                    })
            }
            </Field>
            <label htmlFor="title" style={{color:"black", fontWeight:"400"}}>Email</label>
            <Field  
              name='email'
            >
              {(props)=>renderCustomInput({
                          ...props,
                          field: {
                          ...props.field,
                          placeholder:'email',
                          type:'email',
                        },
                        })
                  }
              </Field>
            <label htmlFor="title" style={{color:"black", fontWeight:"400"}}>Mật khẩu</label>
            <Field  
              name='password'
            >
              {(props)=>renderCustomInput({
                          ...props,
                          field: {
                            ...props.field,
                            placeholder:'Mật khẩu',
                            type:'password',
                          },
                        })
                  }
                    </Field>

            <label htmlFor="title" style={{color:"black", fontWeight:"400"}}>Nhập lại mật khẩu</label>
            <Field  
              name='confirmPassword'
            >
              {(props)=>renderCustomInput({
                          ...props,
                          field: {
                            ...props.field,
                            placeholder:'Nhập lại mật khẩu',
                            type:'password',
                          },
                        })
                  }
            </Field>
            <Row>
               <Col span={24} style={{display:"flex", justifyContent:"flex-end", marginTop:"20px"}}>
                  <button type="button" style={{marginRight:"15px"}} onClick={() => {handleShowModifyModal(); handleHideSignUpModal()
                  }}>
                     Đăng nhập
                  </button>
                  <button type="submit">
                     Đăng kí
                  </button>
               </Col>
        </Row>   
          </Form>
        </Formik>
      </Modal>
  );
}
const mapStateToProps = (state) => {
  const { createUser} = state.signUpModalReducer;
  return {
    createUser,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (params) => dispatch(getUser(params)),
    createUser: (params) => dispatch(createUser(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal)

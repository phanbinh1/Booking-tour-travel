import React, {useState, useEffect} from 'react';
import { Modal, Button, Input, Row, Col } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './styles.css';


function SignInModal({
  isShowModal,
  handleHideModal,
  handleSubmitSignIn,
  handleShowSignUpModal,
  isCofirmUser,
}){

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

  return (
   <Modal
      title="Đăng Nhập"
      visible={isShowModal}
      onCancel={handleHideModal}
      footer={false}
   >
      <Formik
        initialValues={
          {
            userName: '',
            password: '',
          }
        }
        validationSchema={Yup.object({
          userName: Yup.string()
          .required('Bạn chưa nhập tên')
          .max(15, 'Nhập 15 kí tự trở xuống'),
          password: Yup.string()
          .required('Bạn chưa nhập mật khẩu')
          .min(8, 'Mật khẩu phải có độ dài tối thiểu là 8 kí tự'),
        })}
        onSubmit={(values)=> handleSubmitSignIn(values)}
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
                      placeholder:'Họ và Tên',
                      type:'text',
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
        {(isCofirmUser === false) && <div style={{color:"red"}}>Bạn nhập chưa đúng mật khậu, tên hoặc chưa đăng kí..</div>}
        <Row>
          <Col span={24} style={{display:"flex", justifyContent:"flex-end", marginTop:"20px"}}>
            <button type="submit" style={{marginRight:"15px"}}>
              Đăng nhập
            </button>
            <button type="button"
                    onClick={()=>handleShowSignUpModal()}
            >
              Đăng kí
            </button>
          </Col>
        </Row>   
      </Form>
      </Formik>
      </Modal>
  );
}
export default SignInModal;

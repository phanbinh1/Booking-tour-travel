import React from 'react';
import { Carousel, Row, Col,Divider } from 'antd';
import './styles.css';
function Footer() {
  return (
     <Row className="footer">
        <Col span={19} style={{margin:"0 auto"}}>
           <Row>
              <Col span={24}>
               <Row gutter={30} >
                  <Col span={6}>
                     <ul className="footer-ul">
                        <li>
                           <h4>Về Tour.com</h4>
                        </li>
                        <li><a href="#">Chúng tôi</a></li>
                        <li><a href="#">iVIVU Blog</a></li>
                        <li><a href="#">PMS - Miễn phí</a></li>
                     </ul>
                  </Col>
                  <Col span={6}>
                     <ul className="footer-ul">
                        <li>
                           <h4>Thông Tin Cần Biết</h4>
                        </li>
                        <li><a href="#">Điều kiện &amp; Điều khoản</a></li>
                        <li><a href="#">Quy chế hoạt động</a></li>
                        <li><a href="#">Câu hỏi thường gặp</a></li>
                     </ul>
                  </Col>
                  <Col span={6}>
                     <ul className="footer-ul">
                        <li>
                           <h4>Đối Tác &amp; Liên hệ</h4>
                        </li>
                        <li><a href="#">Vietnam Airlines</a></li>
                        <li><a href="#">VNExpress</a></li>
                     </ul>
                  </Col>
                  <Col span={6}>
                     <ul className="footer-ul">
                        <li>
                           <h4>Trợ giúp</h4>
                        </li>
                        <li><a href="#"><strong>CSKH: </strong>(028) 3933 8002</a></li>
                        <li><a href="#"><strong>CSKH: </strong>0906 355 542</a></li>
                     </ul>
                  </Col>
               </Row>
              </Col>
           </Row>
        </Col>
     </Row>
  );
}
export default Footer;

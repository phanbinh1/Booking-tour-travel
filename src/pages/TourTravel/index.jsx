import React, { useEffect, useState } from 'react';
import { Row, Col, Tabs, Select } from 'antd';
import { connect } from 'react-redux';
import history from '../../util/history';
import {
   getTourDetail,
   createSelectTour,
} from '../../redux/actions';
import './styles.css';
function TourTravel({
   tourDetail,
   getTourDetail,
   match,
   createSelectTour,
}) {

   const { Option } = Select;
   const { TabPane } = Tabs;
   const [selectDay, setSelectDay] = useState('');
   const [countUsers, setCountUser] = useState(2);
   const [startDay, setStartDay] = useState('');
   const tourDetailId = match.params.id;
   const [countActive, setCountActive]= useState(0);
   // const userId="";

   useEffect(() => {
      getTourDetail(
         {
            id: tourDetailId
         }
      );
   }, [tourDetailId]);

   useEffect(() => {
      setStartDay(tourDetail.startDays[0].day)
   }, [tourDetail]);
   console.warn('tourDetail', tourDetail);
   //scrolltoview
   const handleMovies = () => {
      var elmnt = document.getElementById("programme-tour");
      elmnt.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
    }
    const handleMoviesProgramme = () => {
      var calendar = document.getElementById("calendar");
      calendar.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
      
    }
    const handleMoviesRules = () => {
      var rules = document.getElementById("rules");
      rules.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
      
    }

    //bảng ngày đi, ngày về
    const renderCalendarDays = () => {
      return tourDetail.calendarDays.map((calendarItem, calendarIndex) => {
         return(
            <tr>
               <td>{calendarItem.startDay}</td>
               <td>{calendarItem.abouttDay}</td>
               <td>Liên hệ</td>
               <td>{tourDetail.price}</td>
            </tr>
         )
      })
   }
   

   // const content = '<div><img src="http://cdn2.ivivu.com/2019/12/24/14/ivivu-thung-lung-man-750x390.gif" alt=""/></div><h2>Như cô gái mới lớn, Mộc Châu đẹp ngỡ ngàng bởi những mùa hoa</h2><p>Mộc Châu khiến dân tình "đứng ngồi không yên" bởi cao nguyên xanh tươi mát lành đẹp cả bốn mùa, có núi rừng hùng vĩ bao la, có thác cao suối chảy róc rách, có đỉnh Pha Luông lồng lộng gió trời mây phủ, có những đồi chè xanh bạt ngàn, đàn bò sữa nhởn nhơ gặm cỏ… Và được yêu thích nhất có lẽ là những mùa hoa đầy màu sắc, tạo nên bức tranh tươi đẹp, mới mẻ theo từng tháng trong năm. Bên cạnh đó liên tuyến Tà Xùa những biển mây trắng muốt, bồng bềnh, khiến con tim xốn xang, rộn ràng. Cùng iVIVU khám phá ngay hôm nay!</p><h2>Những trải nghiệm thú vị trong chương trình</h2><p>Núi Rừng Tây Bắc làm cho lữ khách động lòng trước cảnh:</p><p><strong>- Đồi chè trái tim:</strong>Đây là một trong những khu vực đẹp nhất Mộc Châu. Cho dù vào mùa đông cành khô trơ trụi lá hay mùa xuân mơn mởn khoe sắc lá non.</p><p><strong>- Thung Lũng Mận Nà Ka:</strong>Trước mắt bạn sẽ hiện ra thung lũng mận bạt ngàn, bằng phẳng.</p><p><strong>- Đỉnh núi Tà Xùa:</strong>núi trùng điệp, đường đèo dốc quanh co, sương mù giăng kín lối</p><h2>Bạn có sẵn sàng</h2><p>Công ty trang bị an toàn cho khách khi tham gia tour: </p><p>- Nước rửa tay sát khuẩn.</p><p>- Khẩu trang y tế.</p><p>- Tờ khai y tế.</p><h2>Chương trình tour</h2><h3>NGÀY 01: HÀ NỘI - MỘC CHÂU - BẮC YÊN ( ĂN TRƯA, TỐI)</h3><p>05h30: Xe ô tô và hướng dẫn viên công ty đón quý khách tại <strong>nhà hát lớn Hà Nội</strong>.khởi hành đi tour <strong>Mộc Châu – Tà Xùa</strong>. Quý khách dừng chân dùng bữa sáng tự túc tại <strong>Hòa Bình</strong>. Tiếp tục hành trình đến đèo <strong>Thung Khe, Thung Chuối</strong> quý khách dừng chân chụp ảnh và cùng đón những tia nắng đầu tiên của buổi bình minh nơi núi rừng.</p><div><img src="http://cdn2.ivivu.com/2019/12/24/14/ivivu-deo-thung-khe.gif" alt="Đèo Thung Khe."/></div><p>10h30: Đến <strong>Mộc Châu</strong> khách dùng bữa trưa tại nhà hàng với những món ăn đặc sắc nhất của vùng núi rừng <strong>Tây Bắc</strong>.</p><p>13h00: Quý khách khởi hành đi thăm quan:</p><p><strong>- Đồi chè trái tim:</strong> Đây là một trong những khu vực đẹp nhất Mộc Châu. Cho dù vào mùa đông cành khô trơ trụi lá hay mùa xuân mơn mởn khoe sắc lá non, Mộc Châu vẫn luôn được bao bọc trong màu sắc xanh tuyệt đẹp của những đồi chè. Đồi chè đẹp nhất có lẽ là đồi chè trái tim, đồi chè chữ S.</p><div><img src="http://cdn2.ivivu.com/2019/12/24/14/ivivu-doi-che-trai-tim.gif" alt="Đồi Chè Trái Tim"/></div><p><strong>- Lựa Chọn 1</strong>: <strong>Thung Lũng mận Nà Ka</strong>: Nằm trên đường vào xã <strong>Tân Lập</strong>, thung lũng mận <strong>Nà Ka</strong> cách thị trấn Nông trường <strong>Mộc Châu</strong> 16km. Từ tỉnh lộ 104, rẽ trái vào thung lũng chỉ mất vài phút đi xe máy. Trước mắt bạn sẽ hiện ra thung lũng mận bạt ngàn, bằng phẳng. Hàng năm vào mùa hoa mận nở, thung lũng được phủ một lớp màn trắng lung linh bất tận của hoa mận.</p><div><img src="http://cdn2.ivivu.com/2019/12/24/14/ivivu-thung-lung-man-na-ka.gif" alt="Thung Lũng Mận nà Ka."/></div><p><strong>- Lựa chọn 2</strong>: Vườn hoa <strong>Happy land - Happy land</strong> có diện tích gần 5ha, nằm giữa một thung lũng rộng lớn ở bản Lùn, xã Mường Sang. Đến đây, du khách sẽ được đón chào bởi những thảm hoa được trồng từ nhiều loại hoa khác nhau, trong đó có những loài hoa đặc trưng của vùng Tây Bắc.</p><div><img src="http://cdn2.ivivu.com/2019/12/24/14/ivivu-happy-land.gif" alt="Vườn Hoa Happy Land"/></div><p>Tiếp tục hành trình, đoàn khởi hành đi <strong>Bắc Yên</strong> – quý khách phải vượt qua 28 km đường nhựa chạy ven sông Đà để đến với bến phà Vạn Yên, rồi sau đó di chuyển 57 km nữa mới đến được trung tâm thị trấn Bắc Yên. Quãng đường này đặt biệt thơ mộng với vẻ đẹp sông Đà cùng các bản làng người Thái chạy dọc sông… Quý khách nghỉ đêm tại Bắc Yên.</p><p>18h00: Quý khách dùng bữa tối tại nhà hàng. Nghỉ đêm tại khách sạn tại <strong>Bắc Yên</strong>.</p><h3>NGÀY 2: BẮC YÊN - SĂN MÂY TÀ XÙA - HÀ NỘI ( ĂN SÁNG, TRƯA)</h3><p>05h00: Xe ô tô và hướng dẫn viên đưa đoàn đi ngắm bình minh trên đỉnh núi <strong>Tà Xùa</strong>. Đoàn có dịp trải nghiệm với khúc đường ngoằn nghèo, thi thoảng đoàn được chiêm ngắm các loài hoa <strong>Đỗ Quyên</strong>, Táo Mèo và các loài hoa cúc dại khi chinh phục đỉnh núi <strong>Tà Xùa</strong> ở độ cao 2.650 m mà chắc hẳn khi leo lên đến đây nhiều bạn sẽ vỡ òa cảm giác sung sướng. Cùng ăn mừng và chụp ảnh chiến thắng ngắm bình minh lên, cùng săn mây trên đỉnh núi <strong>Tà Xùa</strong> mà có lẽ ít nhất một lần trong đời nên đi để thưởng thức hương vị đó. Quý khách dùng bữa sáng theo kiểu Picnic trên đỉnh <strong>Tà Xùa</strong>.</p><div><img src="http://cdn2.ivivu.com/2020/08/04/09/ivivu-ta-xua-3.gif" alt="Tà xua"/></div><p>11h00: Quý khách quay về khách sạn làm thủ tục trả phòng khách sạn di chuyển đến nhà hàng dùng bữa trưa. Sau bữa trưa quý khách lên xe về <strong>Hà Nội</strong> trên đường về quý khách dùng chân nghỉ ngơi, thưởng thức và mua những đặc sản Sữa Ba Vì.</p><p>18h00: Về đến Hà Nội. Kết thúc lịch trình tour <strong>Mộc Châu – Tà Xùa</strong> 2 ngày 1 đêm. Chia tay và hẹn gặp lại quý khách trong những chương trình tiếp theo.</p><p style={{fontStyle:"italic"}}>Thứ tự tham quan có thể thay đổi nhưng vẫn đảm bảo đầy đủ điểm trong chương trình.</p>';


   const renderTransports = () => {
      return tourDetail.transports.map((item, index) => {
         return (
            <img src={item.transport} style={{ marginRight: '8px' }} />
         );
      })
   }

   const renderOptionDay = () => {
      return tourDetail.startDays.map((itemDay, indexDay) => {
         return (
            <Option value={itemDay.day}>{itemDay.day}</Option>
         )
      })
   }

   const handleValueTour = (value) => {
      setSelectDay(value);
   }

   const handleSetTour = () => {
      // if (startDay != '') {

         createSelectTour({
            userName: JSON.parse(localStorage.getItem("authData")).userName,
            // userName: tourDetail.image,
            id: tourDetail.id,
            image: tourDetail.image,
            place: tourDetail.place,
            name: tourDetail.name,
            transports: tourDetail.transports,
            price: tourDetail.price,
            startDays: tourDetail.startDays,
            countUsers: countUsers,
            selectDay: startDay,
            day: tourDetail.day,

         })
         
      // }
   }


   return (

      <Row style={{ background: "#ecf0f5" }}>
         <Col span={18} style={{ margin: "0 auto" }}>
            <h1 style={{ color: "#003C71", fontSize: "30px", fontWeight: "700" }}>{tourDetail.name}</h1>
         </Col>

         <Col span={18} style={{ margin: "0 auto" }}>
            <Row gutter={30}>
               <Col span={16}>
                  <Row style={{ background: "white" }}>
                     <Col span={24} >
                        {/* <div dangerouslySetInnerHTML={{__html:content}}>
                     
                  </div> */}
                        <div><img style={{ width: "749.6px" }} src={tourDetail.image} alt=""  /></div>
                        <div>
                           <div>
                              <div style={{ display: "flex", alignItems: "center", height: "60px", justifyContent: "space-between", background: "rgba(148, 151, 163, 0.288)" }}>
                                 <div style={{ display: "flex" }}>
                                    <div style={{ display: "flex", padding: "0 20px 0 20px" }}>
                                       <img src="https://img.icons8.com/offices/18/000000/marker.png" />
                                       <span style={{ paddingLeft: "5px", color: "#50535d", fontWeight: "700" }}>{tourDetail.place}</span>
                                    </div>
                                    <div style={{ display: "flex", padding: "0 20px 0 20px" }}>
                                       <img src="https://img.icons8.com/material-rounded/14/000000/time-machine.png" />
                                       <span style={{ color: "#50535d", paddingLeft: "5px", fontWeight: "700" }}>{tourDetail.day}</span>
                                    </div>

                                 </div>
                                 <div >
                                    <span style={{ paddingRight: "5px", color: "#50535d", fontWeight: "700" }}>Phương tiện: </span>
                                    <span>{renderTransports()}</span>
                                 </div>

                              </div>
                           </div>
                        </div>
                        <div style={{ padding: "15px", textAlign: "justify", color: "#494b55", fontSize: "16px" }}>
                           <h2 style={{ color: "#003c71" }}>Như cô gái mới lớn, Mộc Châu đẹp ngỡ ngàng bởi những mùa hoa</h2>
                           <p>Mộc Châu khiến dân tình 'đứng ngồi không yên' bởi cao nguyên xanh tươi mát lành đẹp cả bốn mùa,
                           có núi rừng hùng vĩ bao la, có thác cao suối chảy róc rách, có đỉnh Pha Luông lồng lộng gió trời mây phủ,
                           có những đồi chè xanh bạt ngàn, đàn bò sữa nhởn nhơ gặm cỏ…
                           Và được yêu thích nhất có lẽ là những mùa hoa đầy màu sắc, tạo nên bức tranh tươi đẹp,
                           mới mẻ theo từng tháng trong năm. Bên cạnh đó liên tuyến Tà Xùa những biển mây trắng muốt,
                           bồng bềnh, khiến con tim xốn xang, rộn ràng. Cùng iVIVU khám phá ngay hôm nay!</p>
                           <h2 style={{ color: "#003c71" }}>Những trải nghiệm thú vị trong chương trình</h2>
                           <p>Núi Rừng Tây Bắc làm cho lữ khách động lòng trước cảnh:</p>
                           <p><strong>- Đồi chè trái tim:</strong>Đây là một trong những khu vực đẹp nhất Mộc Châu.
                           Cho dù vào mùa đông cành khô trơ trụi lá hay mùa xuân mơn mởn khoe sắc lá non.</p>
                           <p><strong>- Thung Lũng Mận Nà Ka:</strong>Trước mắt bạn sẽ hiện ra thung lũng mận bạt ngàn, bằng phẳng.</p>
                           <p><strong>- Đỉnh núi Tà Xùa:</strong>núi trùng điệp, đường đèo dốc quanh co, sương mù giăng kín lối</p>
                           <h2 style={{ color: "#003c71" }}>Bạn có sẵn sàng</h2><p>Công ty trang bị an toàn cho khách khi tham gia tour: </p>
                           <p>- Nước rửa tay sát khuẩn.</p><p>- Khẩu trang y tế.</p>
                           <p>- Tờ khai y tế.</p>

                           
                           <h2 style={{color: "#003c71"}} id="programme-tour"
                           ><u>CHƯƠNG TRÌNH TOUR</u> </h2>


                           <h3>NGÀY 01: HÀ NỘI - MỘC CHÂU - BẮC YÊN ( ĂN TRƯA, TỐI)</h3>
                           <p>05h30: Xe ô tô và hướng dẫn viên công ty đón quý khách tại
                           <strong>nhà hát lớn Hà Nội</strong>.khởi hành đi tour <strong>Mộc Châu – Tà Xùa</strong>.
                           Quý khách dừng chân dùng bữa sáng tự túc tại <strong>Hòa Bình</strong>. Tiếp tục hành trình đến đèo
                           <strong>Thung Khe, Thung Chuối</strong> quý khách dừng chân chụp ảnh và cùng đón những tia nắng đầu tiên
                           của buổi bình minh nơi núi rừng.</p>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}><img style={{ width: "100%" }} src="http://cdn2.ivivu.com/2019/12/24/14/ivivu-deo-thung-khe.gif" alt="Đèo Thung Khe." /> <p style={{ display: "flex", justifyContent: "center", fontStyle: "italic" }}>Đèo Thung Khe</p></div>
                                    <p>10h30: Đến <strong>Mộc Châu</strong> khách dùng bữa trưa tại nhà hàng với những món ăn đặc sắc nhất của
                           vùng núi rừng <strong>Tây Bắc</strong>.</p>
                                    <p>13h00: Quý khách khởi hành đi thăm quan:</p>
                                    <p><strong>- Đồi chè trái tim:</strong> Đây là một trong những khu vực đẹp nhất Mộc Châu.
                           Cho dù vào mùa đông cành khô trơ trụi lá hay mùa xuân mơn mởn khoe sắc lá non, Mộc Châu vẫn luôn được
                           bao bọc trong màu sắc xanh tuyệt đẹp của những đồi chè. Đồi chè đẹp nhất có lẽ là đồi chè trái tim,
                              đồi chè chữ S.</p>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}><img style={{ width: "100%" }} src="http://cdn2.ivivu.com/2019/12/24/14/ivivu-doi-che-trai-tim.gif" alt="Đồi Chè Trái Tim" /><p style={{ display: "flex", justifyContent: "center", fontStyle: "italic" }}>Đồi Chè Trái Tim</p></div>
                                    <p><strong>- Lựa Chọn 1</strong>: <strong>Thung Lũng mận Nà Ka</strong>: Nằm trên đường vào xã
                           <strong>Tân Lập</strong>, thung lũng mận <strong>Nà Ka</strong> cách thị trấn Nông trường
                           <strong>Mộc Châu</strong>
                              16km. Từ tỉnh lộ 104, rẽ trái vào thung lũng chỉ mất vài phút đi xe máy. Trước mắt bạn sẽ hiện ra
                              thung lũng mận bạt ngàn, bằng phẳng. Hàng năm vào mùa hoa mận nở, thung lũng được phủ một lớp màn trắng
                              lung linh bất tận của hoa mận.</p>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}><img style={{ width: "100%" }} src="http://cdn2.ivivu.com/2019/12/24/14/ivivu-thung-lung-man-na-ka.gif" alt="Thung Lũng Mận nà Ka." /><p style={{ display: "flex", justifyContent: "center", fontStyle: "italic" }}>Thung Lũng Mận nà Ka</p></div>
                                    <p><strong>- Lựa chọn 2</strong>: Vườn hoa
                           <strong>Happy land - Happy land</strong> có diện tích gần 5ha, nằm giữa một thung lũng rộng lớn ở bản Lùn,
                           xã Mường Sang. Đến đây, du khách sẽ được đón chào bởi những thảm hoa được trồng từ nhiều loại hoa khác nhau,
                           trong đó có những loài hoa đặc trưng của vùng Tây Bắc.</p>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}><img style={{ width: "100%" }} src="http://cdn2.ivivu.com/2019/12/24/14/ivivu-happy-land.gif" alt="Vườn Hoa Happy Land" /><p style={{ display: "flex", justifyContent: "center", fontStyle: "italic" }}>Vườn Hoa Happy Land</p></div>
                                    <p>Tiếp tục hành trình, đoàn khởi hành đi <strong>Bắc Yên</strong> – quý khách phải vượt qua 28 km
                           đường nhựa chạy ven sông Đà để đến với bến phà Vạn Yên, rồi sau đó di chuyển 57 km nữa mới đến được
                           trung tâm thị trấn Bắc Yên. Quãng đường này đặt biệt thơ mộng với vẻ đẹp sông Đà cùng các bản làng người
                           Thái chạy dọc sông… Quý khách nghỉ đêm tại Bắc Yên.</p>
                                    <p>18h00: Quý khách dùng bữa tối tại nhà hàng. Nghỉ đêm tại khách sạn tại <strong>Bắc Yên</strong>.</p>
                                    <h3>NGÀY 2: BẮC YÊN - SĂN MÂY TÀ XÙA - HÀ NỘI ( ĂN SÁNG, TRƯA)</h3>
                                    <p>05h00: Xe ô tô và hướng dẫn viên đưa đoàn đi ngắm bình minh trên đỉnh núi
                           <strong>Tà Xùa</strong>. Đoàn có dịp trải nghiệm với khúc đường ngoằn nghèo, thi thoảng đoàn được chiêm ngắm
                           các loài hoa
                           <strong>Đỗ Quyên</strong>, Táo Mèo và các loài hoa cúc dại khi chinh phục đỉnh núi
                           <strong>Tà Xùa</strong> ở độ cao 2.650 m mà chắc hẳn khi leo lên đến đây nhiều bạn sẽ vỡ òa cảm giác
                           sung sướng.
                           Cùng ăn mừng và chụp ảnh chiến thắng ngắm bình minh lên, cùng săn mây trên đỉnh núi
                           <strong>Tà Xùa</strong> mà có lẽ ít nhất một lần trong đời nên đi để thưởng thức hương vị đó.
                           Quý khách dùng bữa sáng theo kiểu Picnic trên đỉnh <strong>Tà Xùa</strong>.</p>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}><img style={{ width: "100%" }} src="http://cdn2.ivivu.com/2020/08/04/09/ivivu-ta-xua-3.gif" alt="Tà xua" /><p style={{ display: "flex", justifyContent: "center", fontStyle: "italic" }}>Tà xua</p></div>
                                    <p>11h00: Quý khách quay về khách sạn làm thủ tục trả phòng khách sạn di chuyển đến nhà hàng dùng bữa trưa.
                           Sau bữa trưa quý khách lên xe về <strong>Hà Nội</strong> trên đường về quý khách dùng chân nghỉ ngơi,
                           thưởng thức và mua những đặc sản Sữa Ba Vì.</p>
                                    <p>18h00: Về đến Hà Nội. Kết thúc lịch trình tour
                           <strong>Mộc Châu – Tà Xùa</strong> 2 ngày 1 đêm. Chia tay và hẹn gặp lại quý khách trong những
                           chương trình tiếp theo.</p>
                                    <p style={{ display: "flex", justifyContent: "center", fontStyle: "italic" }}>Thứ tự tham quan có thể thay đổi nhưng vẫn đảm bảo
                           đầy đủ điểm trong chương trình.</p>
                                 </div>

                        <div style={{ display: "flex", justifyContent: "space-between", padding: "15px" }}>
                           <h1 id="calendar" style={{ color: "#003c71", margin: "0px", padding: "0px" }}
                           > <u>LỊCH KHỞI HÀNH</u> </h1>
                           <div style={{ display: "flex", justifyContent: "center", padding: "3px 10px 3px 10px", border: "1px solid #ccc" }}>
                              <img src="https://img.icons8.com/dotty/32/000000/plus-1day.png" style={{ paddingRight: "5px" }} />
                              <span style={{ paddingTop: "5px" }}>{tourDetail.start}</span>
                           </div>
                        </div>

                        <div style={{ padding: "15px" }}>
                           <table>
                              <tr>
                                 <th>Ngày khởi hành</th>
                                 <th>Ngày về</th>
                                 <th>Tình trạng</th>
                                 <th>Giá</th>
                              </tr>
                              {renderCalendarDays()}
                              
                           </table>
                        </div>

                        <div style={{ padding: "15px", textAlign: "justify", color: "#494b55", fontSize: "16px" }}>
                           <h2 style={{ color: "#003c71" }}>Chính sách phụ thu</h2>
                           <p>- Trẻ em dưới 5 tuổi, ăn uống và ngủ chung giường với bố mẹ. Bố mẹ tự thanh toán các chi phí phát sinh ( nếu có) của bé. Vé máy bay theo quy định của hãng.</p>
                           <p>- Phụ thu phòng đơn: 250.000VNĐ/khách/tour</p>
                           <p>- Trẻ em từ 6 -10 tuổi, tính 75% chi phí người lớn. </p>
                           <p>- Trẻ từ 11 tuổi trở lên, tính bằng chi phí người lớn.</p>
                        </div>

                        <div style={{ padding: "15px", textAlign: "justify", color: "#494b55 !important", fontSize: "16px !important" }}>
                           <h2 id="rules" style={{color:"#003C71", fontWeight:"700"}}
                           ><u>ĐIỀU KHOẢN VÀ QUY ĐỊNH </u> </h2>
                           <Tabs defaultActiveKey="1">
                              <TabPane tab="Giá Bao Gồm" key="1" >
                                 <div style={{ color: "#494b55 !important", fontSize: "16px !important" }}>
                                    <h3 style={{ color: "#003c71" }}>VẬN CHUYỂN: </h3>
                                    <p>- Xe du lịch máy lạnh đưa đón theo lịch trình. Lái xe am hiểu cung đường.</p>
                                    <h3 style={{ color: "#003c71" }}>LƯU TRÚ: </h3>
                                    <p>- Khách sạn tiêu chuẩn 3 sao: sạch sẽ, tiện nghi: 2 khách/phòng. nếu lẻ nam, nữ sẽ ngủ 3 khách/phòng. </p>
                                    <h3 style={{ color: "#003c71" }}>KHÁC: </h3>
                                    <p>- Các bữa ăn theo chương trình (01 bữa sáng,02 bữa chính suất 100.000 vnđ/người, 01 bữa tối BBQ 150,000 vnđ/người- nếu trời mưa sẽ chuyển sang thực đơn Lẩu).</p>
                                    <p>- Chi phí tổ chức giã bánh dày truyền thống.</p>
                                    <p>- Vé thắng cảnh tại các điểm thăm quan.</p>
                                    <p>- Hướng dẫn viên vui vẻ nhiệt tình. Lái xe am hiểu cung đường.</p>
                                    <p>- Nước uống 1 chai/ khách/ ngày.</p>
                                    <p>- Bảo hiểm du lịch mức 20.000.000VNĐ/ người/ vụ.</p>

                                 </div>


                              </TabPane>
                              <TabPane tab="Giá Không Bao Gồm" key="2">
                                 <p>- Thuế VAT.</p>
                                 <p>- Phụ thu phòng đơn.</p>
                                 <p>- Các chi phí cá nhân ngoài chương trình: điện thoại, đồ uống, giặt là...</p>
                                 <p>- Tip cho lái xe và HDV</p>
                              </TabPane>
                              <TabPane tab="Hủy Đổi" key="3">
                                 <p>- Hủy tour ngay sau khi đăng ký đến 10 ngày trước ngày khởi hành, phạt 30% trên giá tour.</p>
                                 <p>- Hủy tour trong vòng từ 5 – 10 ngày trước ngày khởi hành, phạt 50% trên giá tour.</p>
                                 <p>- Hủy tour trong vòng từ 3 – 5 ngày trước ngày khởi hành, phạt 75% trên giá tour.</p>
                                 <p>- Hủy tour trong vòng từ 0 – 3 ngày trước ngày khởi hành, phạt 100% giá trị tour.</p>
                                 <p>Ngày lễ tết không hoàn, không hủy, không đổi, không áp dụng chính sách hủy trên.</p>
                                 <p>Vé máy bay không hoàn, không hủy.</p>
                              </TabPane>
                              <TabPane tab="Lưu ý" key="4">
                                 <p>- Quý khách phải mang theo: giấy tờ tùy thân hợp pháp (CMTND hoặc Passport)</p>
                                 <p>- Quý khách nên mang theo: thuốc chống côn trùng, bàn chải đánh răng, kem đánh răng và khăn tắm riêng nếu thấy cần thiết vì điều kiện sinh hoạt ở miền núi còn nhiều hạn chế so với các thành phố lớn.</p>
                                 <p>- Lịch trình có thể được sắp xếp lại cho phù hợp từng ngày khởi hành cụ thể nhưng vẫn đảm bảo tất cả các điểm thăm quan trong chương trình.</p>
                                 <p>- Trường hợp ngày khởi hành có dưới 6 khách, lái xe có thể kiêm hướng dẫn viên. Đây là những lái xe có rất nhiều kinh nghiệm, am hiểu văn hóa địa phương.</p>
                                 <p>- Quý khách là người ăn chay vui lòng mang thêm đồ ăn chay theo để đảm bảo khẩu vị của mình.</p>
                                 <p>- Quý khách đăng ký đi tour vào các dịp từ tháng 4 đến tháng 11 hàng năm thì nên mang theo quần áo thoáng mát gọn nhẹ.</p>
                                 <p>- Trong mọi trường hợp, tốt nhất khách hàng nên mang ba lô đựng đồ hoặc vali cỡ nhỏ. Đặc biệt không được mang theo những vali quá khổ vì đi tour miền núi cỡ xe lớn nhất chúng tôi hay sử dụng là xe Hyundai County 29 chỗ không có khoang để hành lý cỡ lớn</p>
                              </TabPane>
                           </Tabs>
                        </div>
                     </Col>
                  </Row>
               </Col>

               <Col span={8} >
                  <div style={{ position: "sticky", top:"75px" }}>
                     <Row>
                        <Col span={24} >
                           <img src={tourDetail.image} alt="" style={{ width: "359.8px" }} />
                        </Col>
                     </Row>
                     <Row style={{ background: "white", cursor: "pointer", padding: "15px" }}>
                        <Col span={24} style={{ marginBottom: "15px" }}>
                           <h4 style={{ color: "#003C71" }}>Đặt ngay, chỉ 2 phút. Hoặc gọi (028) 3933 8002</h4>
                        </Col>

                        <Col span={24} style={{ height: "34px", marginBottom: "15px" }}>
                           <Row >
                              <Col span={16} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "10px" }}>
                                 <span style={{ fontSize: "20px", fontWeight: "bold", paddingRight: "20px" }}>{countUsers}</span>
                                 <span style={{ paddingRight: "20px" }}>Người lớn</span>
                                 <span style={{ color: "#ffbd00" }}>x 1.490.000đ</span>
                              </Col>
                              <Col span={8} style={{ height: "34px", border: "1px solid #ccc" }}>
                                 <Row >
                                    <Col span={12} style={{ height: "34px", display: "flex", justifyContent: "center", borderRight: "1px solid #ccc" }}>
                                       <span style={{ position: "relative", top: "4px" }}
                                          onClick={() => { setCountUser(countUsers + 1) }}
                                       >
                                          <img src="https://img.icons8.com/ios-filled/20/000000/plus-math.png" />
                                       </span>
                                    </Col>
                                    <Col span={12} style={{ height: "34px", display: "flex", justifyContent: "center", }} >
                                       <span style={{ position: "relative", top: "4px" }}
                                          onClick={() => { if (countUsers > 1) { setCountUser(countUsers - 1) } }}
                                       >
                                          <img src="https://img.icons8.com/android/20/000000/minus-math.png" />
                                       </span>
                                    </Col>
                                 </Row>
                              </Col>
                           </Row>
                        </Col>

                        <Col span={24} style={{ marginBottom: "15px" }}>
                           <Row >
                              <Col span={16}>
                                 <p>Chọn ngày khởi hành:</p>
                              </Col>
                              <Col span={8} style={{ height: "34px", display: "flex", justifyContent: "center", alignItems: "center", }}>

                                 {/* select */}
                                 <Select
                                    value={startDay}
                                    style={{ width: "107.93px", border: "1px solid #ccc", height: "34px" }}
                                    onChange={(value) => { setStartDay(value) }}
                                 >
                                    {renderOptionDay()}
                                 </Select>


                              </Col>
                           </Row>
                        </Col>
                        <Col span={24} style={{ paddingBottom: "20px" }}>
                           <div style={{ fontSize: "26px", fontWeight: "600", color: "#ffbd00" }}>Tổng giá: {parseFloat(countUsers) * parseFloat(1.490000)}0.000đ<span></span></div>
                        </Col>
                        <Col span={24}>
                           <button style={{ width: "100%", height: "47px", background: "#f79321", border: "1px solid #f79321", borderRadius: "4px" }}
                              onClick={() => { handleSetTour() }}
                           >Đặt tour</button>
                           
                        </Col>
                     </Row>

                     <Row style={{ cursor: "pointer", marginTop:"20px"}}>
                        <Col span={24}>
                        <div className={`"hover-scroll-to-view" ${countActive===1?"view-active":""} `}
                         style={{padding:"10px 0px 10px 10px", marginBottom:"5px", borderRadius:"5px", background: "white"}}
                        onClick={()=>{handleMovies();setCountActive(1)}}>CHƯƠNG TRÌNH TOUR</div>
                        <div className={`"hover-scroll-to-view" ${countActive===2?"view-active":""} `}
                            style={{padding:"10px 0px 10px 10px", marginBottom:"5px", borderRadius:"5px", background: "white"}}
                            onClick={()=>{handleMoviesProgramme();setCountActive(2)}} >LỊCH KHỞI HÀNH</div>
                        <div className={`"hover-scroll-to-view" ${countActive===3?"view-active":""} `}
                              style={{padding:"10px 0px 10px 10px", marginBottom:"5px", borderRadius:"5px", background: "white"}}
                              onClick={()=>{handleMoviesRules(); setCountActive(3)}}>ĐIỀU KHOẢN VÀ QUY ĐỊNH</div>
                        </Col>
                     </Row>
                  </div>
               </Col>

            </Row>
         </Col>
      </Row>
   );
}

const mapStateToProps = (state) => {
   const { tourDetail } = state.tourDetailReducer;
   return {
      tourDetail,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      getTourDetail: (params) => dispatch(getTourDetail(params)),
      createSelectTour: (params) => dispatch(createSelectTour(params)),
   };
}
export default connect(mapStateToProps, mapDispatchToProps)(TourTravel);


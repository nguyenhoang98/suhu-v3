import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer flex">
      <div className="col-3">
        <Title title="Mua hàng trực tuyến" />
        <p>0362.621.627</p>
        <Link to="/">suhu.online.com.vn</Link>
      </div>
      <div className="col-3">
        <Title title="Hotline góp ý" />
        <p>0362.621.627</p>
        <Link to="/">suhu.online.com.vn</Link>
      </div>
      <div className="col-2">
        <Title title="Thông tin" />
        <Link to="/">Giới thiệu</Link>
        <Link to="/">Liên hệ công ty</Link>
        <Link to="/">Đối tác</Link>
        <Link to="/">Tuyển dụng</Link>
      </div>
      <div className="col-2">
        <Title title="Chính sách" />
        <Link to="/">Chính sách đổi hàng</Link>
        <Link to="/">Chính sách bảo hành</Link>
        <Link to="/">Chính sách bảo mật</Link>
        <Link to="/">Chính sách hoàn tiền</Link>
      </div>
      <div className="col-2">
        <Title title="FQA" />
        <Link to="/">Thanh toán vận chuyển</Link>
        <Link to="/">Hướng dẫn chọn size</Link>
        <Link to="/">Kiểm tra thông tin đơn hàng</Link>
        <Link to="/">Câu hỏi thường gặp</Link>
      </div>
    </div>
  );
}
const Title = (props) => {
  const { title } = props;
  return (
    <>
      <h2> {title} </h2>
    </>
  );
};

export default Footer;

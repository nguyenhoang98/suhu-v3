import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Search from '../../common/Search/Search';
import logo from '../../assets/logo.png';

function NavBar(props) {
  const { handleOnOpenLookUpModal } = props;
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} className="logo" />
      </div>

      <div className="navbar__user">
        <ul>
          <li>
            <Link to="/Dang-nhap">
              <span className="navbar__icon">
                <i className="fas fa-sign-in-alt"></i>
              </span>
              Đăng nhập
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="navbar__icon">
                <i className="fas fa-sign-out-alt"></i>
              </span>
              Đăng kí
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="navbar__icon">
                <i className="fas fa-luggage-cart"></i>
              </span>
              Cart
              <span className="count"> 10 </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar__search">
        <Search handleOnOpenLookUpModal={handleOnOpenLookUpModal} />
      </div>

      <div className="navbar__list">
        <ul>
          <li>
            <Link to="/Trang-chu">
              <span
                style={{
                  marginRight: '5px',
                }}
              ></span>
              Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/Thoi-trang-nam">
              <span
                style={{
                  marginRight: '5px',
                }}
              ></span>
              Thời trang nam
            </Link>
          </li>
          <li>
            <Link to="/Thoi-trang-nu">
              <span
                style={{
                  marginRight: '5px',
                }}
              ></span>
              Thời trang nữ
            </Link>
          </li>
          <li>
            <Link to="/Thoi-trang-nu">
              <span
                style={{
                  marginRight: '5px',
                }}
              ></span>
              Đồ Đôi
            </Link>
          </li>
          <li>
            <Link to="/Thoi-trang-nu">
              <span
                style={{
                  marginRight: '5px',
                }}
              ></span>
              áo khoác
            </Link>
          </li>
          <li>
            <Link to="/Thoi-trang-nu">
              <span
                style={{
                  marginRight: '5px',
                }}
              ></span>
              Phụ kiện
            </Link>
          </li>
          <li>
            <Link to="/hot">
              <span
                style={{
                  marginRight: '5px',
                }}
              ></span>
              Đặc biệt
            </Link>
            <span className="hot">hot</span>
          </li>
        </ul>
      </div>

      <div className="navbar__contact">
        <div className="navbar__contact__number-phone">
          <span className="phone">
            <i className="fas fa-phone-volume"></i>
          </span>
          0262.621.627
        </div>
        <div className="navbar__contact__icon">
          <Link to="/" className="media">
            <i className="fab fa-facebook-square"></i>
          </Link>
          <Link to="/" className="media">
            <i className="fab fa-youtube-square"></i>
          </Link>
          <Link to="/" className="media">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/" className="media">
            <i className="fab fa-twitter-square"></i>
          </Link>
        </div>
        <div className="navbar__contact__trademark">Bản quyền của Suhu.vn</div>
      </div>
    </div>
  );
}

export default NavBar;

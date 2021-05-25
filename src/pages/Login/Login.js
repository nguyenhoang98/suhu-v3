import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

Login.propTypes = {};

function Login(props) {
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__logo">
          <img src={Logo} className="logo" />
        </div>
        <form>
          <div className="group-form">
            <label htmlFor="user-name" className="group-form__label">
              Tài khoản
            </label>
            <input
              type="text"
              id="user-name"
              className="group-form__input"
              placeholder="Nhập tài khoản"
            />
          </div>
          <div className="group-form">
            <label htmlFor="user-password" className="group-form__label">
              Mật khẩu
            </label>
            <input
              type="text"
              id="user-password"
              className="group-form__input"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="group-form flex">
            <button className="btn btn-login">
              <span
                style={{
                  paddingRight: '5px',
                }}
              >
                <i className="fas fa-sign-in-alt"></i>
              </span>
              Đăng nhập
            </button>
            <button className="btn btn-reset">
              <span
                style={{
                  paddingRight: '5px',
                }}
              >
                <i className="fas fa-sync-alt"></i>
              </span>
              Làm mới
            </button>
          </div>
        </form>
        <>
          <h2
            style={{
              color: '#333',
              margin: '20px 0px',
            }}
          >
            Hoặc đăng nhập bằng
          </h2>
          <button className="btn btn-login-facebook">
            <span
              style={{
                paddingRight: '5px',
              }}
            >
              <i className="fab fa-facebook"></i>
            </span>
            Login with facebook
          </button>
          <button className="btn btn-login-google">
            <span
              style={{
                paddingRight: '5px',
              }}
            >
              <i className="fab fa-google-plus-g"></i>
            </span>
            Login with google
          </button>
        </>
        <Link to="/Trang-chu" className="back-home">
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}

export default Login;

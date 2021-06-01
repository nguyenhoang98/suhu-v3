import React from 'react';
import './LoginLookUpModel.scss';
import { Link } from 'react-router-dom';
import Logo from '../../common/Logo/Logo';
import PropTypes from 'prop-types';

LoginLookUpModel.propTypes = {};

function LoginLookUpModel(props) {
  const { handleCloseLogin } = props;
  return (
    <div className="login">
      <div className="login__content">
        <span className="close-login" onClick={handleCloseLogin}>
          <i className="fas fa-times"></i>
        </span>
        <div className="login__form">
          <div className="login__logo">
            <Logo width={100} height={100} />
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
              <button type="submit" className="btn btn-login">
                <span
                  style={{
                    paddingRight: '5px',
                  }}
                >
                  <i className="fas fa-sign-in-alt"></i>
                </span>
                Đăng nhập
              </button>
              <button type="reset" className="btn btn-reset">
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
        </div>
      </div>
    </div>
  );
}

export default LoginLookUpModel;

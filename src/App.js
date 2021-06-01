import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayOut from './components/AppLayOut/AppLayOut';
import CartLookUpModal from './components/CartLookUpModal/CartLookUpModal';
import LoginLookUpModel from './components/LoginLookUpModel/LoginLookUpModel';
import Bell from './components/Bell/Bell';
import Noti from './components/Noti/Noti';
function App(props) {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenLogin, setisOpenLogin] = useState(false);
  const [isOpenNoti, setIsOpenNoti] = useState(false);
  const onOpenCart = () => {
    setIsOpenCart(true);
    setIsOpenNoti(false);
  };
  const onOCloseCart = () => {
    setIsOpenCart(false);
  };
  const onOpenLogin = () => {
    setisOpenLogin(true);
    setIsOpenNoti(false);
  };
  const onOCloseLogin = () => {
    setisOpenLogin(false);
  };
  const toggleIsNoti = () => {
    setIsOpenNoti(!isOpenNoti);
  };
  return (
    <Router>
      <AppLayOut handleOpenCart={onOpenCart} handleOpenLogin={onOpenLogin} />
      {isOpenCart && <CartLookUpModal handleCloseCart={onOCloseCart} />}
      {isOpenLogin && <LoginLookUpModel handleCloseLogin={onOCloseLogin} />}
      <Bell handleToggleNoti={toggleIsNoti} />
      {isOpenNoti && <Noti />}
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import './AppLayOut.scss';
import { Switch, Route, useLocation } from 'react-router-dom';
import menuRouters from '../../routers/menuRouters';
import Navbar from '../NavBar/NavBar';
import SearchLookUpModal from '../SearchLookUpModal/SearchLookUpModal';
function AppLayOut(props) {
  const [isOpenLookUpModal, setIsOpenLookUpModal] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const onCloseLookUpModal = () => {
    setIsOpenLookUpModal(false);
  };
  const onOPenLookUpModal = () => {
    setIsOpenLookUpModal(true);
  };
  return (
    <div>
      {pathname !== '/Dang-nhap' && (
        <Navbar handleOnOpenLookUpModal={onOPenLookUpModal} />
      )}
      <div className="main">
        <Switch>
          {menuRouters.map((value, index) => {
            return (
              <Route
                path={value.path}
                component={value.component}
                exact={value.exact}
                key={index}
              />
            );
          })}
        </Switch>
      </div>
      {isOpenLookUpModal && (
        <SearchLookUpModal handleCloseLookUpModal={onCloseLookUpModal} />
      )}
    </div>
  );
}

export default AppLayOut;

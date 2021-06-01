import React from 'react';
import './Noti.scss';
import PropTypes from 'prop-types';

Noti.propTypes = {};

const noti = [
  'Thông báo 1',
  'Thông báo 2',
  'Thông báo 3',
  'Thông báo 4',
  'Thông báo 5',
  'Thông báo 6',
  'Thông báo 7',
  'Thông báo 8',
  'Thông báo 9',
  'Thông báo 10',
  'Thông báo 11',
  'Thông báo 12',
  'Thông báo 13',
  'Thông báo 14',
  'Thông báo 15',
];

function Noti(props) {
  const NotiEmpty = () => {
    return (
      <div className="noti__empty">
        <span className="noti__empty__content">không có thông báo nào</span>
      </div>
    );
  };
  const NotiContent = () => {
    return (
      <div className="noti__content">
        {noti.map((value, index) => {
          return (
            <div className="noti__content__line" key={index}>
              {value}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="noti">{noti.length ? <NotiContent /> : <NotiEmpty />}</div>
  );
}

export default Noti;

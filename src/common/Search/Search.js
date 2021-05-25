import React from 'react';
import './Search.scss';
import searchImg from '../../assets/search.png';

function Search(props) {
  const { handleOnOpenLookUpModal } = props;
  return (
    <div className="search">
      <div className="input-search" onClick={handleOnOpenLookUpModal}>
        Tìm kiếm sản phẩm
      </div>
      <img src={searchImg} className="search-img" />
    </div>
  );
}

export default Search;

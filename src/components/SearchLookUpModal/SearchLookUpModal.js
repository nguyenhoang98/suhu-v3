import React from 'react';
import './SearchLookUpModal.scss';
import Search from '../../assets/search.png';
import PropTypes from 'prop-types';

SearchLookUpModal.propTypes = {};

function SearchLookUpModal(props) {
  const { handleCloseLookUpModal } = props;
  return (
    <div className="search-lookup-modal" id="search-lookup-modal">
      <div className="search-lookup-modal__content">
        <span className="close-modal" onClick={handleCloseLookUpModal}>
          <i class="fas fa-times"></i>
        </span>
        <input
          type="text"
          className="input-search-modal"
          placeholder="Tìm kiếm sản phẩm mà bạn tìm kiếm"
        />
        <img src={Search} alt="search" className="search-img" />
      </div>
    </div>
  );
}

export default SearchLookUpModal;

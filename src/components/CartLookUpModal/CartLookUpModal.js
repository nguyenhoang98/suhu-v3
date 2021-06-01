import React from 'react';
import './CartLookUpModal.scss';
import Title from '../../common/Title/Title';
import Logo from '../../common/Logo/Logo';
import PropTypes from 'prop-types';

CartLookUpModal.propTypes = {};
const data = [
  {
    id: 1,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210331/31032021090328_1.jpg',
    price: 190000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 2,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210415/15042021050423_1.jpg',
    price: 190000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 3,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210416/16042021110442_1.jpg',
    price: 190000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 4,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210415/15042021050442_1.jpg',
    price: 190000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 5,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210415/15042021050453_1.jpg',
    price: 190000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 6,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210416/16042021110452_1.jpg',
    price: 190000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 7,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2913202131345_1_thumb.jpg',
    price: 190000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 8,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210416/16042021110426_1.jpg',
    price: 190000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 9,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2915202131534_1_thumb.jpg',
    price: 190000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 10,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2917202131755_1_thumb.jpg',
    price: 190000,
    description: 'Do Suhu sở hữu bản quyền',
  },
];
function CartLookUpModal(props) {
  const { handleCloseCart } = props;
  return (
    <div className="cart-look-up-modal">
      <span className="close-cart" onClick={handleCloseCart}>
        <i className="fas fa-times"></i>
      </span>
      <div className="cart-look-up-modal__content">
        <Title
          size={18}
          spacing={6}
          title="Giỏ hàng của bạn"
          icon={<Logo width={50} height={50} display="inline-block" />}
        />

        <>
          <div className="cart">
            <div className="info col-8">
              {data.map((value, index) => {
                return (
                  <div
                    className="flex"
                    style={{
                      marginBottom: '10px',
                    }}
                    key={index}
                  >
                    <div className="cart-look-up-modal__image">
                      <img src={value.src} className="image-cart" />
                    </div>
                    <div className="flex description">
                      <div className="description__cart">
                        {value.title}
                        <br />
                        {value.description}
                      </div>
                      <div className="description__price"> {value.price}đ </div>
                      <div className="description__action">
                        <button className="btn btn-reduction">-</button>
                        <span className="quantity">1</span>
                        <button className="btn btn-increase">+</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="order-box col-4">
              <div className="flex">
                <div>Tạm tính</div>
                <div> 1 tỷ </div>
              </div>
              <div className="flex">
                <div>Giảm giá</div>
                <div> 1 tỷ </div>
              </div>
              <div className="flex">
                <div>Tổng cộng</div>
                <div> 1 tỷ </div>
              </div>
              <div>
                <button className="btn btn-order">Tiến hành đặt hàng</button>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default CartLookUpModal;

import React from 'react';
import './HotProducts.scss';
import Title from '../../../common/Title/Title';
import ImageHotProduct from '../../../common/ImageHotProduct/ImageHotProduct';
import ProductDescription from '../../../common/ProductDescription/ProductDescription';
import PropTypes from 'prop-types';
HotProducts.propTypes = {};

const data = [
  {
    id: 1,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 2,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2911202131144_1_thumb.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 3,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2924202132400_1_thumb.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 4,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210514/14052021100541_Dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 5,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210513/13052021040507_Dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 6,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210513/13052021030559_Dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 7,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210514/14052021030517_dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 8,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210329/2908202130846_1_thumb.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 9,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210515/15052021060544_Dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 10,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210515/15052021060526_Dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 11,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210515/15052021060535_Dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 12,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210515/15052021060510_Dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 13,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210515/15052021060543_Dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 14,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210515/15052021060502_Dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 15,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210514/14052021100513_Dai_dien.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
  {
    id: 16,
    title: 'Thời trang',
    src: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210331/31032021040322_2.jpg',
    price: 299000,
    description: 'Do Suhu sở hữu bản quyền',
  },
];
function HotProducts(props) {
  const { title } = props;
  return (
    <>
      <Title title={title} />
      <div className="hot-products flex">
        {data.map((value, index) => {
          return (
            <div className="hot-products__item" key={index}>
              <ImageHotProduct src={value.src} />
              <ProductDescription
                title={value.title}
                price={value.price}
                description={value.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default HotProducts;

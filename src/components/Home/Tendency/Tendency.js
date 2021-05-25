import React from 'react';
import Title from '../../../common/Title/Title';
import Sliders from 'react-slick';
import './Tendency.scss';
const data = [
  {
    id: 1,
    title: 'Xu hướng thời trang',
    src: 'https://salt.tikicdn.com/cache/w824/ts/banner/78/e1/9e/5ef3f62e6694117e31afc8428417e291.png.jpg',
  },
  {
    id: 2,
    title: 'Xu hướng thời trang',
    src: 'https://salt.tikicdn.com/cache/w824/ts/banner/6b/51/3d/2f0d37ef6551d920b30e0799ecac4a22.jpg',
  },
  {
    id: 3,
    title: 'Xu hướng thời trang',
    src: 'https://salt.tikicdn.com/cache/w824/ts/banner/88/73/f2/37eb308e19779938052e53b6d20d3c77.jpg',
  },
];
const dataView = [
  {
    id: 1,
    title: 'Sale off 20-50%',
    src: 'https://salt.tikicdn.com/cache/280x280/ts/product/3d/73/c5/71e9bb717200f4c1e04b9768dac16b6f.jpg',
  },
  {
    id: 2,
    title: 'Sale off 20-50%',
    src: 'https://salt.tikicdn.com/cache/200x200/ts/product/e2/26/d6/ed3f14d7782dcfffb320af8bbfc03d59.jpg',
  },
  {
    id: 3,
    title: 'Sale off 20-50%',
    src: 'https://salt.tikicdn.com/cache/280x280/ts/product/42/67/31/7dfee9c88743a76f563830de09a4701c.jpg',
  },
  {
    id: 4,
    title: 'Sale off 20-50%',
    src: 'https://salt.tikicdn.com/cache/280x280/ts/product/0c/54/12/e513f14a67c8012053093287bf75020b.jpg',
  },
];
function Tendency(props) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const { title } = props;
  return (
    <>
      <Title title={title} />
      <div className="tendency flex">
        <div className="tendency__left">
          <Sliders {...settings}>
            {data.map((value, index) => {
              return (
                <div className="tendency__left__card" key={index}>
                  <div className="">
                    <img
                      src={value.src}
                      alt="tendency-image"
                      className="tendency__left__card__image"
                    />
                  </div>
                </div>
              );
            })}
          </Sliders>
        </div>
        <div className="tendency__right flex-column">
          {dataView.map((value, index) => {
            return (
              <div className="tendency__right__card flex" key={index}>
                <div className="tendency__right__card__image">
                  <img src={value.src} className="tendency-image" />
                </div>
                <div className="tendency__right__card__title">
                  {value.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tendency;

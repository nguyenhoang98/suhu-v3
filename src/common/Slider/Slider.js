import React from "react";
import "./Slider.scss";
import Sliders from "react-slick";

function Slider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const dataSlide = [
    {
      title: ["Sáng tạo", "Phong cách", "Hiện đại"],
      src: "https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Banner%20%C4%90%E1%BB%93%20N%E1%BB%AF.png",
      alt: "Banner taka 1",
      message: "Mua ngày hôm nay",
    },
    {
      title: ["Sáng tạo", "Phong cách", "Hiện đại"],
      src: "http://www.namu.com.vn/img/uploads/slider/slishow-1583381669-BANNER_NAMU_1348W%20X%20572H.jpg",
      alt: "Banner taka 2",
      message: "Nhận quà liền tay",
    },
    {
      title: ["Sáng tạo", "Phong cách", "Hiện đại"],
      src: `https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-dep_113856538.jpg`,
      alt: "Banner taka 3",
      message: "Website thương mại lớn nhất",
    },
  ];
  return (
    <div className="slider">
      <Sliders {...settings}>
        {dataSlide.map((value, index) => {
          return (
            <div className="slider__content" key={index}>
              <img
                src={value.src}
                alt={value.alt}
                className="banner"
              />
            </div>
          );
        })}
      </Sliders>
    </div>
  );
}

export default Slider;

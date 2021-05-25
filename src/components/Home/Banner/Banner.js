import React from "react";
import "./Banner.scss";
import PropTypes from "prop-types";

Banner.propTypes = {};

const data = [
  {
    id: 1,
    src: "https://salt.tikicdn.com/cache/w295/ts/banner/18/92/f1/7b7f213fc863d095ae32f2391bf221f5.png.jpg",
  },
  {
    id: 2,
    src: "https://salt.tikicdn.com/cache/w295/ts/banner/71/ea/83/54a299bd725fdbb517398c0cfc5cf798.png.jpg",
  },
  {
    id: 3,
    src: "https://salt.tikicdn.com/cache/w295/ts/banner/9a/0e/b3/99cf20f3279be1ae6076b9d86d31e466.png.jpg",
  },
  {
    id: 4,
    src: "https://salt.tikicdn.com/cache/w295/ts/banner/1b/11/55/4b1d6592f35d29e7cc67558a11df4642.png.jpg",
  },
];
function Banner(props) {
  return (
    <div className="banner-products flex">
      {data.map((value, index) => {
        return (
          <div className="banner-products__content" key={index}>
            <img
              src={value.src}
              alt="banner"
              className="banner-products__content__image"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Banner;

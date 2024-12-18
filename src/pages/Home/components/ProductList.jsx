import { React, useEffect, useState } from "react";
import homeAPI from "../../../api/homeAPI";
import ProductItem from "./ProductItem";
import Slider from "react-slick";

const ProductList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { laptops } = await homeAPI.home();
        setLaptops(laptops);
      } catch (error) {
        console.error("Failed to load api: ", error);
      }
    })();
  }, []);

  return (
    <Slider {...settings}>
      {laptops.map((x) => (
        <ProductItem key={x.sku} laptops={x} />
      ))}
    </Slider>
  );
};

export default ProductList;

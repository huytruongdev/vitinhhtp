import React from "react";
import RatingStar from "./RatingStar";
import { Link } from "react-router-dom";
import ProductInfo from "./ProductInfo";

const ProductItem = ({ laptops }) => {
    console.log('render')
  const { sku, productName, originPrice, percentSale, salePrice, imageUrl, infos } = laptops;
  return (
    <div className="slider-product-one-content-item">
      <div className="p-component">
        <img src={imageUrl} alt={productName} />
        <div className="slider-product-one-content-item-text">
          <div className="review-count">
            <RatingStar average={0} />
            <p className="p-sku">MÃ: {sku}</p>
          </div>
          <div className="p-info">
            <p className="p-name">
              <Link to="/product-detail">{productName}</Link>
            </p>
            <span className="p-mprice">{originPrice}</span>
            <span className="p-discount">(Tiết kiệm: {percentSale}%)</span>
            <span className="p-price">{salePrice}</span>
          </div>
          <ProductInfo infos={infos} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

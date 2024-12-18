import React from "react";

const ProductInfo = ({ infos }) => {
  return (
    <div className="p-promotion-group">
      <div className="p-promotion-holder">
        {infos.map((info) => {
          return (
            <div key={info} className="attr-item">
              <span className="text">{info}</span>
            </div>
          );
        })}
      </div>

      <div className="p-gift-holder">
        <div className="p-gift-list">
          <div className="item">
            <img src="./assets/promo1.jpg" alt="" style={{ width: "28px" }} />
          </div>
          <div className="item">
            <img src="./assets/promofix.png" alt="" style={{ width: "28px" }} />
          </div>
          <div className="item">
            <img src="./assets/promo2.png" alt="" style={{ width: "28px" }} />
          </div>
        </div>
      </div>

      <div className="p-action">
        <span className="p-qty">
          <i className="fa-solid fa-check"></i>
          Sẵn hàng
        </span>
        <a href="" className="p-buy">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </div>
  );
};

export default ProductInfo;

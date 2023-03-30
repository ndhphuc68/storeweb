import React from "react";
import "../styles/components/Product.scss";
import BeautyStars from "beauty-stars";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

const Product = () => {
  return (
    <div className="product-main d-flex flex-column justify-content-start">
      <div className="product-main_thumnail">
        <img
          src="https://applecenter.com.vn/uploads/cms/16632365411307.jpg"
          alt=""
        />
        <div className="product-promotion d-flex justify-content-center align-items-center">
          <span>-25%</span>
        </div>
        <div className="d-flex flex-column product-icon">
          <div className="icon-product">
            <AiOutlineHeart className="icon" />
          </div>
          <div className="icon-product">
            <AiOutlineEye className="icon" />
          </div>
        </div>
      </div>
      <div className="product-main_info">
        <div className="product-main_info_name-product">Iphone 14</div>
        <div className="product-main_info_price-product">
          <span className="price-sale">$120</span>
          <span className="price-discout">$120</span>
        </div>
        <div className="product-main_info_ratting-product d-flex flex-row">
          <BeautyStars
            value={4}
            size={20}
            // onChange={value => this.setState({ value })}
          />
          <span>(68)</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

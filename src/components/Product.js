import React from "react";
import "../styles/components/Product.scss";
import BeautyStars from "beauty-stars";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Product = (props) => {
  const { t } = useTranslation();

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
        {props.trash ? (
          <div className="d-flex flex-column product-icon">
            <a href="/" className="icon-product">
              <BsTrash3 className="icon" />
            </a>
          </div>
        ) : (
          <div className="d-flex flex-column product-icon">
            <a href="/" className="icon-product">
              <AiOutlineHeart className="icon" />
            </a>
            <a href="/" className="icon-product">
              <AiOutlineEye className="icon" />
            </a>
          </div>
        )}

        <a className="add-cart" href="/">
          <span>{t("addCart")}</span>
        </a>
      </div>
      <div className="product-main_info">
        <a href="/" className="product-main_info_name-product">
          Iphone 14
        </a>
        <div className="product-main_info_price-product">
          <span className="price-sale">$120</span>
          <span className="price-discout">$120</span>
        </div>
        {props.trash ? null : (
          <div className="product-main_info_ratting-product d-flex flex-row">
            <BeautyStars value={4} size={20} />
            <span>(68)</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;

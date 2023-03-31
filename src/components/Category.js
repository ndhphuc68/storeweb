import React from "react";
import "../styles/components/Category.scss";

const Category = () => {
  return (
    <div className="main-category">
      <img src={require("../assets/icon/phones.png")} alt="" />
      <span>Phones</span>
    </div>
  );
};

export default Category;

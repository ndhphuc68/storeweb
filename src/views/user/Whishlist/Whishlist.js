import React from "react";
import LayoutUser from "../../../layouts/LayoutUser";
import "../../../styles/Whishlist/Whishlist.scss";
import Product from "../../../components/Product";

const WhishList = () => {
  const list = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  return (
    <LayoutUser>
      <div className="whish-list-main">
        <div>
          <div className="title-whish-list d-flex mt-5 justify-content-between align-items-center">
            <span>Whishlist (2)</span>
            <button type="button" className="move-all-whishlist">
              Move All To Bag
            </button>
          </div>
          <div className="list-product row mt-5">
            {list.map((item, index) => {
              return (
                <div className="col-3 p-3" key={item}>
                  <Product trash={true} key={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default WhishList;

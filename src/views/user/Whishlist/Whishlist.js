import React from "react";
import LayoutUser from "../../../layouts/LayoutUser";
import "../../../styles/Whishlist/Whishlist.scss";

const Whishlist = () => {
  return (
    <LayoutUser>
      <div className="whish-list-main">
        <div>
          <div className="title-whish-list d-flex justify-content-between align-items-center">
            <span>Whishlist (2)</span>
            <button type="button" className="move-all-whishlist">
              Move All To Bag
            </button>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default Whishlist;

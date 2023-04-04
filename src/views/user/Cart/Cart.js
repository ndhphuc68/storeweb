import React from "react";
import "../../../styles/Cart/Cart.scss";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import LayoutUser from "../../../layouts/LayoutUser";
import { InputNumber } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Cart = () => {
  return (
    <LayoutUser>
      <div className="cart-main">
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Cart</Typography>
          </Breadcrumbs>
        </div>
        <div className="cart-list-product">
          <div className="thead-cart d-flex align-items-center justify-content-between ">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          <div className="tbody-cart ">
            <div className="tbody-cart-item d-flex align-items-center justify-content-between">
              <div className="name-img d-flex align-items-center justify-content-between">
                <img
                  src="https://applecenter.com.vn/uploads/cms/16632365411307.jpg"
                  alt=""
                />
                <span>Iphone 14</span>
              </div>
              <span>$650</span>
              <InputNumber
                style={{ width: "80px", flex: 1 }}
                max={100}
                min={0}
              />
              <span>$650</span>
            </div>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default Cart;

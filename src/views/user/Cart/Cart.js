import React from "react";
import "../../../styles/Cart/Cart.scss";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import LayoutUser from "../../../layouts/LayoutUser";
import { InputNumber, Input, Button } from "antd";

const Cart = () => {
  return (
    <LayoutUser>
      <div className="cart-main mb-5">
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Cart</Typography>
          </Breadcrumbs>
        </div>
        <div className="cart-list-product mt-5">
          <div className="thead-cart d-flex align-items-center justify-content-between ">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          <div className="tbody-cart ">
            <div className="tbody-cart-item d-flex align-items-center justify-content-between">
              <div className="name-img d-flex align-items-center justify-content-center">
                <img
                  src="https://applecenter.com.vn/uploads/cms/16632365411307.jpg"
                  alt=""
                />
                <span>Iphone 14</span>
              </div>
              <span className="item-span">$650</span>
              <div
                style={{ flex: 1 }}
                className="d-flex justify-content-center align-items-center"
              >
                <InputNumber
                  style={{ width: "80px" }}
                  defaultValue={3}
                  max={100}
                  min={0}
                />
              </div>
              <span className="item-span">$650</span>
            </div>
          </div>
        </div>
        <div className=" d-flex align-items-center mt-5 mb-5 justify-content-between">
          <button className="button-return-update">Return To Shop</button>
          <button className="button-return-update">Update Cart</button>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-6">
            <div className="row">
              <div className="col-7">
                <Input
                  style={{ height: "56px", border: "1px solid black" }}
                  placeholder="Coupon Code"
                />
              </div>
              <div className="col-5">
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#db4444",
                    height: "56px",
                    width: "211px",
                  }}
                >
                  Apply Coupon
                </Button>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div className="cart-total">
              <span
                style={{
                  fontSize: "28px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                }}
              >
                Cart Total
              </span>
              <div className="mt-4"
                style={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <span>Subtotal</span>
                  <span>Subtotal</span>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <span>Subtotal</span>
                  <span>Subtotal</span>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <span>Subtotal</span>
                  <span>Subtotal</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#db4444",
                    height: "56px",
                    width: "211px",
                  }}
                  className=""
                >
                  Procees to checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default Cart;

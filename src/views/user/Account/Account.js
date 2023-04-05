import React from "react";
import LayoutUser from "../../../layouts/LayoutUser";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "../../../styles/Account/Account.scss";
import { Button, Input } from "antd";

const Account = () => {
  return (
    <LayoutUser>
      <div className="account-main">
        <div className="d-flex justify-content-between mb-5 align-items-center">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">My Account</Typography>
          </Breadcrumbs>
          <div className="title-name">
            <span>Wellcome! </span>
            <span className="name">Phucs</span>
          </div>
        </div>
        <div className="account-content mb-5 row">
          <div className="col-3">
            <ul className="menu-user">
              <li>
                <div>
                  <span>Manager My Account</span>
                  <div>
                    <ul className="menu-user-child">
                      <li className="mt-2 mb-2">My Profile</li>
                      <li className="mt-2 mb-2">Address Book</li>
                      <li className="mt-2 mb-2">My Payment Options</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mt-3 mb-3">
                <div>
                  <span>My Orders</span>
                  <div>
                    <ul className="menu-user-child">
                      <li className="mt-2 mb-2">My Returns</li>
                      <li className="mt-2 mb-2">My Cancellations</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <span>My WhishList</span>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <div className="edit-profile">
              <h2>Edit Your Profile</h2>
              <div>
                <div className="row mb-4">
                  <div className="col-6">
                    <label>First Name</label>
                    <Input style={{ height: "40px" }} />
                  </div>
                  <div className="col-6">
                    <label>Last Name</label>
                    <Input style={{ height: "40px" }} />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-6">
                    <label>Email</label>
                    <Input style={{ height: "40px" }} />
                  </div>
                  <div className="col-6">
                    <label>Address</label>
                    <Input style={{ height: "40px" }} />
                  </div>
                </div>
              </div>
              <div>
                <label className="mb-3">Password Changes</label>
                <Input.Password
                  placeholder="Current Pasword"
                  className="mb-4"
                  style={{ height: "40px" }}
                />
                <Input.Password
                  placeholder="New Pasword"
                  className="mb-4"
                  style={{ height: "40px" }}
                />
                <Input.Password
                  placeholder="Confirm New Pasword"
                  className="mb-4"
                  style={{ height: "40px" }}
                />
              </div>
              <div className="d-flex align-items-center justify-content-end save-profile">
                <Button className="button-cancel">Cancel</Button>
                <Button className="button-save">Save Changes</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default Account;

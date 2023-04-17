import React from "react";
import HeaderAdmin from "../components/admin/HeaderAdmin";
import SiderbarAdmin from "../components/admin/SiderbarAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="container-fluid">
      <SiderbarAdmin />
    </div>
  );
};

export default LayoutAdmin;

import React from "react";
import "../../styles/components/admin/HeaderAdmin.scss";

const HeaderAdmin = () => {
  return (
    <div className="row header-main">
      <div
        className="col-3 d-flex justify-content-start align-items-center"
        style={{ fontSize: "24px" }}
      >
        SHOPBEE
      </div>
      <div className="col-9"></div>
    </div>
  );
};

export default HeaderAdmin;

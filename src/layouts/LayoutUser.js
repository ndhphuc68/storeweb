import React from "react";
import HeaderUser from "../components/HeaderUser";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";

const LayoutUser = ({ children }) => {
  return (
    <div>
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 88 }}>
        <TopHeader />
        <HeaderUser />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default LayoutUser;

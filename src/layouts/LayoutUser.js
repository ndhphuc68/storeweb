import React from "react";
import HeaderUser from "../components/HeaderUser";
import TopHeader from "../components/TopHeader";
import Line from "../components/Line";
import Footer from "../components/Footer";

const LayoutUser = ({ children }) => {
  return (
    <div>
      <TopHeader />
      <HeaderUser />
      <Line />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutUser;

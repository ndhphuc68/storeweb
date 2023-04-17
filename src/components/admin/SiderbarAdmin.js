import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { MdSpaceDashboard } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const SiderbarAdmin = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ paddingTop: "35px" }}>
      <Sidebar style={{ backgroundColor: "w" }}>
        <Menu>
          <MenuItem style={{ fontSize: "24px", alignItems: "center" }}>
            {" "}
            SHOPBEE
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem icon={<MdSpaceDashboard />}> Documentation</MenuItem>
          <MenuItem icon={<BsBoxSeam />}> Product</MenuItem>
          <MenuItem icon={<AiOutlineShoppingCart />}> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
};

export default SiderbarAdmin;

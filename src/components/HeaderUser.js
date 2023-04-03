import React, { useState } from "react";
import "../styles/components/Header.scss";
import { useTranslation } from "react-i18next";
import { Input } from "semantic-ui-react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const HeaderUser = () => {
  const { t } = useTranslation();
  const [showUser, setShowUser] = useState(false);

  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav-link-activated" : "null";
  };

  const handleClickShowUser = () => {
    setShowUser(!showUser);
  };

  return (
    <div className="header">
      <div className="header_shop-name">
        <span>{t("nameShop")}</span>
      </div>
      <div className="header_nav">
        <ul>
          <li>
            <NavLink to="/" className={navLinkClass} style={{ color: "black" }}>
              {t("home")}
            </NavLink>
          </li>
          <li>{t("contact")}</li>
          <li>{t("about")}</li>
          <li>
            <NavLink
              to="/sign-up"
              className={navLinkClass}
              style={{ color: "black" }}
            >
              {t("signUp")}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header_search">
        <Input className="input-search" icon="search" placeholder="Search..." />
        <AiOutlineHeart className="icon-header" />
        <AiOutlineShoppingCart className="icon-header" />
        <FiUser
          className="icon-header"
          style={{ cursor: "pointer" }}
          onClick={() => handleClickShowUser()}
        />
        <div
          className={
            showUser
              ? "d-flex header-info-user flex-column"
              : "d-none header-info-user flex-column"
          }
        >
          <Link className="link-user">
            <FiUser className="icon-header" />{" "}
            <span>&nbsp;Manager My Account</span>
          </Link>
          <Link className="link-user">
            <RiShoppingBag3Line className="icon-header" />
            <span>&nbsp;My Order</span>
          </Link>
          <Link className="link-user">
            <MdOutlineCancel className="icon-header" />
            <span>&nbsp;My Cancellatuions</span>
          </Link>
          <Link to="/whish-list" className="link-user">
            <AiOutlineStar className="icon-header" />
            <span>&nbsp;Whishlist</span>
          </Link>
          <Link className="link-user">
            <BiLogOut className="icon-header" />
            <span>&nbsp;Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;

import React from "react";
import "../styles/components/Header.scss";
import { useTranslation } from "react-i18next";
import { Input } from "semantic-ui-react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

const HeaderUser = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="header_shop-name">
        <span>{t("nameShop")}</span>
      </div>
      <div className="header_nav">
        <ul>
          <li>{t("home")}</li>
          <li>{t("contact")}</li>
          <li>{t("about")}</li>
          <li>{t("signUp")}</li>
        </ul>
      </div>
      <div className="header_search">
        <Input className="input-search" icon="search" placeholder="Search..." />
        <AiOutlineHeart className="icon-header" />
        <AiOutlineShoppingCart className="icon-header" />
        <FiUser className="icon-header" />
      </div>
    </div>
  );
};

export default HeaderUser;

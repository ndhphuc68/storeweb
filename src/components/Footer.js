import React from "react";
import "../styles/components/Footer.scss";
import { useTranslation } from "react-i18next";
import { Input } from "semantic-ui-react";
import Image from "../styles/image";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer_shop footer_item">
        <span className="footer_item_title">{t("nameShop")}</span>
        <span className="footer_shop_sub">{t("subscribe")}</span>
        <span>{t("promotion10")}</span>
        <Input icon="send" placeholder={t("enterMail")} />
      </div>
      <div className="footer_support footer_item">
        <span className="footer_item_title">{t("support")}</span>
        <span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
        <span>exclusive@gmail.com</span>
        <span>+88015-88888-9999</span>
      </div>
      <div className="footer_account footer_item">
        <span className="footer_item_title">{t("account")}</span>
        <a href="/">{t("myAccount")}</a>
        <a href="/">{t("loginRegister")}</a>
        <a href="/">{t("cart")}</a>
        <a href="/">{t("shop")}</a>
      </div>
      <div className="footer_quickLink footer_item">
        <span className="footer_item_title">{t("quickLink")}</span>
        <a href="/">{t("privacyPolicy")}</a>
        <a href="/">{t("termsOfUse")}</a>
        <a href="/">{t("FAQ")}</a>
        <a href="/">{t("contact")}</a>
      </div>
      <div className="footer_downloadApp footer_item">
        <span className="footer_item_title">{t("downloadApp")}</span>
        <div className="footer_downloadApp_icon">
          <img src={Image.qrCode} alt="" />
          <div className="iosVsAndroid">
            <img src={Image.android} alt="" />
            <img src={Image.ios} alt="" />
          </div>
        </div>
        <div className="footer_downloadApp_socialMedia">
          <RiFacebookLine className="icon" />
          <SlSocialTwitter className="icon" />
          <AiOutlineInstagram className="icon" />
          <RiLinkedinLine className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

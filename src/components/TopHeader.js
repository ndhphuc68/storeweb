import React, { useState } from "react";
import "../styles/components/TopHeader.scss";
import { useTranslation } from "react-i18next";

const options = [
  { value: "vi", label: "VietNam" },
  { value: "en", label: "English" },
];

const TopHeader = () => {
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    localStorage.setItem("lang", value);
    i18n.changeLanguage(value);
  };

  return (
    <div className="top-header">
      <div className="top-header_title">
        <span className="top-header-text">{t("titleSale")}</span>
        <a href="/" className="top-header-sp">
          {t("shopNow")}
        </a>
      </div>
      <div className="top-header_select">
        <select defaultValue={selectedOption} onChange={(e) => handleChange(e)}>
          {options.map((val) => {
            return (
              <option key={val.value} value={val.value}>
                {val.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default TopHeader;

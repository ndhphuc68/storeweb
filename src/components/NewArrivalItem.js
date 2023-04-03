import React from "react";
import { useTranslation } from "react-i18next";

const NewArrivalItem = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images2.thanhnien.vn/528068263637045248/2023/2/3/969danhgiaps5-1675404765235836067162.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
      className="position-relative"
    >
      <div
        className="position-absolute d-flex flex-column"
        style={{ bottom: 40, left: 40, color: "white" }}
      >
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "24px",
          }}
        >
          Playstation 5
        </span>
        <span
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
          }}
          className="pt-4 pb-4"
        >
          Playstation 5
        </span>
        <a style={{ color: "white" }} href="/">
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              textDecoration: "underline",
            }}
          >
            {t("shopNow")}
          </span>
        </a>
      </div>
    </div>
  );
};

export default NewArrivalItem;

import React from "react";
import LayoutUser from "../../../layouts/LayoutUser";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "../../../styles/Home/Home.scss";
import "../../../styles/Home/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, FreeMode, Grid } from "swiper";
import CountdownTimer from "../../../components/CountdownTimer";
import Product from "../../../components/Product";
import { useTranslation } from "react-i18next";
import Line from "../../../components/Line";
import Category from "../../../components/Category";
import NewArrivalItem from "../../../components/NewArrivalItem";
import Image from "../../../styles/image";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Customers } from "../../../services/customer";
import { customer } from "../../../store/Customer";

const slideImages = [
  {
    url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-yellow_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676505836354",
    caption: "Slide 1",
  },
  {
    url: "https://prezentr.com/wp-content/uploads/2022/09/iPhone-14-PowerPoint-Template-Preview-3.png",
    caption: "Slide 2",
  },
  {
    url: "https://blogdoiphone.com/wp-content/uploads/2023/03/Wallpaper-iPhone-14-mango-scaled.jpg",
    caption: "Slide 3",
  },
];

const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const DivHeaderMain = (props) => {
  return (
    <div className="div-header-main d-flex align-items-center justify-content-start">
      <div className="div-header-color"></div>
      <span>{props.title}</span>
    </div>
  );
};

const BigTileCategory = (props) => {
  let justifyContent = {};
  if (props.viewAll) {
    justifyContent = { justifyContent: "space-between" };
  }
  return (
    <div
      style={justifyContent}
      className="d-flex flex-row mt-4 align-items-center big-title"
    >
      <span className="title-column">{props.title}</span>
      {props.countDown ? (
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      ) : null}
      {props.viewAll ? <button>{props.t("viewAll")}</button> : null}
    </div>
  );
};

const ProductHome = (props) => {
  return (
    <div className="d-flex flex-column" style={{ marginTop: "70px" }}>
      <DivHeaderMain title={props.smallTitle} />
      <BigTileCategory
        t={props.t}
        title={props.title}
        countDown={props.countDown || !props.ourProducts}
        viewAll={props.viewAll}
      />
      {props.ourProducts ? (
        <Swiper
          slidesPerView={4}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          modules={[Grid]}
          className="mySwiper list-our-products"
        >
          {list.map((val) => {
            return (
              <SwiperSlide key={val}>
                <Product key={val} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper list-products"
        >
          {list.map((val) => {
            return (
              <SwiperSlide key={val}>
                <Product key={val} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      {props.countDown || props.ourProducts ? (
        <div className="button-view-all">
          <button>{props.t("viewAllProducts")}</button>
        </div>
      ) : null}
    </div>
  );
};

const Categories = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{ marginTop: "70px", marginBottom: "50px" }}
    >
      <DivHeaderMain title={"Categories"} />
      <BigTileCategory title={"Browse By Category"} />
      <Swiper
        navigation={true}
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[FreeMode, Autoplay]}
        className="list-category"
      >
        {list.map((val) => {
          return (
            <SwiperSlide>
              <Category />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const BannerSales = () => {
  return (
    <div className="banner-main">
      <img src={require("../../../assets/image/banner.png")} alt="" />
    </div>
  );
};

const NewArrival = (props) => {
  return (
    <div className="d-flex flex-column" style={{ marginTop: "70px" }}>
      <DivHeaderMain title={props.smallTitle} />
      <BigTileCategory t={props.t} title={props.title} />
      <div className="row mb-5 mt-4" style={{ height: "600px" }}>
        <div className="col-6">
          <NewArrivalItem />
        </div>
        <div className="col-6">
          <div className="row pb-1" style={{ height: "50%" }}>
            <NewArrivalItem />
          </div>
          <div className="row pt-2" style={{ height: "50%" }}>
            <div className="col-6 pe-2" style={{ padding: 0 }}>
              <NewArrivalItem />
            </div>
            <div className="col-6 ps-1" style={{ padding: 0 }}>
              <NewArrivalItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="d-flex mb-5 mt-5 justify-content-evenly">
      <div className="d-flex flex-column justify-content-center align-items-center service-item">
        <img src={Image.car} alt="" />
        <span>FREE AND FAST DELIVERY</span>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center service-item">
        <img src={Image.customer} alt="" />
        <span>24/7 CUSTOMER SERVICE</span>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center service-item">
        <img src={Image.money} alt="" />
        <span>MONEY BACK GUARANTEE</span>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
};

const Home = (props) => {
  const { t } = useTranslation();
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const infoCustomer = useSelector((state) => state.customer.infoCustomer);

  useEffect(() => {
    Customers.profile(userId)
      .then((response) => {
        console.log(response);
        if (response.success) {
          dispatch(customer.actions.getInfoCustomer(response.data));
        }
      })
      .catch((error) => {});
  }, []);

  const handleProfile = async () => {
    console.log("userId", userId);
    if (userId) {
      await Customers.profile(userId)
        .then((response) => {
          console.log(response);
          if (response.success) {
            dispatch(customer.actions.getInfoCustomer(response.data));
          }
        })
        .catch((error) => {});
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <LayoutUser>
      <div className="main">
        <div className="main_header row ">
          <Sidebar className="main_header_sidebar">
            <Menu>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
            </Menu>
          </Sidebar>
          <div className="main_header_slideimage">
            <Swiper
              style={{
                "--swiper-pagination-color": "#db4444",
                "--swiper-pagination-bullet-inactive-color": "#7d8184",
                "--swiper-pagination-bullet-size": "16px",
              }}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper list-banner-top"
            >
              {slideImages.map((val) => {
                return (
                  <SwiperSlide key={val}>
                    <img key={val} src={val.url} alt={val.caption} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <ProductHome
          smallTitle={"Today's"}
          title={"Flash Sales"}
          t={t}
          countDown={true}
        />
        <Line />
        <Categories />
        <Line />
        <ProductHome
          smallTitle={"This Month"}
          title={"Best Selling Products"}
          t={t}
          viewAll={true}
        />
        <BannerSales />
        <ProductHome
          smallTitle={"This Month"}
          title={"Best Selling Products"}
          t={t}
          ourProducts={true}
        />
        <NewArrival smallTitle={"Featured"} title={"New Arrivals"} t={t} />
        <Service />
      </div>
      <div className="d-flex ps-5 pe-5 mb-5 justify-content-end">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "46px",
            height: "46px",
            backgroundColor: "#F5F5F5",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={() => handleScrollTop()}
        >
          <AiOutlineArrowUp style={{ width: "24px", height: "24px" }} />
        </div>
      </div>
    </LayoutUser>
  );
};

export default Home;

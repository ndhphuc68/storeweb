import React from "react";
import LayoutUser from "../../../layouts/LayoutUser";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "../../../styles/Home/Home.scss";
import "../../../styles/Home/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import CountdownTimer from "../../../components/CountdownTimer";
import Product from "../../../components/Product";

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

const FlashSales = () => {
  return (
    <div className="d-flex flex-column" style={{ marginTop: "100px" }}>
      <DivHeaderMain title={"Today's"} />
      <div className="d-flex flex-row mt-4 align-items-center">
        <span className="title-column">Flash Sales</span>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
      <Product />
    </div>
  );
};

const Home = (props) => {
  return (
    <LayoutUser>
      <div className="main">
        <div className="main_header row ">
          <Sidebar className="main_header_sidebar col-2">
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
          <div className="main_header_slideimage col-10">
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
              className="mySwiper"
            >
              {slideImages.map((val) => {
                return (
                  <SwiperSlide>
                    <img src={val.url} alt={val.caption} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <FlashSales />
      </div>
    </LayoutUser>
  );
};

export default Home;

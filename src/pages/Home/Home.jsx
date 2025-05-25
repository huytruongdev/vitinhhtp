import "./Home.scss";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PreBuiltItem from "./components/PreBuiltItem";
import PCPreBuilt from "./components/PCPreBuilt";
const Home = () => {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetch("/data/Home.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLaptops(data.laptops);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
  };
  const multiSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <section className="home-body">
      <div className="container-main">
        <div className="home-page-slider">
          <div className="home-page-slider-left">
            <ul className="ul-menu-main">
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-laptop"></i>
                  <a href="" className="text-menu">
                    Laptop, Macbook, Surface
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Laptop Theo Hãng</span>
                      <p>
                        <a href="">Latop Acer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Asus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Dell</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop HP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Lenovo</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Apple</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop MSI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop LGG</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop VAIO</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Laptop Theo Nhu Câu
                      </span>
                      <p>
                        <a href="">Phổ Thông, Văn Phòng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mỏng Nhẹ Cao Cấp</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Laptop Doanh Nhân</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Cảm Ứng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Lapto Doanh Nghiệp</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Laptop Theo Khoảng Giá
                      </span>
                      <p>
                        <a href="">Dưới 10 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">10 Triệu - 15 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">15 Triệu - 20 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">20 Triệu - 25 Triệur</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">25 Triệu - 30 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">35 Triệu - 40 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">40 Triệu - 45 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Trên 50 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Laptop Theo Cấu Hình
                      </span>
                      <p>
                        <a href="">CPU</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">VGA</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">RAM</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kích Thước Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Độ Phân Giải Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tần Số Quét Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cảm Ứng Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tùy Chọn Cảm Ứng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hệ Điều Hành</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy Tính Bảng</span>
                      <p>
                        <a href="">Máy Tính Bảng Apple</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Tính Bảng Xiaomi</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Phụ Kiện LapTop</span>
                      <p>
                        <a href="">Ba Lô, Cặp, TúiTúi</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đế Tản Nhiệt Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Laptop / Giá Đỡ Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sạc Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Vệ Sinh, Phụ Kiện Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Linh Kiện Laptop</span>
                      <p>
                        <a href="">RAM Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ổ Cứng Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Khay Đặt HDD/SSD - Caddy Bay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy Đọc Sách</span>
                      <p>
                        <a href="">Bộ Mở Rộng Mành Hình Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ 2 Màn Hình 11 đến 15 inch Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-laptop-code"></i>
                  <a href="" className="text-menu">
                    Laptop Gaming, Đồ Họa
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Laptop Gaming</span>
                      <p>
                        <a href="">Latop Gaming Asus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Gaming Acer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Gaming HP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Gaming Dell</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Gaming Alienware</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Gaming Lenovo</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Gaming MSI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Gaming Gigabyte</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Laptop Đồ Họa</span>
                      <p>
                        <a href="">Laptop Đồ Họa Asus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Laptop Đồ Họa AcerAcer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Laptop Đồ Họa Concepd</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Laptop Đồ Họa HP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Laptop Đồ Họa Dell</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Laptop Đồ Họa Lenovo</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Laptop Đồ Họa MSI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Laptop Đồ Họa LG Gram</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Laptop Đồ Họa Surface</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Laptop Đồ Họa Apple</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Laptop Gaming Theo Khoảng Giá
                      </span>
                      <p>
                        <a href="">Dưới 20 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">20 Triệu - 25 Triệur</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">25 Triệu - 30 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">35 Triệu - 40 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">40 Triệu - 45 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">45 Triệu - 50 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">50 Triệu - 60 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">60 Triệu - 70 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Trên 70 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Laptop Theo Cấu Hình
                      </span>
                      <p>
                        <a href="">CPU</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">VGA</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">RAM</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kích Thước Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Độ Phân Giải Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tần Số Quét Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cảm Ứng Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tùy Chọn Cảm Ứng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hệ Điều Hành</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Balo, Cặp, Túi Gaming
                      </span>
                      <p>
                        <a href="">Balo Gaming</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Túi Chống Sốc Gaming</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cặp Laptop Gaming</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Túi Đựng Phụ Kiện</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Vệ Sinh Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Bàn Kệ, Giá Đỡ Laptop
                      </span>
                      <p>
                        <a href="">Bàn Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kệ Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Giá Đỡ Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Bộ Mở Rộng Màn Hình Laptop
                      </span>
                      <p>
                        <a href="">Bộ 2 Màn Hình 11 đến 15 inch Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Kê Tay Bàn Phím Chuột
                      </span>
                      <p>
                        <a href="">Kê Tay Gỗ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kê Tay Da</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Combo Kê Tay Phím Chuột</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Bàn Di Chuột, Thảm Gaming
                      </span>
                      <p>
                        <a href="">Thảm Da Gaming Full Size</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Di Chuột Gaming Có LED</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Di Chuột Gaming Không LED</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Di Chuột Cỡ Nhỏ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-brands fa-usb"></i>
                  <a href="" className="text-menu">
                    Phụ kiện Laptop, PC, Mobile
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Phụ Kiện Laptop</span>
                      <p>
                        <a href="">Ba lô Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cặp Sách Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Túi Chống Sốc</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Túi Đựng Phụ Kiện</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Túi Đựng Phụ Kiện</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đế Tản Nhiệt Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Laptop / Giá đỡ Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sạc Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Laptop Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Vệ Sinh Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Phụ Kiện Setup Bàn Làm Việc
                      </span>
                      <p>
                        <a href="">Arm Màn Hình (Giá Treo Màn Hình)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Arm Mic (Giá Treo Mic)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đèn Bàn - Đèn Trang Trí</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bảng Treo Đồ Đa Năng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kê Chân Chống Mối</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kê Tay Bàn Phím / Chuột</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Di Chuột</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Keycap</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Dây Cáp Các Loại</span>
                      <p>
                        <a href="">Cáp HDMI / VGA</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cáp Displayport</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cáp Máy In</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cáp Chuyển Đổi Các Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cáp USB</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cáp Âm Thanh</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cáp Nguồn Các Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cáp Mạng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cáp Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thiết Bị Chuyển Đổi
                      </span>
                      <p>
                        <a href="">Từ USB Sang Các Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Từ HDMI Sang Các Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Từ Mini Displayport Sang Các Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Từ Type C Sang Các Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Từ VGA Sang Các Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Từ DVI Sang Các Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Từ Displayport Sang Các Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thiết Bị Chuyển Đổ Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Phụ Kiện Điện Thoại, Tablet
                      </span>
                      <p>
                        <a href="">Pin Dự Phòng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phi Thay Thế Cho IPhone</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cáp Sạc</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Củ Sạc</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Gimbal</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Gía Đỡ Điện Thoại / Máy Tính Bảng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mic Thu Âm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Phụ Kiện HDD</span>
                      <p>
                        <a href="">Hộp Đựng Ổ Cứng / HDD Box</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Doking Và Hộp Đựng Nhiều Ổ Cứng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bao Bảo Vệ Ổ Cứng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Khay Đặt Ổ Cứng - Caddy Bay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Bộ Chia Tín Hiệu</span>
                      <p>
                        <a href="">Bộ Chia USB - Hub USB</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Chia VGA</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Chia HDMI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Chia KhácKhác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Linh Kiện Laptop</span>
                      <p>
                        <a href="">RAM Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ổ Cứng Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Phím Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sạc Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-computer"></i>
                  <a href="" className="text-menu">
                    PC-Chơi Game, Học Tập
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">PC Gaming HTP</span>
                      <p>
                        <a href="">PC ARES Gaming Trung Cấp</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC SNIPER Gaming Cao Cấp</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC APOLO Gaming Siêu Cao Cấp</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC LIMITED Gaming Siêu Cao Cấp</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC POSEIDON Gaming Custom Nước</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Chọn PC Theo Khoảng Giá
                      </span>
                      <p>
                        <a href="">Dưới 10 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">10 Triệu - 20 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">20 Triệu - 30 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">30 Triệu - 50 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">50 Triệu - 80 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">80 Triệu - 100 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Trên 100 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Chọn PC Theo CPU</span>
                      <p>
                        <a href="">Intel Core i3</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Intel Core i5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Intel Core i7</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Intel Core i9</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">AMD Ryzen 3</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">AMD Ryzen 5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">AMD Ryzen 7</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">AMD Ryzen 9</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Chọn PC Theo VGA PC HTP SB GeForce RTX
                      </span>
                      <p>
                        <a href="">Nvidia RTX 3070</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 3070Ti</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 3080</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 3080Ti</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 3090</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 3090Ti</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 4060</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 4070 (NEW)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 4080 (NEW)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">PC Gaming Hãng</span>
                      <p>
                        <a href="">PC Gaming Asus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Gaming Dell</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Gaming Gigabyte</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Gaming MSI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Gaming Lenovo</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Gaming Intel</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Chọn PC Theo Kiểu Case
                      </span>
                      <p>
                        <a href="">PC Gaming Mini ITX</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Gaming Mid Tower</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Gaming Full Tower</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Gaming Cube Base</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Gaming White Edition </a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Gaming Signature Case</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Chọn PC Theo RAM</span>
                      <p>
                        <a href="">8GB (1x8GB)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">16GB (2x8GB)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">16GB (1x16GB)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">32GB (4x8GB)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">32GB (2x16GB)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">64GB (4x16GB)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">64GB (2x32GB)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-computer"></i>
                  <a href="" className="text-menu">
                    PC-Đồ Họa, Thiết Kế
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        PC HTP WorkStationStation
                      </span>
                      <p>
                        <a href="">PC HTP Designer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC HTP CAD, Vẽ Kiến Trúc</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC HTP Render</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC HTP AI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC HTP Trader</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC HTP Giả Lập</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Lựa Chọn PC Theo Cấu Hình
                      </span>
                      <p>
                        <a href="">CPU</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">RAM</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">VGA</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Lựa Chọn PC Theo Khoảng Giá
                      </span>
                      <p>
                        <a href="">Dưới 10 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">10 Triệu - 20 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">20 Triệu - 39 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">30 Triệu - 50 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">50 Triệu - 80 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">80 Triệu - 100 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Trên 100 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Linh Kiện Server, WSWS
                      </span>
                      <p>
                        <a href="">MainBoard - Bo Mạch ChúChú</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">CPU - Bộ vi xử lý</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">RAM - Bộ nhớ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">SSD / HDD</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">VGA Workstation</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ kiện, tản nhiệt, Card kết nối</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Workstation Hãng</span>
                      <p>
                        <a href="">Workstaion DELL</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Workstation HP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Workstation Asus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy Chủ Hãng</span>
                      <p>
                        <a href="">Máy Chủ DELL</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chủ HP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chủ Asus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Card Đồ Họa Chuyên Dùng
                      </span>
                      <p>
                        <a href="">Leadtek(Quadro)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Asus (Quadro)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Gigabyte (Quadro)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-computer"></i>
                  <a href="" className="text-menu">
                    PC-Văn Phòng, Làm Việc
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">PC Bộ Theo Hãng</span>
                      <p>
                        <a href="">PC Bộ HTP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Bộ Dell</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Bộ HP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Bộ Asus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Bộ Lenovo</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Bộ Acer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Bộ MSI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thương Hiệu Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Lựa Chọn PC Theo Khoảng Giá
                      </span>
                      <p>
                        <a href="">Dưới 5 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">5 Triệu - 7 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">7 Triệu - 10 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">10 Triệu - 12 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">12 Triệu - 15 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">15 Triệu - 18 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Trên 18 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Chọn Theo CPU</span>
                      <p>
                        <a href="">Intel Celeron / Pentium</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Intel Core i3</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Intel Core i5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Intel Core i5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Intel Core i7</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Intel Core i9</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Intel Core 13th Gen NEW</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">AMD Ryzen 3</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">AMD Ryzen 5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Apple M</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">PC Mini Đa Dụng</span>
                      <p>
                        <a href="">PC Mini Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">PC Mini Theo Cấu Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">PC All In One</span>
                      <p>
                        <a href="">Hãng Sản Xuất</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chọn Theo Khoảng Giá</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kích Thước Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cảm Ứng Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-microchip"></i>
                  <a href="" className="text-menu">
                    Linh Kiện Máy Tính
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">CPU - Bộ Vi Xử Lý</span>
                      <p>
                        <a href="">CPU Intel</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">CPU AMD</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Dùng CPU</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">CPU Theo Socket</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thế Hệ CPU</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Mainboard - Bo Mạch Chủ
                      </span>
                      <p>
                        <a href="">Mainboard Intel</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mainboard AMD</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mainboard Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Socket Hỗ Trợ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chipset</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kiểu Kích Thước (Form Factor)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Số Khe Cắm RAM</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        RAM - Bộ Nhớ Trong
                      </span>
                      <p>
                        <a href="">RAM DDR4</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">RAM DDR5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">RAM Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Dung Lượng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">BUS RAM</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">RAM ECC</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">RAM non-ECC</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">BUS Có LED</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">BUS Không Có LED</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        VGA - Card Màn Hình
                      </span>
                      <p>
                        <a href="">VGA NVIDIA</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">VGA AMD</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">VGA Chuyên Dụng Cho AI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nhu Cầu Sử Dụng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">VGA Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kiểu Bộ Nhớ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Dung Lượng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Giao Diện Bộ Nhớ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Ổ Cứng HDD</span>
                      <p>
                        <a href="">HDD Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">HDD Lưu Trữ Mạng (NAS)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Dung Lượng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tốc Độ Vòng Quay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Nhớ Đệm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Ổ Cứng SDD</span>
                      <p>
                        <a href="">SDD Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Dung Lượng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Loại Ổ Cứng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Card Âm Thanh</span>
                      <p>
                        <a href="">Hãng Sản Xuất</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Case - Vỏ Máy Tính
                      </span>
                      <p>
                        <a href="">Vỏ Case Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Case Theo Nhu Cầu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kích Cỡ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màu Sắc</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Số Quạt Đi Kèm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        PSU - Nguồn Máy Tính
                      </span>
                      <p>
                        <a href="">Nguồn Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Công Suất Nguồn</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chuẩn Nguồn</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kiểu Dây Nguồn</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kích Cỡ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-temperature-arrow-up"></i>
                  <a href="" className="text-menu">
                    Tản Nhiệt, Fan, Đèn Led
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Tản Nhiệt Khí Cho PC
                      </span>
                      <p>
                        <a href="">Tản Nhiệt Khí Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Khí LED RGB</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Khí Không LED</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Khí Màu Trắng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Khí Fan 90mm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Khí Fan 120mm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Khí Fan 140mm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Khí Kiểu Đứng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Khí Kiểu Nằm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Tản Nhiệt Nước All In One
                      </span>
                      <p>
                        <a href="">Hãng Sản Xuất</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kích Cỡ Quạt</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Có LED RGB</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Nước Rad 240</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Nước Rad 280</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Nước Rad 360</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Nước Màu Đen</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Nước Màu Trắng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Tản Nước Lắp Đặt Theo Yêu Cầu
                      </span>
                      <p>
                        <a href="">Trọn Bộ Đã Lắp Đặt Thực Tế</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Nước Custom Ống Cứng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Nước Custom Ống Mềm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Nước Custom EKWB</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tản Nhiệt Nước Custom FreezeMod</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Linh, Phụ Kiện Tản Nhiệt Nước
                      </span>
                      <p>
                        <a href="">Block</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Raditor - Két Làm Mát</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Pump - Bơm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Bơm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tank - Bình Chứa Nước</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Fitting - Cút Nước</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tube - Ống Dẫn Nước</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Coolant - Dung Dịch Làm Mát</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Đèn Led Thông Minh
                      </span>
                      <p>
                        <a href="">Đèn LED Để Bàn</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đèn LED Treo Tường</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đèn LED Gắn Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đèn LED Màn Máy Tính</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Fan Làm Mát Các Loại
                      </span>
                      <p>
                        <a href="">Fan 120mm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Fan 140mm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Fan Không LED</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Fan LED Đơn Màu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Fan LED RGB</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Kem Tản Nhiệt PC, Laptop
                      </span>
                      <p>
                        <a href="">Artic Cooling</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Noctua</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cooler Master</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Corsair</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hãng Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Các Sản Phẩm Modding
                      </span>
                      <p>
                        <a href="">Ốc Vít Modding</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cable Nối Dài Multi Color - Modding</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cable Riser VGA Modding</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Modding</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Giá Đỡ VGA</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-display"></i>
                  <a href="" className="text-menu">
                    Màn Hình Máy Tính, Tay Treo
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Màn Hình Treo Theo Hãng
                      </span>
                      <p>
                        <a href="">Màn Hình Asus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình LG</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Dell</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình SamSung</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình ViewSonic</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình AOC</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Gigabyte</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình MSI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình HP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Hãng Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Nhu Cầu Sử Dụng</span>
                      <p>
                        <a href="">Màn Hình Gaming</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Đồ Họa</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Văn Phòng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Cong</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình UltraView</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Thông Minh </a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Dinh Động</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Vuông</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Màn Hình Theo Khoảng Giá
                      </span>
                      <p>
                        <a href="">Dưới 3 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">3 Triệu - 4 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">4 Triệu - 5 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">5 Triệu - 6 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">6 Triệu - 8 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">8 Triệu - 10 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">10 Triệu - 20 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Trên 20 Triệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Kích Thước Màn Hình
                      </span>
                      <p>
                        <a href="">Màn Hình 19 inch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình 19 - 21.5 inch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình 27 - 29 inch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình 30 - 32 inch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình 34 - 35 inch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Trên 43 inch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Phụ Kiện Màn Hình</span>
                      <p>
                        <a href="">Giá Treo Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Giá Treo Tivi</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Giá Treo Dây Cáp Các Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thiết Bị Chuyển Đổi</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Ghép Nhiều Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kệ Để Laptop, Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đèn Kẹp Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Cổng Kết Nối Màn Hình
                      </span>
                      <p>
                        <a href="">HDMI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">DisplayPort</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">DVI</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">VGA</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">USB</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">USB-C</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thunder Bolt 3</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">RJ45</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Có Tích Hợp Loa</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-regular fa-keyboard"></i>
                  <a href="" className="text-menu">
                    Phím Chuột, Bàn, Ghế, Gear
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Bàn Phím</span>
                      <p>
                        <a href="">Bàn Phím Cơ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Phím Gaming</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Phím Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Chuột</span>
                      <p>
                        <a href="">Chuột Gaming</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chuột Phổ Thông</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chuột Không Dây</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chuột Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Bộ Bàn Phím & Chuột
                      </span>
                      <p>
                        <a href="">Bộ Bàn Phím Chuột</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Bàn Phím Chuột Không Dây</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Bàn Phím Chuột Có Dây</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Ghế Chơi Game Giả Lập
                      </span>
                      <p>
                        <a href="">Ghê Khung Buồng Lái</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Chơi Game Giả Lập CLUVENS </a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Chơi Game Giả Lập INGREM</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Chơi Game Giả Lập OBUTTO</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Phụ Kiện Bàn Phím Cơ
                      </span>
                      <p>
                        <a href="">Kê Tay Chuột</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kê Tay Bàn Phím</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Keycap</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Bàn Di Chuột</span>
                      <p>
                        <a href="">Bàn Di Chuột Full Size</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Di Chuột Thông Thường</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Di Chuột Có LED </a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Di Chuột Không LED </a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Bàn Chơi Game</span>
                      <p>
                        <a href="">Bàn Gaming Giá Rẻ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Gaming Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Điện Nâng Hạ Thông Minh</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Tai Nghe Chơi Game
                      </span>
                      <p>
                        <a href="">Tai Nghe Asus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe Razer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe Corsair</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe HP Hyper X</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe Logitech</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Ghế Chơi Game</span>
                      <p>
                        <a href="">Ghế Chơi Game Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Chơi Game Giá Rẻ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Chơi Game Trung / Cận Cao Cấp</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Chơi Game Cao Cấp</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Khoảng Giá</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chất Liệu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Ghế Công Thái Học</span>
                      <p>
                        <a href="">Ghế Công Thái Học E-Dra</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Công Thái Học Legion</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Công Thái Học SIHOO</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Công Thái Học WARRIOR</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Công Thái Học VITRA</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Phụ Kiện Chơi Game
                      </span>
                      <p>
                        <a href="">Ba lô, Túi Xách</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Game Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-gamepad"></i>
                  <a href="" className="text-menu">
                    PS5, Xbox, Nintendo, GamePad
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy Chơi Game</span>
                      <p>
                        <a href="">Máy Chơi Game PS5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chơi Game Nintendo</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chơi Game Microsoft Xbox</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chơi Game Steam Deck</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chơi Game Asus ROG Ally</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chơi Game Lenovo Legion Go</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chơi Game Retro</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chơi Game Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Tay Cầm Chơi Game</span>
                      <p>
                        <a href="">Tay Cầm Chơi Game Asus ROG</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tay Cầm Chơi Game Asus ROG</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tay Cầm Chơi Game PS5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tay Cầm Chơi Game 8BitDo</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tay Cầm Chơi Game XBox Microsoft</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tay Cầm Chơi Game Nintendo Switch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tay Cầm Chơi Game Machenike</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tay Cầm Chơi Game IINE</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tay Cầm Chơi Game Dareu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tay Cầm Chơi Game Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Sony PlayStation</span>
                      <p>
                        <a href="">PlayStation Portal</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Dock Sạc Nhanh Tay Cầm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đế Tản Nhiệt Máy PlayStation</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ốp Silicone, Bọc Núm Tay Cầm PS5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bao Đựng Tay Cầm, Máy</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Vỏ Ốp Thay Thế PS5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Vô Lăng PS5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Collectors Edition (PS5)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Phụ Kiện Nintendo Switch
                      </span>
                      <p>
                        <a href="">Tay Cầm Nintendo</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tay Cầm Joy-Con</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ốp Silicone, Ốp Bảo Vệ, Bọc Núm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bao Đựng, Túi Đeo Chéo</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thẻ Nhớ Cho Máy Nintendo Switch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sạc, Dock Sạc</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Cho Nintendo Lite</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bao Đựng Thẻ Game</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Collectors Edition (Nintendo)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Nintendo Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thiết Bị Đua Xe Mô Phỏng
                      </span>
                      <p>
                        <a href="">Trọn Bộ - HTP Gaming</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hệ Thống Motion System</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Combo Vô Lăng Trọn Bộ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thiết Bị Lắp Rắp Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Phụ Kiện Cho Tay Cầm
                      </span>
                      <p>
                        <a href="">Pin Sạc, Dock Sạc</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bao Đựng, Ốp Silicone</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Giá Đỡ, Để Đựng Tay Cầm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Skin Cho Tay Cầm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Đĩa Game</span>
                      <p>
                        <a href="">Đĩa Game PS4</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đĩa Game PS5</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thẻ Game Nintendo Switch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Mô Hình Gundam</span>
                      <p>
                        <a href="">Mega Size</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Limited, Luxury</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mô Hình Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Phụ Kiện Steam Dock
                      </span>
                      <p>
                        <a href="">Bao, Túi, Ốp Bảo Vệ Steam Dock</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Steam Deck Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Phụ Kiện ROG Ally</span>
                      <p>
                        <a href="">Bao Đựng, Túi Đựng ROG Ally</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện ROG Ally Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-volume-high"></i>
                  <a href="" className="text-menu">
                    Loa, Tai Nghe, Mic, Webcam
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Loa</span>
                      <p>
                        <a href="">Loa Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Kiểu Dàn Loa</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Loa Hội Nghị</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Loa Bluetooth</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Loa Di Động</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Loa Trợ Giảng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Loa Kéo Karaoke</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Soundbar</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Tai Nghe</span>
                      <p>
                        <a href="">Tai Nghe Có Dây</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe Không Dây</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe Có Mic</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe Không Mic</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe Over-ear</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe In-ear</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe Earbud</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe Bluetooth</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Microphone</span>
                      <p>
                        <a href="">Microphone Asus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Microphone Kingstone</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Microphone Krom</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Microphone Razer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Microphone Salar</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Arm Mic (Giá Treo Mic)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Webcam</span>
                      <p>
                        <a href="">Webcam Microsoft</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Webcam Logitech</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Webcam Razer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Webcam Theo Khoảng Giá</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mic Mở Rộng Cho Webcam</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Webcam Theo Nhu Cầu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thiết Bị Studio, Stream
                      </span>
                      <p>
                        <a href="">Thiết Bị Thu Phát Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Microphone</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thiết Bị Điều Khiển, Bảng Điều Khiển</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thiết Bị Đèn Chiếu Sáng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Cổng Chuyển</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Giá Đỡ, Chân, Đế</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Studio</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thiết Bị Studio Elgato
                      </span>
                      <p>
                        <a href="">Thiết Bị Capture Elgato</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phông Xanh Elgato</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đèn Chiếu Sáng Elgato</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Steam Desk Elgato</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tiêu Âm Elgato</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Microphone Elgato</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chân, Đế, Giá Đỡ Elgato</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Chia Tín Hiệu Elgato</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-video"></i>
                  <a href="" className="text-menu">
                    Camera, Chuông, Khóa, Cháy
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Camera Quan Sát</span>
                      <p>
                        <a href="">Camera Quan Sát Trong Nhà</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera Quan Sát Ngoài Trời</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera Không Dây</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera Thân Nhiệt</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Camera</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera Hỗ Trợ Sim 4G</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Khóa Cửa Thông Minh
                      </span>
                      <p>
                        <a href="">Khóa Cửa Thông Minh Aqara</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Khóa Cửa Thông Minh Kaadas</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Khóa Cửa Thông Minh Dahua</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Khóa Cửa Thông Minh Ezviz</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Khóa Cửa Thông Minh KinLong</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Khóa Cửa Thông Minh Osuno</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Khóa Cửa Thông Minh Phglock</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Thiết Bị Báo Cháy</span>
                      <p>
                        <a href="">Trung Tâm Báo Cháy</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đầu Báo Khói, Báo Nhiệt</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Báo Cháy</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Ổ Cứng Camera</span>
                      <p>
                        <a href="">Ổ Cứng Chuyên Dụng Seagate</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ổ Cứng Chuyên Dụng Western Digital</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Đầu Ghi Hình</span>
                      <p>
                        <a href="">Đầu Ghi Hình Hikvision</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đầu Ghi Hình Dahua</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đầu Ghi Hình Ventech</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đầu Ghi Hình 4 Kênh</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đầu Ghi Hình 8 Kênh</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đầu Ghi Hình 16 Kênh</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đầu Ghi Hình 16 Kênh</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đầu Ghi Hình 32 Kênh</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đầu Ghi Hình 64 Kênh</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thương Hiệu Camera
                      </span>
                      <p>
                        <a href="">Camera Hikivision</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera TP-link</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera Tiandy</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera Ezviz</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera Unv</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera Duaha</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Chuông, Khóa Cửa Vân Tay
                      </span>
                      <p>
                        <a href="">Chuông Cửa Camera</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Sản Phẩm Khác</span>
                      <p>
                        <a href="">Switch POE</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phần Mềm Chuyên Dụng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Camera</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-print"></i>
                  <a href="" className="text-menu">
                    TB Văn Phòng, Hội Nghị
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy In</span>
                      <p>
                        <a href="">Máy In Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy In Theo Nhu Cầu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Náy In Laser</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Náy In Phun</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Náy Photo, Máy Fax</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Náy In Cắt May</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Máy Chiếu & Phụ Kiện
                      </span>
                      <p>
                        <a href="">Máy Chiếu Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chiếu Theo Nhu Cầu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chiếu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Giá Treo Máy Chiếu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Máy Chiếu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bút Trình Chiếu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy Chấm Công</span>
                      <p>
                        <a href="">Máy Chấm Công Vân Tay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chấm Công Thẻ Giấy</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chấm Công Khuôn Mặt</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chấm Công Vân Tay + Thẻ Từ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Chấm Công Kiêm Kiểm Soát Cửa</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Kiểm Soát Cửa</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy Quét Ảnh</span>
                      <p>
                        <a href="">Máy Ép Plastic</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Ảnh Brother</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Ảnh Canon</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Ảnh Epson</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Ảnh Fujitsu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Ảnh HP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Mực In, Phụ Kiện</span>
                      <p>
                        <a href="">Mực Chính Hãng Canon</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mực Chính Hãng HP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mực Chính Hãng Brother</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mực Chính Hãng Epson</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mực Chính Hãng Fuji Xerox</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mực Tương Thích</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mực Đổ & Phụ Kiện Máy In</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Thiết Bị Hội Nghị</span>
                      <p>
                        <a href="">Loa Hội Nghị</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Webcam / Camera Hội Nghị</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thiết Bị Văn Phòng Khác
                      </span>
                      <p>
                        <a href="">Bảng Vẽ Kỹ Thuật Số</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bảng Tương Tác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Lọc Không Khí</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Giám Đốc</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy Ảnh</span>
                      <p>
                        <a href="">Máy Ảnh Du Lịch, Dã Ngoại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Ảnh Chuyên Dụng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Bộ Lưu Điện</span>
                      <p>
                        <a href="">Máy Ảnh Du Lịch, Dã Ngoại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Ảnh Chuyên Dụng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thiết Bị Viễn Thông
                      </span>
                      <p>
                        <a href="">Điện Thoại Bàn</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tổng Đài Điện Thoại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Đàm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-store"></i>
                  <a href="" className="text-menu">
                    TB Siêu Thị, Máy Bán Hàng
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy Đếm Tiền</span>
                      <p>
                        <a href="">Máy Đếm Tiền Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Đếm Tiền Thông Thường</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Đếm Phân Biệt Tiền Giả</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy In Hóa Đơn</span>
                      <p>
                        <a href="">Máy In Hóa Đơn Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy In Hóa Đơn Theo Khổ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy In Hóa Đơn Theo Cổng Kết Nối</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy In Mã Vạch</span>
                      <p>
                        <a href="">Máy In Mã Vạch Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy In Mã Vạch Theo Công Nghệ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy In Mã Vạch Theo Độ Phân Giải</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy POS Bán Hàng</span>
                      <p>
                        <a href="">Máy POS Bán Hàng Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy POS Bán Hàng 1 Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy POS Bán Hàng 2 Màn Hình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy Quét Mã Vạch</span>
                      <p>
                        <a href="">Máy Quét Mã Vạch Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Mã Vạch 1D</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Mã Vạch 2D (QRCODE)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Mã Vạch Để Bàn</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Mã Vạch Cầm Tay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Mã Vạch Có Dây</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Quét Mã Vạch Không Dây</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Máy Kiểm Kho Tự Động
                      </span>
                      <p>
                        <a href="">Thiết Bị Kiểm Kho Cipherlap</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thiết Bị Kiểm Kho Honeywell</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thiết Bị Kiểm Kho Dolphin</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thiết Bị Kiểm Kho Zebex</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Vật Tư, Phụ Kiện</span>
                      <p>
                        <a href="">Giấy In Hóa Đơn</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Decal Dùng Cho In Nhãn Cầm Tay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Decal Thường</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Decal Nhiệt</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ribbon Mực In</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Màn Hình Hiển Thị Giá</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đầu Đọc Thẻ Từ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        KIOSK Tra Cứu Thông Tin, Quảng Cáo
                      </span>
                      <p>
                        <a href="">MKIOSK Cấp Số Thứ Tự</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">MKIOSK Tra Cứu Thông Tin</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">MKIOSK Quảng Cáo</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">MKIOSK Bán Hàng Tự Phục Vụ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Ngăn Kéo Đựng Tiền
                      </span>
                      <p>
                        <a href="">Ngăn Kéo Đựng Tiền Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ngăn Kéo Đừng Tiền Theo Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-wifi"></i>
                  <a href="" className="text-menu">
                    TB Mạng, Lưu Trữ, Phần Mềm
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Bộ Chia Mạng - Switch
                      </span>
                      <p>
                        <a href="">Chủng Loại Switch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Số Cổng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chất Liệu Switch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hãng Sản Xuất</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Thiết Bị Mạng</span>
                      <p>
                        <a href="">Access Point</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Phát Wifi Gắn Trần</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Chuyển Đổi Nguồn POE</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thiết Bị Firewall, Cần Bằng Tải</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Phụ Kiện Mạng</span>
                      <p>
                        <a href="">Dây Mạng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tủ Mạng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hạt Mạng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Mạng Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Card Mạng</span>
                      <p>
                        <a href="">Tốc Độ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chuẩn Cắm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chủng Loại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hãng Sản Xuất</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">USB</span>
                      <p>
                        <a href="">Hãng USB</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">USB Theo Dung Lượng </a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Bộ Lưu Trữ - NAS</span>
                      <p>
                        <a href="">Ổ 2 Khay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ổ 4 Khay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Bộ Kích Sóng Wifi</span>
                      <p>
                        <a href="">Chuẩn Kết Nối</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hãng Sản Xuất</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Bộ Mesh Wifi</span>
                      <p>
                        <a href="">Tốc Độ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hãng Sản Xuất</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Bộ Phát Sóng Wifi</span>
                      <p>
                        <a href="">Chuẩn Kết Nối</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nhu Cầu Sử Dụng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hãng Sản Xuất</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Thẻ Nhớ</span>
                      <p>
                        <a href="">Hãng Thẻ Nhớ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thẻ Nhớ SD / Micro SD</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thẻ Nhớ Theo Dung Lượng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Ổ Cứng SSD Gắn Trong
                      </span>
                      <p>
                        <a href="">SSD Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Dung Lượng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Loại Ổ Cứng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Bộ Phát Wifi 3G/4G
                      </span>
                      <p>
                        <a href="">Bộ Phát D-Link</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Phát Totolink</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Phát TP-Link</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Ổ Cứng Di Động</span>
                      <p>
                        <a href="">Ổ Cứng Di Động Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ổ Cứng Di Động HDD</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ổ Cứng Di Động SSD</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Dung Lượng / Kích Thước</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Ổ Cứng HDD Gắn Trong
                      </span>
                      <p>
                        <a href="">HDD Theo Hãng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Dung Lượng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tốc Độ Vòng Quay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bộ Nhớ Đệm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">Phụ Kiện Lưu Trữ</span>
                      <p>
                        <a href="">Hộp Đựng Ổ Cứng - HDD Box</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Docking</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bao Bảo Vệ Ổ Cứng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Khay Đặt Ổ Cứng - Caddy Bay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Phần Mềm, Hệ Điều Hành
                      </span>
                      <p>
                        <a href="">Phần Mềm Diệt Virus</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phần Mềm Office</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hệ Điều Hành</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-car-side"></i>
                  <a href="" className="text-menu">
                    Ôtô, Du Lịch, Nhà Thông Minh
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Đồ Chơi - Tiện Ích Ô Tô
                      </span>
                      <p>
                        <a href="">Camera Hành Trình</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phần Mềm Dẫn Đường</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chăm Sóc Sơn Xe</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sản Phẩm Khử Mùi Ô Tô</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Lọc Không Khí Ô Tô</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Giá Đỡ Điện Thoại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Biển Số Điện Thoại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">Du Lịch Dã Ngoại</span>
                      <p>
                        <a href="">Máy Chiếu Mini</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Loa Dã Ngoại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">GIMBAL Cầm Tay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera Hành Động</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Camera Hành Động</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Quạt Cầm Tay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Trạm Sạc Dự Phòng Đa Năng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Pin Sạc Dự Phòng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đèn Năng Lượng Mặt Trời</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thiết Bị Nhà Thông Minh
                      </span>
                      <p>
                        <a href="">Ổ Cấm Điện Thông Minh</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">TIVI Box</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Lọc Không Khí</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Hút Ẩm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cân Điện Tử</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Robot Hút Bụi</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Hút Bụi Cầm Tay</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Quạt Tích Điện</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Phun Sương Tạo Ẩm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Làm Sạch Bằng Sóng Âm</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Khử Mùi</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Đèn Bàn Học Chống Cận</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">Máy Ảnh</span>
                      <p>
                        <a href="">Máy Ảnh Du Lịch, Dã Ngoại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Máy Ảnh Chuyên Dụng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                  <a href="" className="text-menu">
                    Dịch Vụ Sửa Chữa, Lắp Đặt
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Sửa Chữa Laptop</span>
                      <p>
                        <a href="">Sửa Main Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Nguồn Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Cổng LAN Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Audio</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Bản Lề Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Màn Hình Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Wifi Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Sửa Chữa Linh Kiện Máy Tính
                      </span>
                      <p>
                        <a href="">Sửa Main Máy Tính</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Nguồn Máy Tính</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa VGA Máy Tính</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Vỏ Case Máy Tính</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Màn Hình Máy Tính</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Bàn Phím, Chuột Máy Tính</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Loa Máy Tính</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Sửa Chữa Thiết Bị Văn Phòng
                      </span>
                      <p>
                        <a href="">Sửa Chữa Máy In</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Máy Scan</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Máy Chiếu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Máy Hủy Giấy</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Máy Bắn Mã Vạch</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Máy Chấm Công</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sửa Máy POS</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thay Thế Linh Kiện Laptop
                      </span>
                      <p>
                        <a href="">Thay Main Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thay Bản Lề Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thay Màn Hình Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thay Bàn Phím Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thay Pin Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Dịch Vụ Bảo Hành Mở Rộng
                      </span>
                      <p>
                        <a href="">Thêm 1 Năm Bảo Hành Cho Laptop</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Sửa Chữa Điện Thoại
                      </span>
                      <p>
                        <a href="">Thay Pin Điện Thoại</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Bảo Trì Bảo Dưỡng Máy Tính, TBVP
                      </span>
                      <p>
                        <a href="">Bảo Trì Tại Chi Nhánh</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bảo Trì Tại Nơi Sử Dụng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">Dịch Vụ Cài đặt</span>
                      <p>
                        <a href="">Cài Đặt Hệ Điều Hành</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cài Đặt Máy Chủ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Cài Đặt Máy Chấm Công</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">Thi Công</span>
                      <p>
                        <a href="">Hệ Thống Mạng</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hệ Thống Camera</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hệ Thống Máy Chiếu</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Hệ Thống Máy Chấm Công</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-arrow-up-right-dots"></i>
                  <a href="" className="text-menu">
                    Thu Cũ Đổi Mới, Lên Đời
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <img src="/assets/menu-list.jpg" alt="" />
                  </div>
                </div>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-bolt"></i>
                  <a href="" className="text-menu">
                    Hàng Hiệu Cũ, Siêu Tiết Kiệm
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
                <div className="popup-content">
                  <div className="popup-container">
                    <div className="popup-container-item">
                      <span className="popup-box-title">Linh Kiện Cũ</span>
                      <p>
                        <a href="">CPU Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mainboard Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ram Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">VGA Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">SSD Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nguồn Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Case Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Màn Hình Và Phụ Kiện Cũ
                      </span>
                      <p>
                        <a href="">Màn Hình Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Màn Hình Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Bàn Phím, Chuột Cũ
                      </span>
                      <p>
                        <a href="">Bàn Phím Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Chuột Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Phím Chuột Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Laptop Và Phụ Kiện Cũ
                      </span>
                      <p>
                        <a href="">Laptop Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Laptop Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">Bàn, Ghế Cũ</span>
                      <p>
                        <a href="">Ghế Gaming Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ghế Công Thái Học Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Bàn Ghế Học Sinh Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thiết Bị Chơi Game Cũ
                      </span>
                      <p>
                        <a href="">Máy Chơi Game, Tay Game Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Phụ Kiện Game Khác Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Linh Kiện Server, Workstation Cũ
                      </span>
                      <p>
                        <a href="">CPU Server, Workstation Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Mainboard Server, Workstation Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Ram Server, Workstation Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">VGA Server, Workstation Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">HDD Server, Workstation Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">
                        Thiết Bị Văn Phòng, Siêu Thị Cũ
                      </span>
                      <p>
                        <a href="">Thiết Bị Văn Phòng Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Thiết Bị Bán Hàng Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>

                    <div className="popup-container-item">
                      <span className="popup-box-title">Nghe Nhìn Cũ</span>
                      <p>
                        <a href="">Loa Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Tai Nghe Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Camera Cũ</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Sản Phẩm Khác</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="home-page-slider-center">
            <div className="home-slider">
              <div className="owl-stage-outer">
                <Slider {...settings}>
                  <div
                    className="owl-item"
                    style={{ width: "auto", "margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item1.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "atuo", "margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item2.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "atuo", "margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item3.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "atuo", "margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item4.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "atuo", "margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item5.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "atuo", "margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item6.png" alt="" />
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="home-slider-bottom">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="/assets/itemb1.jpg" alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="/assets/itemb2.png" alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="/assets/itemb3.png" alt="" />
              </a>
            </div>
          </div>
          <div className="home-page-slider-right">
            <div className="right-slider">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="/assets/itemb5.jpg" alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="/assets/itemb4.png" alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="/assets/itemb6.png" alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="/assets/itemb7.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* __________________Product_________________________ */}
      <section className="slider-product-one">
        <div className="container-main">
          <div className="slider-product-one-content">
            <div className="slider-product-one-content-title">
              <h2 className="h-title-main">LAPTOP, MACBOOK, SURFACE</h2>
              <div className="sub-cart-title">
                <a href="" className="hover-red">
                  APPLE
                </a>
                <a href="" className="hover-red">
                  DELL
                </a>
                <a href="" className="hover-red">
                  ASUS
                </a>
                <a href="" className="hover-red">
                  ACER
                </a>
                <a href="" className="hover-red">
                  MSI
                </a>
                <a href="" className="hover-red">
                  LENOVO
                </a>
                <a href="" className="hover-red">
                  Máy Tính Xách Tay
                </a>
                <a href="" className="hover-red">
                  Máy Tính Bảng
                </a>
                <a href="" className="hover-red">
                  Máy Đọc Sách
                </a>
                <a href="" className="hover-red">
                  Đồng Hồ Thông Minh
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <Slider {...multiSlider}>
                {laptops.map((laptop) => (
                  <div
                    className="slider-product-one-content-item"
                    key={laptop.id}
                  >
                    <div className="p-component">
                      <img src={laptop.imageUrl} alt={laptop.productName} />
                      <div className="slider-product-one-content-item-text">
                        <div className="review-count">
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="p-count-rate">(0)</span>
                          </li>
                          <p className="p-sku">MÃ: {laptop.sku}</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <Link to="/product-detail">
                              {laptop.productName}
                            </Link>
                          </p>
                          <span className="p-mprice">{laptop.originPrice}</span>
                          <span className="p-discount">
                            (Tiết kiệm: {laptop.percentSale}%)
                          </span>
                          <span className="p-price">{laptop.salePrice}</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            {laptop.infos.map((info, index) => (
                              <div className="attr-item" key={index}>
                                <span className="text">{info}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="#" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="slider-product-one-content">
            <div className="slider-product-one-content-title">
              <h2 className="h-title-main">PC-CHƠI GAME, HỌC TẬP</h2>
              <div className="sub-cart-title">
                <a href="" className="hover-red">
                  PC HTP
                </a>
                <a href="" className="hover-red">
                  PC HTP X ASUS
                </a>
                <a href="" className="hover-red">
                  PC HTP X MSI
                </a>
                <a href="" className="hover-red">
                  PC HTP X GIGABYTE
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <Slider {...multiSlider}>
                {laptops.map((laptop) => (
                  <div
                    className="slider-product-one-content-item"
                    key={laptop.id}
                  >
                    <div className="p-component">
                      <img src={laptop.imageUrl} alt={laptop.productName} />
                      <div className="slider-product-one-content-item-text">
                        <div className="review-count">
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="p-count-rate">(0)</span>
                          </li>
                          <p className="p-sku">MÃ: {laptop.sku}</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <Link to="/product-detail">
                              {laptop.productName}
                            </Link>
                          </p>
                          <span className="p-mprice">{laptop.originPrice}</span>
                          <span className="p-discount">
                            (Tiết kiệm: {laptop.percentSale}%)
                          </span>
                          <span className="p-price">{laptop.salePrice}</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            {laptop.infos.map((info, index) => (
                              <div className="attr-item" key={index}>
                                <span className="text">{info}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="#" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="slider-product-one-content">
            <div className="slider-product-one-content-title">
              <h2 className="h-title-main">PC - Đồ Họa, Thiết Kế</h2>
              <div className="sub-cart-title">
                <a href="" className="hover-red">
                  PC Đồ Họa, Render HTP
                </a>
                <a href="" className="hover-red">
                  Máy Trạm Hãng
                </a>
                <a href="" className="hover-red">
                  Máy Chủ Hãng
                </a>
                <a href="" className="hover-red">
                  Linh Kiện Máy Chủ, Máy Trạm
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <Slider {...multiSlider}>
                {laptops.map((laptop) => (
                  <div
                    className="slider-product-one-content-item"
                    key={laptop.id}
                  >
                    <div className="p-component">
                      <img src={laptop.imageUrl} alt={laptop.productName} />
                      <div className="slider-product-one-content-item-text">
                        <div className="review-count">
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="p-count-rate">(0)</span>
                          </li>
                          <p className="p-sku">MÃ: {laptop.sku}</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="#">{laptop.productName}</a>
                          </p>
                          <span className="p-mprice">{laptop.originPrice}</span>
                          <span className="p-discount">
                            (Tiết kiệm: {laptop.percentSale}%)
                          </span>
                          <span className="p-price">{laptop.salePrice}</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            {laptop.infos.map((info, index) => (
                              <div className="attr-item" key={index}>
                                <span className="text">{info}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="#" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="slider-product-one-content">
            <div className="slider-product-one-content-title">
              <h2 className="h-title-main">PS5, Xbox, Nintendo, Game Pad</h2>
              <div className="sub-cart-title">
                <a href="" className="hover-red">
                  PS5
                </a>
                <a href="" className="hover-red">
                  XBOX
                </a>
                <a href="" className="hover-red">
                  NINTENDO
                </a>
                <a href="" className="hover-red">
                  STEAM
                </a>
                <a href="" className="hover-red">
                  Tay cầm
                </a>
                <a href="" className="hover-red">
                  Đĩa Game
                </a>
                <a href="" className="hover-red">
                  Phụ Kiện PS5
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <Slider {...multiSlider}>
                {laptops.map((laptop) => (
                  <div
                    className="slider-product-one-content-item"
                    key={laptop.id}
                  >
                    <div className="p-component">
                      <img src={laptop.imageUrl} alt={laptop.productName} />
                      <div className="slider-product-one-content-item-text">
                        <div className="review-count">
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="p-count-rate">(0)</span>
                          </li>
                          <p className="p-sku">MÃ: {laptop.sku}</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="#">{laptop.productName}</a>
                          </p>
                          <span className="p-mprice">{laptop.originPrice}</span>
                          <span className="p-discount">
                            (Tiết kiệm: {laptop.percentSale}%)
                          </span>
                          <span className="p-price">{laptop.salePrice}</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            {laptop.infos.map((info, index) => (
                              <div className="attr-item" key={index}>
                                <span className="text">{info}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="#" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="slider-product-one-content">
            <div className="slider-product-one-content-title">
              <h2 className="h-title-main">PC - Văn Phòng, Làm Việc</h2>
              <div className="sub-cart-title">
                <a href="" className="hover-red">
                  Máy Tính Văn Phòng HTP
                </a>
                <a href="" className="hover-red">
                  Máy Tính Văn Phòng ASUS
                </a>
                <a href="" className="hover-red">
                  Máy Tính Văn Phòng DELL
                </a>
                <a href="" className="hover-red">
                  Máy Tính Văn Phòng HP
                </a>
                <a href="" className="hover-red">
                  Máy Tính Văn Phòng All In One
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <Slider {...multiSlider}>
                {laptops.map((laptop) => (
                  <div
                    className="slider-product-one-content-item"
                    key={laptop.id}
                  >
                    <div className="p-component">
                      <img src={laptop.imageUrl} alt={laptop.productName} />
                      <div className="slider-product-one-content-item-text">
                        <div className="review-count">
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="p-count-rate">(0)</span>
                          </li>
                          <p className="p-sku">MÃ: {laptop.sku}</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="#">{laptop.productName}</a>
                          </p>
                          <span className="p-mprice">{laptop.originPrice}</span>
                          <span className="p-discount">
                            (Tiết kiệm: {laptop.percentSale}%)
                          </span>
                          <span className="p-price">{laptop.salePrice}</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            {laptop.infos.map((info, index) => (
                              <div className="attr-item" key={index}>
                                <span className="text">{info}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="#" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="slider-product-one-content">
            <div className="slider-product-one-content-title">
              <h2 className="h-title-main">Linh Kiện Máy Tính</h2>
              <div className="sub-cart-title">
                <a href="" className="hover-red">
                  CPU
                </a>
                <a href="" className="hover-red">
                  MAINBOARD
                </a>
                <a href="" className="hover-red">
                  RAM
                </a>
                <a href="" className="hover-red">
                  SSD
                </a>
                <a href="" className="hover-red">
                  HDD
                </a>
                <a href="" className="hover-red">
                  VGA - Card Màn Hình
                </a>
                <a href="" className="hover-red">
                  Vỏ CASE
                </a>
                <a href="" className="hover-red">
                  PSU - Nguồn
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <PCPreBuilt />
              <Slider {...multiSlider}>
                {laptops.map((laptop) => (
                  <div
                    className="slider-product-one-content-item"
                    key={laptop.id}
                  >
                    <div className="p-component">
                      <img src={laptop.imageUrl} alt={laptop.productName} />
                      <div className="slider-product-one-content-item-text">
                        <div className="review-count">
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="p-count-rate">(0)</span>
                          </li>
                          <p className="p-sku">MÃ: {laptop.sku}</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="#">{laptop.productName}</a>
                          </p>
                          <span className="p-mprice">{laptop.originPrice}</span>
                          <span className="p-discount">
                            (Tiết kiệm: {laptop.percentSale}%)
                          </span>
                          <span className="p-price">{laptop.salePrice}</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            {laptop.infos.map((info, index) => (
                              <div className="attr-item" key={index}>
                                <span className="text">{info}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="#" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="slider-product-one-content">
            <div className="slider-product-one-content-title">
              <h2 className="h-title-main">Màn Hình Máy Tính, Tay Treo</h2>
              <div className="sub-cart-title">
                <a href="" className="hover-red">
                  DELL
                </a>
                <a href="" className="hover-red">
                  ASUS
                </a>
                <a href="" className="hover-red">
                  SÁNUNG
                </a>
                <a href="" className="hover-red">
                  LG
                </a>
                <a href="" className="hover-red">
                  GIGABYTE
                </a>
                <a href="" className="hover-red">
                  VIEWSONIC
                </a>
                <a href="" className="hover-red">
                  HP
                </a>
                <a href="" className="hover-red">
                  HKC
                </a>
                <a href="" className="hover-red">
                  Tay Treo Màn Hình
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <Slider {...multiSlider}>
                {laptops.map((laptop) => (
                  <div
                    className="slider-product-one-content-item"
                    key={laptop.id}
                  >
                    <div className="p-component">
                      <img src={laptop.imageUrl} alt={laptop.productName} />
                      <div className="slider-product-one-content-item-text">
                        <div className="review-count">
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="p-count-rate">(0)</span>
                          </li>
                          <p className="p-sku">MÃ: {laptop.sku}</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="#">{laptop.productName}</a>
                          </p>
                          <span className="p-mprice">{laptop.originPrice}</span>
                          <span className="p-discount">
                            (Tiết kiệm: {laptop.percentSale}%)
                          </span>
                          <span className="p-price">{laptop.salePrice}</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            {laptop.infos.map((info, index) => (
                              <div className="attr-item" key={index}>
                                <span className="text">{info}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="#" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="slider-product-one-content">
            <div className="slider-product-one-content-title">
              <h2 className="h-title-main">Phím Chuột, Bàn, Ghế, Gear</h2>
              <div className="sub-cart-title">
                <a href="" className="hover-red">
                  Ghế Công Thái Học
                </a>
                <a href="" className="hover-red">
                  Bàn, Ghế Gaming Cao Cấp
                </a>
                <a href="" className="hover-red">
                  Bàn Phím, Chuột
                </a>
                <a href="" className="hover-red">
                  Ghế Khung Buồng Lái
                </a>
                <a href="" className="hover-red">
                  Bộ Bàn Phím Chuột
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <Slider {...multiSlider}>
                {laptops.map((laptop) => (
                  <div
                    className="slider-product-one-content-item"
                    key={laptop.id}
                  >
                    <div className="p-component">
                      <img src={laptop.imageUrl} alt={laptop.productName} />
                      <div className="slider-product-one-content-item-text">
                        <div className="review-count">
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="p-count-rate">(0)</span>
                          </li>
                          <p className="p-sku">MÃ: {laptop.sku}</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="#">{laptop.productName}</a>
                          </p>
                          <span className="p-mprice">{laptop.originPrice}</span>
                          <span className="p-discount">
                            (Tiết kiệm: {laptop.percentSale}%)
                          </span>
                          <span className="p-price">{laptop.salePrice}</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            {laptop.infos.map((info, index) => (
                              <div className="attr-item" key={index}>
                                <span className="text">{info}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="#" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="slider-product-one-content">
            <div className="slider-product-one-content-title">
              <h2 className="h-title-main">Loa, Tai Nghe, Mic, Webcam</h2>
              <div className="sub-cart-title">
                <a href="" className="hover-red">
                  Máy Trợ Giảng
                </a>
                <a href="" className="hover-red">
                  Card Âm Thanh
                </a>
                <a href="" className="hover-red">
                  Loa
                </a>
                <a href="" className="hover-red">
                  Tai Nghe
                </a>
                <a href="" className="hover-red">
                  Microphone
                </a>
                <a href="" className="hover-red">
                  Webcam
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <Slider {...multiSlider}>
                {laptops.map((laptop) => (
                  <div
                    className="slider-product-one-content-item"
                    key={laptop.id}
                  >
                    <div className="p-component">
                      <Link to='/product-detail'>
                        <img src={laptop.imageUrl} alt={laptop.productName} />
                      </Link>
                      <div className="slider-product-one-content-item-text">
                        <div className="review-count">
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="p-count-rate">(0)</span>
                          </li>
                          <p className="p-sku">MÃ: {laptop.sku}</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <Link to='/product-detail'>{laptop.productName}</Link>
                          </p>
                          <span className="p-mprice">{laptop.originPrice}</span>
                          <span className="p-discount">
                            (Tiết kiệm: {laptop.percentSale}%)
                          </span>
                          <span className="p-price">{laptop.salePrice}</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            {laptop.infos.map((info, index) => (
                              <div className="attr-item" key={index}>
                                <span className="text">{info}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="#" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="slider-product-one-content">
            <div className="slider-product-one-content-title">
              <h2 className="h-title-main">Hàng Hiệu Cũ, Siêu Tiết Kiệm</h2>
              <div className="sub-cart-title">
                <a href="" className="hover-red">
                  Laptop Và Phụ Kiện Cũ
                </a>
                <a href="" className="hover-red">
                  PC HTP Cũ
                </a>
                <a href="" className="hover-red">
                  Link Kiện Cũ
                </a>
                <a href="" className="hover-red">
                  Thiết Bị Chơi Game Cũ
                </a>
                <a href="" className="hover-red">
                  Màn Hình Và Phụ Kiện Cũ
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <Slider {...multiSlider}>
                {laptops.map((laptop) => (
                  <div
                    className="slider-product-one-content-item"
                    key={laptop.id}
                  >
                    <div className="p-component">
                      <img src={laptop.imageUrl} alt={laptop.productName} />
                      <div className="slider-product-one-content-item-text">
                        <div className="review-count">
                          <li>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="p-count-rate">(0)</span>
                          </li>
                          <p className="p-sku">MÃ: {laptop.sku}</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="#">{laptop.productName}</a>
                          </p>
                          <span className="p-mprice">{laptop.originPrice}</span>
                          <span className="p-discount">
                            (Tiết kiệm: {laptop.percentSale}%)
                          </span>
                          <span className="p-price">{laptop.salePrice}</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            {laptop.infos.map((info, index) => (
                              <div className="attr-item" key={index}>
                                <span className="text">{info}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="#" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Home;

import "./Home.scss";
import Slider from "react-slick";
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed:1000,
    autoplaySpeed: 1500
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
                      <span className="popup-box-title">
                        Laptop Theo Hãng
                      </span>
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
                      <span className="popup-box-title">
                        Máy Tính Bảng
                      </span>
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
                      <span className="popup-box-title">
                        Phụ Kiện LapTop
                      </span>
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
                      <span className="popup-box-title">
                        Linh Kiện Laptop
                      </span>
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
                      <span className="popup-box-title">
                        Máy Đọc Sách
                      </span>
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
                      <span className="popup-box-title">
                        Laptop Gaming
                      </span>
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
                      <span className="popup-box-title">
                        Laptop Đồ Họa
                      </span>
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
                      <span className="popup-box-title">
                        Phụ Kiện Laptop
                      </span>
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
                      <span className="popup-box-title">
                        Dây Cáp Các Loại
                      </span>
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
                      <span className="popup-box-title">
                        Phụ Kiện HDD
                      </span>
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
                      <span className="popup-box-title">
                        Bộ Chia Tín Hiệu
                      </span>
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
                      <span className="popup-box-title">
                        Linh Kiện Laptop
                      </span>
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
                      <span className="popup-box-title">
                        PC Gaming HTP
                      </span>
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
                      <span className="popup-box-title">
                        Chọn PC Theo CPU
                      </span>
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
                        PC Gaming Hãng
                      </span>
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
                    {/* <div className="popup-container-item">
                      <span className="popup-box-title">
                        Chọn PC Theo VGA PC HTP SB GeForce RTX
                      </span>
                      <p>
                        <a href="">Nvidia GT 1030</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia GTX 1050TiTi</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia GTX 1660 Super</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 3050</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 3060</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Nvidia RTX 3060Ti</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
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
                      <p>
                        <a href="">Nvidia RTX 4090 (NEW)</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                    </div> */}
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
                      <span className="popup-box-title">
                        Chọn PC Theo RAM
                      </span>
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
                        <a href="">30 Triệu - 50 Triệur</a>
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
                      <span className="popup-box-title">
                        Workstation Hãng
                      </span>
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
                      <span className="popup-box-title">
                        Máy Chủ Hãng
                      </span>
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
                      <span className="popup-box-title">
                        PC Bộ Theo Hãng
                      </span>
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
                        <a href="">30 Triệu - 50 Triệur</a>
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
                      <span className="popup-box-title">
                        Workstation Hãng
                      </span>
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
                      <span className="popup-box-title">
                        Máy Chủ Hãng
                      </span>
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
                  <i className="fa-solid fa-microchip"></i>
                  <a href="" className="text-menu">
                    Linh Kiện Máy Tính
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-temperature-arrow-up"></i>
                  <a href="" className="text-menu">
                    Tản Nhiệt, Fan, Đèn Led
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-display"></i>
                  <a href="" className="text-menu">
                    Màn Hình Máy Tính, Tay Treo
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-regular fa-keyboard"></i>
                  <a href="" className="text-menu">
                    Phím Chuột, Bàn, Ghế, Gear
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-gamepad"></i>
                  <a href="" className="text-menu">
                    PS5, Xbox, Nintendo, GamePad
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-volume-high"></i>
                  <a href="" className="text-menu">
                    Loa, Tai Nghe, Mic, Webcam
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-video"></i>
                  <a href="" className="text-menu">
                    Camera, Chuông, Khóa, Cháy
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-print"></i>
                  <a href="" className="text-menu">
                    TB Văn Phòng, Hội Nghị
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-store"></i>
                  <a href="" className="text-menu">
                    TB Siêu Thị, Máy Bán Hàng
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-wifi"></i>
                  <a href="" className="text-menu">
                    TB Mạng, Lưu Trữ, Phần Mềm
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-car-side"></i>
                  <a href="" className="text-menu">
                    Ôtô, Du Lịch, Nhà Thông Minh
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                  <a href="" className="text-menu">
                    Dịch Vụ Sửa Chữa, Lắp Đặt
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-arrow-up-right-dots"></i>
                  <a href="" className="text-menu">
                    Thu Cũ Đổi Mới, Lên Đời
                  </a>
                </div>
                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-bolt"></i>
                  <a href="" className="text-menu">
                    Hàng Hiệu Cũ, Siêu Tiết Kiệm
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
            </ul>
          </div>
          <div className="home-page-slider-center">
            <div className="home-slider">
              <div className="owl-stage-outer">
                <Slider {...settings}>
                  <div
                  className="owl-item"
                  style={{ "width": "auto" ,"margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item1.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                  className="owl-item"
                  style={{ "width": "atuo","margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item2.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                  className="owl-item"
                  style={{ "width": "atuo","margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item3.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                  className="owl-item"
                  style={{ "width": "atuo" ,"margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item4.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                  className="owl-item"
                  style={{ "width": "atuo" ,"margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item5.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                  className="owl-item"
                  style={{ "width": "atuo","margin-right": "10px" }}
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
                  Đồ Hồ Thông Minh
                </a>
              </div>
              <a href="" className="viewall">
                Xem tất cả
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="slider-product-one-content-container">
              <div className="slider-product-one-content-container-items">
                <div className="slider-product-one-content-items">
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/latop1.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>

                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/laptop2.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>

                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/laptop3.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>
                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/laptop4.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>
                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/laptop5.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>
                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/laptop6.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
              <div className="slider-product-one-btn">
                <i className="fa-solid fa-angle-left fa-chevron-left"></i>
                <i className="fa-solid fa-angle-right fa-chevron-right"></i>
              </div>
            </div>
          </div>
          {/* <div className="slider-product-one-content">
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
                PC HTP X MSI{" "}
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
            <div className="slider-product-one-content-container-items">
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-product-one-btn">
              <i className="fa-solid fa-angle-left fa-chevron-left"></i>
              <i className="fa-solid fa-angle-right fa-chevron-right"></i>
            </div>
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
            <div className="slider-product-one-content-container-items">
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-product-one-btn">
              <i className="fa-solid fa-angle-left fa-chevron-left"></i>
              <i className="fa-solid fa-angle-right fa-chevron-right"></i>
            </div>
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
            <div className="slider-product-one-content-container-items">
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-product-one-btn">
              <i className="fa-solid fa-angle-left fa-chevron-left"></i>
              <i className="fa-solid fa-angle-right fa-chevron-right"></i>
            </div>
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
            <div className="slider-product-one-content-container-items">
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-product-one-btn">
              <i className="fa-solid fa-angle-left fa-chevron-left"></i>
              <i className="fa-solid fa-angle-right fa-chevron-right"></i>
            </div>
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
            <div className="slider-product-one-content-container-items">
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-product-one-btn">
              <i className="fa-solid fa-angle-left fa-chevron-left"></i>
              <i className="fa-solid fa-angle-right fa-chevron-right"></i>
            </div>
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
            <div className="slider-product-one-content-container-items">
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-product-one-btn">
              <i className="fa-solid fa-angle-left fa-chevron-left"></i>
              <i className="fa-solid fa-angle-right fa-chevron-right"></i>
            </div>
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
            <div className="slider-product-one-content-container-items">
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-product-one-btn">
              <i className="fa-solid fa-angle-left fa-chevron-left"></i>
              <i className="fa-solid fa-angle-right fa-chevron-right"></i>
            </div>
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
            <div className="slider-product-one-content-container-items">
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-product-one-btn">
              <i className="fa-solid fa-angle-left fa-chevron-left"></i>
              <i className="fa-solid fa-angle-right fa-chevron-right"></i>
            </div>
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
            <div className="slider-product-one-content-container-items">
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>

                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                  <div className="p-component">
                    <img src="assets/latop1.jpg" alt="" />
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
                        <p className="p-sku">MÃ: LAHP249</p>
                      </div>
                      <div className="p-info">
                        <p className="p-name">
                          <a href="">
                            Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA) (Core
                            5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                            ứng/Bút/Win11/Bạc)
                          </a>
                        </p>
                        <span className="p-mprice">24.899.000</span>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                        <span className="p-price">22.499.000</span>
                      </div>
                      <div className="p-promotion-group">
                        <div className="p-promotion-holder">
                          <div className="attr-item">
                            <span className="text">CPU: Intel Core i5</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">RAM: 16 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">SSD: 512 GB</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">Màn hình: 14 inch</span>
                          </div>
                          <div className="attr-item">
                            <span className="text">
                              VGA: VGA Tích Hợp (Onboard)
                            </span>
                          </div>
                        </div>
                        <div className="p-gift-holder">
                          <div className="p-gift-list">
                            <div className="item">
                              <img
                                src="./assets/promo1.jpg"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promofix.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                            <div className="item">
                              <img
                                src="./assets/promo2.png"
                                alt=""
                                style={{ width: "28px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-action">
                          <span className="p-qty">
                            <i className="fa-solid fa-check"></i>
                            Sẵn hàng
                          </span>
                          <a href="" className="p-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-product-one-btn">
              <i className="fa-solid fa-angle-left fa-chevron-left"></i>
              <i className="fa-solid fa-angle-right fa-chevron-right"></i>
            </div>
          </div>
        </div> */}
        </div>
      </section>
    </section>
  );
};

export default Home;
{
  /* <div className="slider-container">
              <Slider {...settings}>
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/latop1.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>

                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/laptop2.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>

                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/laptop3.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>
                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/laptop4.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>
                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/laptop5.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>
                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-product-one-content-item">
                    <div className="p-component">
                      <img src="assets/laptop5.jpg" alt="" />
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
                          <p className="p-sku">MÃ: LAHP249</p>
                        </div>
                        <div className="p-info">
                          <p className="p-name">
                            <a href="">
                              Laptop HP Pavilion X360 14-ek2017TU (9Z2V5PA)
                              (Core 5 120U/16GB RAM/512GB SSD/14 FHD Cảm
                              ứng/Bút/Win11/Bạc)
                            </a>
                          </p>
                          <span className="p-mprice">24.899.000</span>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                          <span className="p-price">22.499.000</span>
                        </div>
                        <div className="p-promotion-group">
                          <div className="p-promotion-holder">
                            <div className="attr-item">
                              <span className="text">CPU: Intel Core i5</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">RAM: 16 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">SSD: 512 GB</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">Màn hình: 14 inch</span>
                            </div>
                            <div className="attr-item">
                              <span className="text">
                                VGA: VGA Tích Hợp (Onboard)
                              </span>
                            </div>
                          </div>
                          <div className="p-gift-holder">
                            <div className="p-gift-list">
                              <div className="item">
                                <img
                                  src="./assets/promo1.jpg"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promofix.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                              <div className="item">
                                <img
                                  src="./assets/promo2.png"
                                  alt=""
                                  style={{ width: "28px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-action">
                            <span className="p-qty">
                              <i className="fa-solid fa-check"></i>
                              Sẵn hàng
                            </span>
                            <a href="" className="p-buy">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </Slider>
</div> */
}

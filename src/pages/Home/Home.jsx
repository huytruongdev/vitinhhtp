import ProductList from "./components/ProductList";
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
    speed: 1000,
    autoplaySpeed: 1500,
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
                        <a href="">Latop DellDell</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop HP</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop LenovoLenovo</a>
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
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-brands fa-usb"></i>
                  <a href="" className="text-menu">
                    Phụ kiện Laptop, PC, Mobile
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-computer"></i>
                  <a href="" className="text-menu">
                    PC-Chơi Game, Học Tập
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-computer"></i>
                  <a href="" className="text-menu">
                    PC-Đồ Họa, Thiết Kế
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="li-catcha-menu">
                <div className="nav-menu">
                  <i className="fa-solid fa-computer"></i>
                  <a href="" className="text-menu">
                    PC-Văn Phòng, Làm Việc
                  </a>
                </div>

                <i className="fa-solid fa-angle-right"></i>
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
            {/* <div className="slider-product-one-content-container">
              <div className="slider-product-one-content-container-items">
                <div className="slider-product-one-content-items">
                  <ProductList />
                </div>
              </div>
            </div> */}
            <ProductList />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;

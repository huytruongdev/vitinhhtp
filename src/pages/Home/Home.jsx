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
                        <a href="">Latop Acer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Acer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Acer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Acer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Acer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Acer</a>
                        <i className="fa-solid fa-angle-right"></i>
                      </p>
                      <p>
                        <a href="">Latop Acer</a>
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
                  Chi tiết sản phẩm: Laptop, Macbook, Surface
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
          <div className="home-page-slider-right">
            <div className="home-slider">
              <div className="owl-stage-outer">
                <Slider {...settings}>
                  <div
                  className="owl-item"
                  style={{ "width": "auto", "height":"480" ,"margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item1.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                  className="owl-item"
                  style={{ "width": "atuo", "height":"480" ,"margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item2.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                  className="owl-item"
                  style={{ "width": "atuo", "height":"480" ,"margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item3.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                  className="owl-item"
                  style={{ "width": "atuo", "height":"480" ,"margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item4.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                  className="owl-item"
                  style={{ "width": "atuo", "height":"480" ,"margin-right": "10px" }}
                  >
                    <div className="item-img">
                      <a href="">
                        <img src="/assets/item5.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                  className="owl-item"
                  style={{ "width": "atuo", "height":"480" ,"margin-right": "10px" }}
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

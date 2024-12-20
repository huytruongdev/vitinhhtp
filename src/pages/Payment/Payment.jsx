import React, { useState } from 'react';
import './Payment.scss';
import { Link } from 'react-router-dom';

const HandleSubmit = (e) => {
  e.preventDefault(); // Ngừng hành động mặc định của form nếu có
  alert("Đặt hàng thành công!");
};





const Payment = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, masp: 'PCGM845', name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
    { id: 2, masp: 'CSA5017', name: 'Vỏ Case Asus ROG Hyperion GR701  (Full Tower / Màu Đen )', price: 18909000, quantity: 2, image: 'https://hanoicomputercdn.com/media/product/250_70769_gr701__12_.jpg' },
    { id: 3, masp: 'MOLG253', name: 'Màn hình LG 24MR400-B (23.8 inch/FHD/IPS/100Hz/5ms', price: 2179000, quantity: 4, image: 'https://hanoicomputercdn.com/media/product/250_77685_man_hinh_lg_24mr400_b_850x850_2.jpg' },
    { id: 4, masp: 'PCHA009', name: 'PC HACOM PROJECT ZERO WHITE ( Intel i5 14400F/ VGA RTX 4070 )', price: 39999000, quantity: 2, image: 'https://hanoicomputercdn.com/media/product/250_87631_pc_hacom_project_zero_white_intel_i5_14400f_vga_rtx_4070xx.jpg' },
    { id: 5, masp: 'GPAS001', name: 'Tay cầm chơi game không dây Asus ROG Raikiri Pro', price: 3399000, quantity: 6, image: 'https://hanoicomputercdn.com/media/product/250_85807_rog_raikiri_pro_01.jpg' },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  // Tính tổng số lượng sản phẩm
  const calculateTotalQuantity = () => {
    return cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
  };


  // States for checkbox and selected payment method
  const [isTaxInvoiceVisible, setTaxInvoiceVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('2'); // Default value is '2'

  // Handle checkbox visibility toggle
  const handleCheckboxChange = () => {
    setTaxInvoiceVisible(!isTaxInvoiceVisible);
  };

  // Handle payment method change
  const handlePaymentMethodChange = (e) => {
    const value = e.target.value;
    setSelectedPaymentMethod(value);

    switch (value) {
      case '2':
        alert("Bạn đã chọn phương thức thanh toán khi nhận hàng.");
        break;
      case '8':
        alert("Bạn đã chọn phương thức thanh toán qua chuyển khoản.");
        break;
      case '4':
        alert("Bạn đã chọn phương thức thanh toán qua thẻ quốc tế Visa/Master.");
        break;
      default:
        alert("Vui lòng chọn phương thức thanh toán.");
    }
  };

  // State to handle the visibility of product details
  const [isProductDetailsVisible, setProductDetailsVisible] = useState(false);

  // Function to toggle product details visibility
  const viewMoreProductCart = () => {
    setProductDetailsVisible(!isProductDetailsVisible);


  };

  return (

    <div className="container">
      <div className="bentren">
        <div className="bt1">
          <div className="bt2">
            <div className="bt3">
              <a href="/" className="bt31">
              </a>
              <div className="bt32">
                <div className="bt321">
                  <span className="txt">Giỏ Hàng</span>
                  <div className="bar"></div>
                  <div className="circle">1</div>
                </div>
                <div className="bt321">
                  <span className="txt">Thanh Toán Đặt Hàng</span>
                  <div className="circle">2</div>
                </div>
              </div>
              <div className="phone-cart">
                <span className="icon-c">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span className="txt">
                  <span className="txt1">Mua hàng online</span>
                  <span className="txt2">2222.2222</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="giua">
        <div className="bt2">
          <div className="g1">
            <div className="bentrai">
              <div className="traitren">
                <div className="vientrai">
                  <div className="chutrai">2. Địa chỉ giao hàng</div>
                  <div className="box-address" style={{ display: 'flex' }}>
                    <div className="ba1">
                      {/* Address form fields */}
                      <div className="item-tk">
                        <label>Họ tên</label>
                        <div className="item-tk-ct">
                          <input type="text" name="user_info[name]" className="inputText" placeholder="Họ và tên" />
                        </div>
                      </div>
                      <div className="item-tk">
                        <label>Số điện thoại</label>
                        <div className="item-tk-ct">
                          <input type="text" name="user_info[name]" className="inputText" placeholder="Số điện thoại" />
                        </div>
                      </div>
                      <div className="item-tk">
                        <label>Email</label>
                        <div className="item-tk-ct">
                          <input type="text" name="user_info[name]" className="inputText" placeholder="Email" />
                        </div>
                      </div>
                      <div className="item-tk">
                        <label>Tỉnh/Thành phố</label>
                        <div className="item-tk-ct">
                          <input type="text" name="user_info[name]" className="inputText" placeholder="Tỉnh/Thành phố" />
                        </div>
                      </div>
                      <div className="item-tk">
                        <label>Quận/huyện</label>
                        <div className="item-tk-ct">
                          <input type="text" name="user_info[name]" className="inputText" placeholder="Quận/huyện" />
                        </div>
                      </div>
                      <div className="item-tk">
                        <label>Phường/xã</label>
                        <div className="item-tk-ct">
                          <input type="text" name="user_info[name]" className="inputText" placeholder="Phường/xã" />
                        </div>
                      </div>
                      <div className="item-tk">
                        <label>Địa chỉ</label>
                        <div className="item-tk-ct">
                          <input type="text" name="user_info[name]" className="inputText" placeholder="Địa chỉ" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="title-c-ct">3. Chọn hình thức giao hàng</div>
                  <div className="box-cart-ship-method">
                    <div className="item-tk-ct label-select-radio" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <label>
                        <input type="radio" id="ship-method0" className="check-radio" checked />
                        <span className="radiobtn"></span> Giao hàng tiêu chuẩn
                      </label>
                    </div>
                    <div id="js-item-pro-cart-b3">
                      {/* Cart Item */}
                      {cartItems.map((item) => (
                        <div className="item-pro-cart" key={item.id}>
                          <a className="p-n-img">
                            <img src={item.image} className="p-n-img" data-was-processed="true" />
                          </a>
                          <div className="p-n-info">
                            <a className="p-n-name">{item.name}</a>
                            <div className="p-n-quan">Số lượng : {item.quantity}X</div>
                          </div>
                          <div className="p-n-price">{(item.price).toLocaleString()}₫</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="benphai">
              <div className="phaitren">
                <div className="box-b3-product">
                  <div className="box-b3-product-header">
                    <span>Đơn hàng</span>
                    <a href="/cart" onClick={() => alert('Quay về trang giỏ hàng')}>Sửa</a>
                  </div>
                  <div className="box-b3-product-list">
                    <div className="title-n-b3-p">
                      <span>{calculateTotalQuantity()}</span> sản phẩm
                      <a href="javascript:;" onClick={viewMoreProductCart}>
                        {isProductDetailsVisible ? (
                          <> " Ẩn thông tin "<i className="fas fa-sort-up-down"></i></>
                        ) : (
                          <> " Xem thông tin"
                            <i className="fas fa-sort-up-up">
                            </i></>
                        )}
                      </a>
                    </div>
                    {isProductDetailsVisible && (
                      <div className="list-b3-p" id="js-list-b3-p" style={{ display: 'block' }}>
                        {/* Cart Item */}
                        {cartItems.map((item) => (
                          <div className="item-n" key={item.id}>
                            <span className="list-b3-p-quan">{item.quantity}x</span>
                            <a className="list-b3-p-name" >
                              {item.name}
                            </a>
                            <span className="list-b3-p-price">{((item.price * item.quantity).toLocaleString())}₫</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="cart-b3-total-price">
                      <span>Thành tiền</span>
                      <b>
                        <span className="total-cart-payment">{calculateTotal().toLocaleString()}₫</span>
                      </b>
                    </div>
                    <div className="cart-b3-vat">(Đã bao gồm VAT nếu có)</div>
                  </div>
                </div>

                <div className="title-c-ct" style={{ marginTop: '15px' }}>Chọn hình thức thanh toán</div>
                <div className="box-cart-pay-method">
                  <div className="item-tk-ct label-select-radio">
                    <label>
                      <input type="radio" name="pay_method" value="2" className="check-radio" checked={selectedPaymentMethod === '2'} onChange={handlePaymentMethodChange} />
                      <span className="radiobtn"></span> Thanh toán khi nhận hàng
                    </label>
                  </div>

                  <div className="item-tk-ct label-select-radio">
                    <label>
                      <input type="radio" name="pay_method" value="8" className="check-radio" checked={selectedPaymentMethod === '8'} onChange={handlePaymentMethodChange} />
                      <span className="radiobtn"></span> Thanh toán bằng chuyển khoản
                    </label>
                  </div>

                  <div className="item-tk-ct label-select-radio">
                    <label>
                      <input type="radio" name="pay_method" value="4" className="check-radio" checked={selectedPaymentMethod === '4'} onChange={handlePaymentMethodChange} />
                      <span className="radiobtn"></span> Thanh toán bằng thẻ quốc tế Visa, Master
                    </label>
                  </div>
                </div>

                <div className="box-cart-bill">
                  <div class="quet-qr">VUI LÒNG QUÉT MÃ BÊN DƯỚI ĐỂ THANH TOÁN CHUYỂN KHOẢN</div>
                  <div class="vietqr-image-container">
                    <div class="vietqr-image"><img src="https://hanoicomputercdn.com/media/lib/25-10-2022/1664174849366-qrvcb.png" class="loading" data-was-processed="true" /></div>
                  </div>
                  <label>
                    <div className="checkbox">
                      <input type="checkbox" id="chkTaxInvoice" onChange={handleCheckboxChange} />
                      <span className="icon"></span>
                      Xuất hóa đơn công ty
                    </div>
                  </label>
                  {isTaxInvoiceVisible && (
                    <div id="ajxTaxInvoice" className="box-add-new-address-cart" style={{ display: 'block' }}>
                      <div className="tax-cart-ct">
                        <div className="item-tk">
                          <label>Tên công ty</label>
                          <div className="item-tk-ct">
                            <input type="text" className="inputText" placeholder="Ít nhất 2 từ" />
                          </div>
                        </div>
                        <div className="item-tk">
                          <label>Mã số thuế</label>
                          <div className="item-tk-ct">
                            <input type="text" className="inputText" placeholder="Mã số thuế" />
                          </div>
                        </div>
                        <div className="item-tk">
                          <label>Địa chỉ</label>
                          <div className="item-tk-ct">
                            <input type="text" className="inputText" placeholder="Địa chỉ" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <textarea
                    placeholder="Ghi chú"
                    style={{ height: '60px', width: '100%', marginBottom: '10px', padding: '5px 10px', border: 'solid 1px #ccc', borderRadius: '5px' }}
                  />

                  <div className="list-button-cart">
                    <div className="new-cart-button">
                      <button type="submit" className="button" style={{ backgroundColor: 'red' }} onClick={HandleSubmit}>Đặt hàng</button>
                      <button className="button" href="/" style={{ backgroundColor: 'blue' }}>Mua trả góp</button>
                      <Link href="/" className="button-link">
                        <button
                          className="button"
                          style={{ backgroundColor: '#fea23b' }}
                        >
                          Chọn thêm sản phẩm
                        </button>
                      </Link>
                      <Link to="/cart" className="button-link">
                        <button
                          className="button"
                          style={{ backgroundColor: '#243a76' }}
                        >
                          Quay lại giỏ hàng
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Payment;





















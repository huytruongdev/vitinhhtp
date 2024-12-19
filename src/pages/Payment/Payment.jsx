import React, { useState } from 'react';
import './Payment.scss';

const HandleSubmit = (e) => {
  e.preventDefault(); // Ngừng hành động mặc định của form nếu có
  alert("Đặt hàng thành công!");
};

const Payment = () => {
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
    <div>
      <div className="container">
        <div className="bentren">
          <div className="bt1">
            <div className="bt2">
              <div className="bt3">
                <a href="/" className="bt31">
                  <img src="/assets/trans_bg.png" alt="hanoicomputer" />
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
                      <div className="item-tk-ct label-select-radio" style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <label>
                          <input type="radio" id="ship-method0" className="check-radio" checked />
                          <span className="radiobtn"></span> Giao hàng tiêu chuẩn
                        </label>
                      </div>
                      <div id="js-item-pro-cart-b3">
                                    <div class="item-pro-cart">
                                        <a href="/pc-hacom-granite-ridge-002-amd-ryzen-7-9800x3d-vga-rtx-4070s" class="p-n-img">
                                           <img src="https://hanoicomputercdn.com/media/product/250_87632_pc_hacom_granite_ridge_002_amd_ryzen_7_9800x3d_vga_rtx_4070s.jpg" alt="PC HACOM Granite Ridge 002 (AMD Ryzen 7 9800X3D/VGA RTX 4070S )" class="loading" data-was-processed="true"/>
                                 </a>
                                         <div class="p-n-info">
                                            <a href="/pc-hacom-granite-ridge-002-amd-ryzen-7-9800x3d-vga-rtx-4070s" class="p-n-name">PC HACOM Granite Ridge 002 (AMD Ryzen 7 9800X3D/VGA RTX 4070S )</a>
                                        <div class="p-n-quan">SL: x1</div>
                                        </div> 
                                        <div class="p-n-price">53,990,000 ₫</div>
                                    </div>
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
                        <span>1</span> sản phẩm
                        <a href="javascript:;" onClick={viewMoreProductCart}>
                          {isProductDetailsVisible ? (
                            <>" Ẩn thông tin "<i className="fas fa-sort-up-down"></i></>
                           ):(
                            <>" Xem thông tin"
                            <i className="fas fa-sort-up-up">
                              </i></>
                            )}
                        </a>
                      </div>
                      

                      {isProductDetailsVisible && (
                        <div className="list-b3-p" id="js-list-b3-p" style={{display: 'block'}}>
                          <div className="item-n">
                            <span className="list-b3-p-quan">1x</span>
                            <a className="list-b3-p-name" href="/pc-hacom-granite-ridge-002-amd-ryzen-7-9800x3d-vga-rtx-4070s">
                              PC HACOM Granite Ridge 002 (AMD Ryzen 7 9800X3D/VGA RTX 4070S)
                            </a>
                            <span className="list-b3-p-price">53.990.000₫</span>
                          </div>
                        </div>
                      )}
                      <div className="cart-b3-total-price">
                        <span>Thành tiền</span>
                        <b>
                          <span className="total-cart-payment">53.990.000₫</span>
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
                    <div class="vietqr-image"><img src="https://hanoicomputercdn.com/media/lib/25-10-2022/1664174849366-qrvcb.png" class="loading" data-was-processed="true"/></div>
                    </div>
                    <label>
                      <div className="checkbox">
                        <input type="checkbox" id="chkTaxInvoice" onChange={handleCheckboxChange} />
                        <span className="icon"></span>
                        Xuất hóa đơn công ty
                      </div>
                    </label>
                    {isTaxInvoiceVisible && (
                      <div id="ajxTaxInvoice" className="box-add-new-address-cart" style={{display: 'block'}}>
                        <div className="tax-cart-ct">
                          <div className="item-tk">
                            <label>Tên công ty</label>
                            <div className="item-tk-ct">
                              <input type="text" className="inputText" placeholder="ít nhất 2 từ" />
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
                        <a href="/home" className="button-link">
                          <button
                            className="button"
                            style={{ backgroundColor: '#fea23b' }}
                          >
                            Chọn thêm sản phẩm
                          </button>
                        </a>
                        <a href="/cart" className="button-link">
                          <button
                            className="button"
                            style={{ backgroundColor: '#243a76' }}
                            >
                            Quay lại giỏ hàng
                          </button>
                        </a>
                      </div>
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





















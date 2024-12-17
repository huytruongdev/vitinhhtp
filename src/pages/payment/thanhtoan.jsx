// import React from 'react'
// import './payment.scss'

// const payment = () => {
//     return (
// <div>
//     <div class="container">
//         <div class="bentren">
//             <div class="bt1">
//                 <div class="bt2">
//                     <div class="bt3">
//                         <a href="/" class="bt31">
//                             <img src="/trans_bg.webp" alt="hanoicomputer"/>
//                         </a>
//                         <div class="bt32">
//                             <div class="bt321">
//                                 <span class="txt">Giỏ Hàng</span>
//                                 <div class="bar"></div>
//                                 <div class="circle">1</div>
//                             </div>
//                             <div class="bt321">
//                                 <span class="txt">Thanh Toán Đặt Hàng</span>
//                                 <div class="circle">2</div>
//                             </div>
//                         </div>
//                         <div class="phone-cart">
//                                 <span class="icon-c">
//                                     <i class="fa-solid fa-phone"></i>
//                                 </span>
//                                 <span class="txt">
//                                     <span class="txt1">Mua hàng online</span>
//                                     <span class="txt2">2222.2222</span>
//                                 </span>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="giua">
//             <div class="bt2">
//                 <div class="g1">
//                     <div class="bentrai">
//                         <div class="traitren">
//                             <div class="vientrai">
//                                 <div class="chutrai">2. Địa chỉ giao hàng</div>
//                                 <div class="box-address" style="display: block;">
//                                     <div class="ba1">
//                                         <div class="item-tk">
//                                             <label>Họ tên</label>
//                                             <div class="item-tk-ct">
//                                                 <input type="text" name="user_info[name]" id="buyer_name" class="inputText" placeholder="Họ và tên"/>
//                                             </div>
//                                         </div>
//                                         <div class="item-tk">
//                                             <label>Số điện thoại</label>
//                                             <div class="item-tk-ct">
//                                                 <input type="text" name="user_info[name]" id="buyer_name" class="inputText" placeholder="Số điện thoại"/>
//                                             </div>
//                                         </div>
//                                         <div class="item-tk">
//                                             <label>Email</label>
//                                             <div class="item-tk-ct">
//                                                 <input type="text" name="user_info[name]" id="buyer_name" class="inputText" placeholder="Email"/>
//                                             </div>
//                                         </div>
//                                         <div class="item-tk">
//                                             <label>Tỉnh/Thành phố</label>
//                                             <div class="item-tk-ct">
//                                                 <input type="text" name="user_info[name]" id="buyer_name" class="inputText" placeholder="Tỉnh/Thành phố"/>
//                                             </div>
//                                         </div>
//                                         <div class="item-tk">
//                                             <label>Quận/huyện</label>
//                                             <div class="item-tk-ct">
//                                                 <input type="text" name="user_info[name]" id="buyer_name" class="inputText" placeholder="Quận/huyện"/>
//                                             </div>
//                                         </div>
//                                         <div class="item-tk">
//                                             <label>Phường/xã</label>
//                                             <div class="item-tk-ct">
//                                                 <input type="text" name="user_info[name]" id="buyer_name" class="inputText" placeholder="Phường/xã"/>
//                                             </div>
//                                         </div>
//                                         <div class="item-tk">
//                                             <label>Địa chỉ</label>
//                                             <div class="item-tk-ct">
//                                                 <input type="text" name="user_info[name]" id="buyer_name" class="inputText" placeholder="Địa chỉ"/>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             <div class="title-c-ct">3. Chọn hình thức giao hàng</div>
//                             <div class="box-cart-ship-method">
//                                 <div class="item-tk-ct label-select-radio" style="flex-direction: column;align-items: flex-start; margin-bottom: 20px;">
//                                     <label for="ship-method0" style="margin-bottom: 5px;margin-right: 0px;">
//                                         <input type="radio" id="ship-method0" class="check-radio" checked=""/>
//                                         <span class="radiobtn"></span> Giao hàng tiêu chuẩn
//                                     </label>
//                                 </div>
//                                 <div id="js-item-pro-cart-b3">
//                                     <div class="item-pro-cart">
//                                         <a href="/pc-hacom-granite-ridge-002-amd-ryzen-7-9800x3d-vga-rtx-4070s" class="p-n-img">
//                                             <img src="https://hanoicomputercdn.com/media/product/250_87632_pc_hacom_granite_ridge_002_amd_ryzen_7_9800x3d_vga_rtx_4070s.jpg" alt="PC HACOM Granite Ridge 002 (AMD Ryzen 7 9800X3D/VGA RTX 4070S )" class="loading" data-was-processed="true"/>
//                                         </a>
//                                         <div class="p-n-info">
//                                             <a href="/pc-hacom-granite-ridge-002-amd-ryzen-7-9800x3d-vga-rtx-4070s" class="p-n-name">PC HACOM Granite Ridge 002 (AMD Ryzen 7 9800X3D/VGA RTX 4070S )</a>
//                                         <div class="p-n-quan">SL: x1</div>
//                                         </div> 
//                                         <div class="p-n-price">53,990,000 ₫</div>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                     </div>
//                     <div class="benphai">
//                         <div class="phaitren" style="float: left; z-index: auto; position: static; top: auto; box-sizing: border-box;">
//                             <div class="box-b3-product">
//                                 <div class="box-b3-product-header">
//                                     <span>Đơn hàng</span>
//                                     <a href="javascript:;" onclick="gotoStep1Cart()">Sửa</a>
//                                 </div>
//                                 <div class="box-b3-product-list">
//                                     <div class="title-n-b3-p"><span id="js-count-pro-b3-right">1</span>
//                                         sản phẩm
//                                         <a href="javascript:;" onclick="viewMoreB3ProductCart()">"Xem thông tin"
//                                             <i class="fas fa-sort-down">    
//                                             </i>
//                                         </a>
//                                     </div>
//                                     <div class="list-b3-p" id="js-list-b3-p">
//                                         <div class="item-n">
//                                             <span class="list-b3-p-quan">1x</span>
//                                             <a class="list-b3-p-name" href="/pc-hacom-granite-ridge-002-amd-ryzen-7-9800x3d-vga-rtx-4070s">PC HACOM Granite Ridge 002 (AMD Ryzen 7 9800X3D/VGA RTX 4070S )                         
//                                             </a>
//                                             <span class="list-b3-p-price">53.990.000₫</span>
//                                         </div>
//                                     </div>
//                                     <div class="list-b3-p" id="js-list-b3-p" style="display: none;">
//                                         <div class="item-n">
//                                             <span class="list-b3-p-quan">1x</span>
//                                             <a class="list-b3-p-name" href="/pc-hacom-granite-ridge-002-amd-ryzen-7-9800x3d-vga-rtx-4070s">PC HACOM Granite Ridge 002 (AMD Ryzen 7 9800X3D/VGA RTX 4070S )</a>
//                                             <span class="list-b3-p-price">53.990.000₫</span>
//                                         </div>
//                                     </div>
//                                     <div class="cart-b3-total-price">
//                                         <span>Thành tiền</span>
//                                         <b>
//                                             <span class="total-cart-payment">53.990.000₫</span>
//                                         </b>
//                                     </div> 
//                                     <div class="cart-b3-vat">(Đã bao gồm VAT nếu có)</div>
//                                 </div>
//                             </div>
//                             <div class="title-c-ct" style="margin-top: 15px;">Chọn hình thức thanh toán</div>
//                             <div class="box-cart-pay-method">
                                
//                                 <div class="item-tk-ct label-select-radio">
//                                     <label for="pay-method2">
//                                         <input type="radio" name="pay_method" id="pay-method2" value="2" class="check-radio" checked=""/>
//                                         <span class="radiobtn"></span> <span class="img-pay img-pay1"></span> <span>Thanh toán khi nhận hàng</span>
//                                     </label>
//                                 </div>
                                
//                                 <div class="item-tk-ct label-select-radio">
//                                     <label for="pay-method8">
//                                         <input type="radio" name="pay_method" id="pay-method8" value="8" class="check-radio"/>
//                                         <span class="radiobtn"></span> <span class="img-pay img-pay2"></span> <span>Thanh toán bằng chuyển khoản</span>
//                                     </label>
//                                 </div>                   
                                
//                                 <div class="item-tk-ct label-select-radio">
//                                     <label for="pay-method4">
//                                         <input type="radio" name="pay_method" id="pay-method4" value="4" class="check-radio"/>
//                                         <span class="radiobtn" name></span> <span class="img-pay img-pay3"></span> <span>Thanh toán bằng thẻ quốc tế Visa, Master</span>
//                                     </label>
//                                 </div>
//                             </div>
//                             <div class="box-cart-bill">
//                                 <div class="quet-qr" style="font-size: 12px;">VUI LÒNG QUÉT MÃ BÊN DƯỚI ĐỂ THANH TOÁN CHUYỂN KHOẢN</div>
//                                 <div class="vietqr-image-container">
//                                     <div class="vietqr-image"><img src="https://hanoicomputercdn.com/media/lib/25-10-2022/1664174849366-qrvcb.png" class="loading" data-was-processed="true"/></div>
//                                 </div>
//                                 <label class="active">
//                                     <div class="checkbox">
//                                         <input type="checkbox" id="chkTaxInvoice" name="chkTaxInvoice"/><span class="icon"></span>
//                                         Xuất hóa đơn công ty
//                                     </div>
//                                 </label>
//                                 <div id="ajxTaxInvoice" class="box-add-new-address-cart" style="display: none;">
//                                         <div class="tax-cart-ct">
//                                             <div class="item-tk">
//                                                 <label>Tên công ty</label>
//                                                 <div class="item-tk-ct">
//                                                     <input type="text" class="inputText" id="txtTaxName" name="user_info[tax_company]" placeholder="ít nhất 2 từ"/>
//                                                 </div>
//                                             </div>
//                                             <div class="item-tk">
//                                                 <label>Mã số thuế</label>
//                                                 <div class="item-tk-ct">
//                                                     <input type="text" class="inputText" id="txtTaxCode" name="user_info[tax_code]" placeholder="Mã số thuế"/>
//                                                 </div>
//                                             </div>
//                                             <div class="item-tk">
//                                                 <label>Địa chỉ</label>
//                                                 <div class="item-tk-ct">
//                                                     <input type="text" class="inputText" id="txtTaxAddress" name="user_info[tax_address]" placeholder="Địa chỉ"/>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                 </div>
//                                 <textarea name="user_info[note]" id="buyer_note" style="height: 60px;width: 100%;float: left;margin-bottom: 10px;padding: 5px 10px;border: solid 1px #ccc;border-radius: 5px;" placeholder="Ghi chú"></textarea>
//                                 <div class="list-button-cart">
//                                      <div class="new-cart-button">
//                                         <button type="subbmit" class="button" style="background-color: red;">Đặt hàng</button>
//                                         <button class="button" href="/" style="background-color: blue;">Mua trả góp</button> 
//                                         <button class="button" href="/" style="background-color: #fea23b;">Chọn thêm sản phẩm</button>
//                                         <button class="button" href="/" style="background-color: #243a76;">Quay lại giỏ hàng</button>
                                        
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//             </div>
//         </div>
//     </div>
//     </div>
    
//     <script>
        
//         // Hàm thay đổi trạng thái hiển thị của phần tử #ajxTaxInvoice khi checkbox thay đổi
//         document.getElementById('chkTaxInvoice').addEventListener('change', function() {
//             var taxInvoiceSection = document.getElementById('ajxTaxInvoice');
//             if (this.checked) {
//                 // Nếu checkbox được chọn, hiển thị phần tử
//                 taxInvoiceSection.style.display = 'block'
            
//             } 
//             else {
//                 // Nếu checkbox không được chọn, ẩn phần tử
//                 taxInvoiceSection.style.display = 'none'
//             }
//         });
//         // Hàm xử lý khi chọn phương thức thanh toán
//     function handlePaymentMethodChange() {
//         // Lấy giá trị của phương thức thanh toán đã chọn
//         var selectedPaymentMethod = document.querySelector('input[name="pay_method"]:checked').value;
        
//         // Thực hiện hành động tùy theo phương thức thanh toán đã chọn
//         switch(selectedPaymentMethod) {
//             case '2':
//                 alert("Bạn đã chọn phương thức thanh toán khi nhận hàng.");
//                 break;
//             case '8':
//                 alert("Bạn đã chọn phương thức thanh toán qua chuyển khoản.");
//                 break;
//             case '4':
//                 alert("Bạn đã chọn phương thức thanh toán qua thẻ quốc tế Visa/Master.");
//                 break;
//             default:
//                 alert("Vui lòng chọn phương thức thanh toán.");
//         }
//     }

//     // Gắn sự kiện thay đổi cho các radio button
//     document.querySelectorAll('input[name="pay_method"]').forEach(function(element) {
//         element.addEventListener('change', handlePaymentMethodChange);
//     });
           
//     // Hàm thay đổi trạng thái hiển thị của phần tử #ajxTaxInvoice khi checkbox thay đổi
//     document.getElementById('chkTaxInvoice').addEventListener('change', function() {
//             var taxInvoiceSection = document.getElementById('ajxTaxInvoice');
//             if (this.checked) {
//                 // Nếu checkbox được chọn, hiển thị phần tử
//                 taxInvoiceSection.style.display = 'block';
//             } else {
//                 // Nếu checkbox không được chọn, ẩn phần tử
//                 taxInvoiceSection.style.display = 'none';
//             }
//         });
    

//                 // Function to toggle the visibility of the "view more" product details
//                 function viewMoreB3ProductCart() {
//             var productList = document.getElementById('js-list-b3-p');
//             var viewMoreText = document.querySelector('.title-n-b3-p a');
//             if (productList.style.display === 'none' || productList.style.display === '') {
//                 // Show more product details
//                 productList.style.display = 'block';
//                 viewMoreText.innerHTML = '"Ẩn thông tin" <i class="fas fa-sort-up"></i>';
//             } else {
//                 // Hide product details
//                 productList.style.display = 'none';
//                 viewMoreText.innerHTML = '"Xem thông tin" <i class="fas fa-sort-down"></i>';
//             }
//         }
//     </script>
// </div>    
//     )
// }

// export default payment


import React, { useState } from 'react';
import './payment.scss';

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

  // Toggle "view more" product details
  const [isProductDetailsVisible, setProductDetailsVisible] = useState(false);

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
                  <img src="/trans_bg.webp" alt="hanoicomputer" />
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
                    <div className="box-address" style={{ display: 'block' }}>
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="benphai">
                <div className="phaitren">
                  <div className="box-b3-product">
                    <div className="box-b3-product-header">
                      <span>Đơn hàng</span>
                      <a href="javascript:;" onClick={() => alert('Sửa')}>Sửa</a>
                    </div>
                    <div className="box-b3-product-list">
                      <div className="title-n-b3-p">
                        <span>1</span> sản phẩm
                        <a href="javascript:;" onClick={viewMoreProductCart}>
                          {isProductDetailsVisible ? '"Ẩn thông tin" <i className="fas fa-sort-up"></i>' : '"Xem thông tin" <i className="fas fa-sort-down"></i>'}
                        </a>
                      </div>

                      {isProductDetailsVisible && (
                        <div className="list-b3-p" id="js-list-b3-p">
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
                    <label>
                      <div className="checkbox">
                        <input type="checkbox" id="chkTaxInvoice" onChange={handleCheckboxChange} />
                        <span className="icon"></span>
                        Xuất hóa đơn công ty
                      </div>
                    </label>
                    {isTaxInvoiceVisible && (
                      <div id="ajxTaxInvoice" className="box-add-new-address-cart">
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
                        <button type="submit" className="button" style={{ backgroundColor: 'red' }}>Đặt hàng</button>
                        <button className="button" href="/" style={{ backgroundColor: 'blue' }}>Mua trả góp</button>
                        <button className="button" href="/" style={{ backgroundColor: '#fea23b' }}>Chọn thêm sản phẩm</button>
                        <button className="button" href="/" style={{ backgroundColor: '#243a76' }}>Quay lại giỏ hàng</button>
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

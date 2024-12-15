import React from 'react'
import './Cart.scss'

const Cart = () => {
    return (
        <div>
               <div class="body-card" >
        <div class="card"  >
           <div class="container">
            <div class="breadcrumb mb-0 p-0">
                <ul class="list-unstyled m-0" >
                    <li >
                        <a href="/" itemprop="item">
                            <span itemprop="name">Trang chủ</span>
                        </a>
                        <meta itemprop="position" content="1"/>
                    </li>
                    <li itemprop="itemListElement" >
                        <a href="/" itemprop="item">
                            <span>
                                <span itemprop="name" class="">Giỏ hàng của bạn</span>
                            </span>
                        </a>
                        <meta itemprop="position" content="2"/>
                    </li>
                </ul>
            </div>
            <div class="title-n">Giỏ hàng</div>
            <div class="noidung">
                <div class="bentrai">
                    <div class="new-cart-items-row">
                        <div class="cart-col-product">
                            <div class="fake-checkbox active" onclick="checkAllItemProductCart(this)" id="js-check-cart-all-item"></div>
                                <span>
                                    Tất cả (<span class="cart_counter_new">0</span>"sản phẩm")
                                </span>
                            </div>
                        <div class="cart-col-price">Đơn giá</div>
                        <div class="cart-col-quantity">Số lượng</div>
                        <div class="cart-col-total-price">Thành tiền</div>
                        <div class="cart-col-delete">
                            <a class="new-cart-del-shopping-btn new-2021" id="clear-cart-button" href="javascript:void(0);" onclick="clearCart()">
                                <img title="Xóa toàn bộ giỏ hàng" src="https://hacom.vn/template/july_2021/images/trash.svg" class="loading" data-was-processed="true"/>
                            </a>
                        </div>                        
                    </div>
                    <div class="cart-list-item">
                        <div class="new-cart-items-row">
                            <div class="cart-col-product">
                                <div class="canh_giua">
                                    <input type="checkbox" class="product-checkbox" onclick="updateTotalPrice()"/>
                                </div>
                                <img  class="cart-n-p-img" src="https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg" alt="HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)"/>
                                <div class="cart-n-p-info">
                                <a class="cart_sku">
                                    HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W) 
                                </a>
                                    <span class="cart-n-p-sku">
                                        Mã SP: 
                                        <b>PCGM845</b>
                                    </span>
                                </div>
                            </div>
                            <div class="cart-col-price">
                                <span class="new-cart-items-price js-show-buy-price" data-price="77989000">
                                    77,989,000 ₫
                                </span>
                            </div>
                            <div class="cart-col-quantity">
                                <span class="new-cart-quantity">
                                    <a href="javascript:void(0);" class="minor quantity-change" data-value="-1" title="Trừ" onclick="updateQuantity(this, -1)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="hnc-svg-icon">
                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                        </svg>
                                    </a>
                                    <input class="buy" value="1" size="5" data-stock="998" id="quantity-1"/>
                                    <a href="javascript:void(0);" class="add quantity-change" data-value="1" title="Thêm" onclick="updateQuantity(this, 1)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="hnc-svg-icon">
                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <div class="cart-col-total-price">
                                <b class="total-item-price" id="total-price-1">77,989,000</b><b style={{'font-size': '17px','color': 'black'}} >₫</b>
                            </div>
                            <div class="cart-col-delete">
                                <a class="new-cart-del-shopping-btn new-2021" onclick="removeItem(this)">
                                    <img title="Xóa sản phẩm" src="https://hacom.vn/template/july_2021/images/trash.svg"/>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="cart-list-item">
                        <div class="new-cart-items-row">
                            <div class="cart-col-product">
                                <div class="canh_giua">
                                    <input type="checkbox" class="product-checkbox" onclick="updateTotalPrice()"/>
                                </div>
                                <img  class="cart-n-p-img" src="https://hanoicomputercdn.com/media/product/250_87632_pc_hacom_granite_ridge_002_amd_ryzen_7_9800x3d_vga_rtx_4070s.jpg" alt="HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)"/>
                                <div class="cart-n-p-info">
                                <a class="cart_sku">
                                    PC HACOM Granite Ridge 002 (AMD Ryzen 7 9800X3D/VGA RTX 4070S )
                                 </a>
                                    <span class="cart-n-p-sku">
                                        Mã SP: 
                                        <b>PCHA010</b>
                                    </span>
                                </div>
                            </div>
                            <div class="cart-col-price">
                                <span class="new-cart-items-price js-show-buy-price" data-price="53990000">
                                    53,990,000 ₫
                                </span>
                            </div>
                            <div class="cart-col-quantity">
                                <span class="new-cart-quantity">
                                    <a href="javascript:void(0);" class="minor quantity-change" data-value="-1" title="Trừ" onclick="updateQuantity(this, -1)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="hnc-svg-icon">
                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                        </svg>
                                    </a>
                                    <input class="buy" value="1" size="5" data-stock="998" id="quantity-1"/>
                                    <a href="javascript:void(0);" class="add quantity-change" data-value="1" title="Thêm" onclick="updateQuantity(this, 1)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="hnc-svg-icon">
                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <div class="cart-col-total-price">
                                <b class="total-item-price" id="total-price-1">53,990,000</b><b style={{'font-size': '17px','color': 'black'}} >₫</b>
                            </div>
                            <div class="cart-col-delete">
                                <a class="new-cart-del-shopping-btn new-2021" onclick="removeItem(this)">
                                    <img title="Xóa sản phẩm" src="https://hacom.vn/template/july_2021/images/trash.svg"/>
                                </a>
                            </div>
                            
                        </div>
                    </div> 
                    <div class="cart-list-item">
                        <div class="new-cart-items-row">
                            <div class="cart-col-product">
                                <div class="canh_giua">
                                    <input type="checkbox" class="product-checkbox" onclick="updateTotalPrice()"/>
                                </div>
                                <img  class="cart-n-p-img" src="https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg" alt="HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)"/>
                                <div class="cart-n-p-info">
                                <a class="cart_sku">
                                    HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W) 
                                </a>
                                    <span class="cart-n-p-sku">
                                        Mã SP: 
                                        <b>PCGM845</b>
                                    </span>
                                </div>
                            </div>
                            <div class="cart-col-price">
                                <span class="new-cart-items-price js-show-buy-price" data-price="77989000">
                                    77,989,000 ₫
                                </span>
                            </div>
                            <div class="cart-col-quantity">
                                <span class="new-cart-quantity">
                                    <a href="javascript:void(0);" class="minor quantity-change" data-value="-1" title="Trừ" onclick="updateQuantity(this, -1)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="hnc-svg-icon">
                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                        </svg>
                                    </a>
                                    <input class="buy" value="1" size="5" data-stock="998" id="quantity-1"/>
                                    <a href="javascript:void(0);" class="add quantity-change" data-value="1" title="Thêm" onclick="updateQuantity(this, 1)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="hnc-svg-icon">
                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <div class="cart-col-total-price">
                                <b class="total-item-price" id="total-price-1">77,989,000</b><b style={{'font-size': '17px','color': 'black'}} >₫</b>
                            </div>
                            <div class="cart-col-delete">
                                <a class="new-cart-del-shopping-btn new-2021" onclick="removeItem(this)">
                                    <img title="Xóa sản phẩm" src="https://hacom.vn/template/july_2021/images/trash.svg"/>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="cart-list-item">
                        <div class="new-cart-items-row">
                            <div class="cart-col-product">
                                <div class="canh_giua">
                                    <input type="checkbox" class="product-checkbox" onclick="updateTotalPrice()"/>
                                </div>
                                <img  class="cart-n-p-img" src="https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg" alt="HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)"/>
                                <div class="cart-n-p-info">
                                <a class="cart_sku">
                                    HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W) 
                                </a>
                                    <span class="cart-n-p-sku">
                                        Mã SP: 
                                        <b>PCGM845</b>
                                    </span>
                                </div>
                            </div>
                            <div class="cart-col-price">
                                <span class="new-cart-items-price js-show-buy-price" data-price="77989000">
                                    77,989,000 ₫
                                </span>
                            </div>
                            <div class="cart-col-quantity">
                                <span class="new-cart-quantity">
                                    <a href="javascript:void(0);" class="minor quantity-change" data-value="-1" title="Trừ" onclick="updateQuantity(this, -1)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="hnc-svg-icon">
                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                        </svg>
                                    </a>
                                    <input class="buy" value="1" size="5" data-stock="998" id="quantity-1"/>
                                    <a href="javascript:void(0);" class="add quantity-change" data-value="1" title="Thêm" onclick="updateQuantity(this, 1)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="hnc-svg-icon">
                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <div class="cart-col-total-price">
                                <b class="total-item-price" id="total-price-1">77,989,000</b><b style={{'font-size': '17px','color': 'black'}} >₫</b>
                            </div>
                            <div class="cart-col-delete">
                                <a class="new-cart-del-shopping-btn new-2021" onclick="removeItem(this)">
                                    <img title="Xóa sản phẩm" src="https://hacom.vn/template/july_2021/images/trash.svg"/>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="cart-list-item">
                        <div class="new-cart-items-row">
                            <div class="cart-col-product">
                                <div class="canh_giua">
                                    <input type="checkbox" class="product-checkbox" onclick="updateTotalPrice()"/>
                                </div>
                                <img  class="cart-n-p-img" src="https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg" alt="HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)"/>
                                <div class="cart-n-p-info">
                                <a class="cart_sku">
                                    HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W) 
                                </a>
                                    <span class="cart-n-p-sku">
                                        Mã SP: 
                                        <b>PCGM845</b>
                                    </span>
                                </div>
                            </div>
                            <div class="cart-col-price">
                                <span class="new-cart-items-price js-show-buy-price" data-price="77989000">
                                    77,989,000 ₫
                                </span>
                            </div>
                            <div class="cart-col-quantity">
                                <span class="new-cart-quantity">
                                    <a href="javascript:void(0);" class="minor quantity-change" data-value="-1" title="Trừ" onclick="updateQuantity(this, -1)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="hnc-svg-icon">
                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                        </svg>
                                    </a>
                                    <input class="buy" value="1" size="5" data-stock="998" id="quantity-1"/>
                                    <a href="javascript:void(0);" class="add quantity-change" data-value="1" title="Thêm" onclick="updateQuantity(this, 1)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="hnc-svg-icon">
                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <div class="cart-col-total-price">
                                <b class="total-item-price" id="total-price-1">77,989,000</b><b style={{'font-size': '17px','color': 'black'}} >₫</b>
                            </div>
                            <div class="cart-col-delete">
                                <a class="new-cart-del-shopping-btn new-2021" onclick="removeItem(this)">
                                    <img title="Xóa sản phẩm" src="https://hacom.vn/template/july_2021/images/trash.svg"/>
                                </a>
                            </div>
                            
                        </div>
                    </div>  
                </div>
                <div class="benphai">
                    <div class="box-cart-address">
                        <div class="voucher">
                            <div class="voucher-ct">
                                <input type="text" class="txt" id="discount_code" name="coupon_code" value="" placeholder="Mã giảm giá/ quà tặng"/>
                                <a href="javascript:void(0);" class="button-check-discount"  onclick="applyDiscount()">Áp dụng</a>
                            </div>
                            <span id="js-voucher-message"></span>
                        </div>
                        
                    </div>
                    <div class="box-cart-total-price">
                        <p>
                            <span>Tạm tính</span>
                          <span class="total-cart-price">0₫</span>
                        </p>
                        <p>
                            <span>Giảm giá</span>
                            <span id="price-discount" >0₫</span>
                        </p>
                        <p>
                            <span>Tổng tiền</span>
                            <span class="red-b total-cart-payment">0₫</span>
                        </p>
                        
                        <span class="cart-vat">(Đã bao gồm VAT nếu có)</span>
                    </div>
                    <button class="button-buy-submit-cart" onclick="gotoCartStep3();">Xác Nhận Thanh toán</button>
                </div>

                </div>
            </div>
           </div> 
    </div>    
        </div>
    )
}

export default Cart


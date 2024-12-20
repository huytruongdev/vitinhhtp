import { useState } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
const Cart = () => {
    // Dữ liệu giỏ hàng (sản phẩm, giá, số lượng)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            masp: "PCGM845",
            name: "HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)",
            price: 77989000,
            quantity: 1,
            image:
                "https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg",
        },
        {
            id: 2,
            masp: "CSA5017",
            name: "Vỏ Case Asus ROG Hyperion GR701  (Full Tower / Màu Đen )",
            price: 18909000,
            quantity: 2,
            image:
                "https://hanoicomputercdn.com/media/product/250_70769_gr701__12_.jpg",
        },
        {
            id: 3,
            masp: "MOLG253",
            name: "Màn hình LG 24MR400-B (23.8 inch/FHD/IPS/100Hz/5ms",
            price: 2179000,
            quantity: 4,
            image:
                "https://hanoicomputercdn.com/media/product/250_77685_man_hinh_lg_24mr400_b_850x850_2.jpg",
        },
        {
            id: 4,
            masp: "PCHA009",
            name: "PC HACOM PROJECT ZERO WHITE ( Intel i5 14400F/ VGA RTX 4070 )",
            price: 39999000,
            quantity: 2,
            image:
                "https://hanoicomputercdn.com/media/product/250_87631_pc_hacom_project_zero_white_intel_i5_14400f_vga_rtx_4070xx.jpg",
        },
        {
            id: 5,
            masp: "GPAS001",
            name: "Tay cầm chơi game không dây Asus ROG Raikiri Pro",
            price: 3399000,
            quantity: 6,
            image:
                "https://hanoicomputercdn.com/media/product/250_85807_rog_raikiri_pro_01.jpg",
        },
        // Thêm các sản phẩm khác ở đây
    ]);
    // Thay đổi trạng thái khi checkbox được chọn
    const toggleSelectItem = (id) => {
        const updatedSelectedItems = new Set(selectedItems);
        if (updatedSelectedItems.has(id)) {
            updatedSelectedItems.delete(id);
        } else {
            updatedSelectedItems.add(id);
        }
        setSelectedItems(updatedSelectedItems);
        updateTotalPrice(); // Cập nhật lại tổng tiền khi thay đổi lựa chọn
    };

    const [selectedItems, setSelectedItems] = useState(new Set()); // Trạng thái cho sản phẩm được chọn
    // Giá trị giảm giá (0 = không có giảm giá)
    const [discount, setDiscount] = useState(0);
    const [discountCode, setDiscountCode] = useState("");
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);

    // // Tính tổng tiền (tạm tính) trước khi giảm giá
    // const calculateTotal = () => {
    //     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    // };

    // Tính tổng tiền (chỉ tính các sản phẩm được chọn)
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            if (selectedItems.has(item.id)) {
                return total + item.price * item.quantity;
            }
            return total;
        }, 0);
    };

    // Tính giá trị giảm giá (Tạm tính * phần trăm giảm giá)
    const calculateDiscountAmount = () => {
        const total = calculateTotal();
        return total * (discount / 100);
    };
    // Tính tổng tiền sau khi giảm giá
    const calculateDiscountedTotal = () => {
        const total = calculateTotal();
        return total - (total * discount) / 100;
    };

    // // Tính tổng số lượng sản phẩm
    // const calculateTotalQuantity = () => {
    // return cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
    //  };

    // Tăng số lượng sản phẩm
    const increaseQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
        );
    };

    // Giảm số lượng sản phẩm
    const decreaseQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            ),
        );
    };

    // Tính tổng số lượng sản phẩm
    const calculateTotalQuantity = () => {
        return cartItems.reduce(
            (totalQuantity, item) => totalQuantity + item.quantity,
            0,
        );
    };
    // Xóa sản phẩm
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    // Áp dụng giảm giá khi nhập mã
    const applyDiscount = () => {
        if (discountCode === "Giam10") {
            setDiscount(10); // Giảm 10% nếu mã là Giam10
            setIsDiscountApplied(true);
        } else if (discountCode === "Giam20") {
            setDiscount(20); // Giảm 20% nếu mã là Giam20
            setIsDiscountApplied(true);
        } else {
            alert("Mã giảm giá không hợp lệ!");
            setDiscount(0);
            setIsDiscountApplied(false);
        }
        updateTotalPrice(); // Cập nhật lại tổng tiền và thành tiền sau khi áp dụng giảm giá
    };

    // Cập nhật ô tạm tính và tổng tiền khi có sự thay đổi
    const updateTotalPrice = () => {
        // Cập nhật ô tổng tiền giỏ hàng
        const totalCartPriceElement = document.querySelector(".total-cart-price");
        if (totalCartPriceElement) {
            totalCartPriceElement.textContent = `${total.toLocaleString()}₫`;
        }

        const totalCartPaymentElement = document.querySelector(
            ".total-cart-payment",
        );
        if (totalCartPaymentElement) {
            totalCartPaymentElement.textContent = `${discountedTotal.toLocaleString()}₫`;
        }

        const total = calculateTotal();
        const discountedTotal = calculateDiscountedTotal();

        // Cập nhật giá trị thành tiền của từng sản phẩm
        cartItems.forEach((item) => {
            const itemTotalPrice = item.price * item.quantity;
            const itemElement = document.querySelector(`#total-price-${item.id}`);
            if (itemElement) {
                itemElement.textContent = `${itemTotalPrice.toLocaleString()}₫`;
            }
        });

        // Cập nhật ô giảm giá
        const discountAmount = calculateDiscountAmount();
        const discountElement = document.querySelector("#price-discount");
        if (discountElement) {
            discountElement.textContent = `${discountAmount.toLocaleString()}₫`;
        }
    };

    // Hiển thị modal xác nhận xóa giỏ hàng
    const [showClearCartModal, setShowClearCartModal] = useState(false);
    // Hàm gọi khi xóa toàn bộ giỏ hàng
    const clearCart = () => {
        setCartItems([]);
        setDiscount(0);
        setDiscountCode("");
        setIsDiscountApplied(false);
        updateTotalPrice();
    };

    return (
        <div>
            <div className="body-card">
                <div className="card">
                    <div className="container">
                        <div className="bt1">
                            <div className="bt2">
                                <div className="bt3">
                                    <a href="/" className="bt31">
                                        {/* <img src="/assets/trans_bg.png" alt="hanoicomputer"/> */}
                                    </a>
                                    <div className="bt32">
                                        <div className="bt321">
                                            <span className="txt">Giỏ Hàng</span>
                                            <div className="bar"></div>
                                            <div className="circle">1</div>
                                        </div>

                                        <div className="bt321">
                                            <span className="txt">Thanh Toán Đặt Hàng</span>
                                            <div className="circle1">2</div>
                                        </div>
                                    </div>
                                    <div className="phone-cart1">
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
                        <div className="noidung">
                            <div className="bentrai">
                                <div className="new-cart-items-row">
                                    <div className="cart-col-product">
                                        <div
                                            className="fake-checkbox active"
                                            id="js-check-cart-all-item"
                                        />
                                        <span>
                                            Tất cả (
                                            <span className="cart_counter_new">
                                                {calculateTotalQuantity()}
                                            </span>{" "}
                                            sản phẩm)
                                        </span>
                                    </div>
                                    <div className="cart-col-price">Đơn giá</div>
                                    <div className="cart-col-quantity">Số lượng</div>
                                    <div className="cart-col-total-price">Thành tiền</div>
                                    <div className="cart-col-delete">
                                        <button
                                            className="new-cart-del-shopping-btn new-2021"
                                            id="clear-cart-button"
                                            href="javascript:void(0);"
                                            onClick={() => setShowClearCartModal(true)}
                                        >
                                            <img
                                                title="Xóa toàn bộ giỏ hàng"
                                                src="https://hacom.vn/template/july_2021/images/trash.svg"
                                                className="loading"
                                                alt="Xóa cả giỏ hàng"
                                            />
                                        </button>
                                    </div>
                                </div>

                                {/* Cart Item */}
                                {cartItems.map((item) => (
                                    <div className="cart-list-item" key={item.id}>
                                        <div className="new-cart-items-row">
                                            <div className="cart-col-product">
                                                <div className="canh_giua">
                                                    <input
                                                        type="checkbox"
                                                        className="product-checkbox"
                                                        onChange={() => toggleSelectItem(item.id)}
                                                        checked={selectedItems.has(item.id)}
                                                    />
                                                </div>
                                                <Link to="/product-detail">
                                                    <img
                                                        className="cart-n-p-img"
                                                        src={item.image}
                                                        alt={item.name}
                                                    />
                                                </Link>
                                                <div className="cart-n-p-info">
                                                    <Link to="/product-detail" className="cart_sku">
                                                        {item.name}
                                                    </Link>
                                                    <span className="cart-n-p-sku">
                                                        Mã SP: <b>{item.masp}</b>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="cart-col-price">
                                                <span className="new-cart-items-price js-show-buy-price">
                                                    {item.price.toLocaleString()} ₫
                                                </span>
                                            </div>
                                            <div className="cart-col-quantity">
                                                <span className="new-cart-quantity">
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="minor quantity-change"
                                                        data-value="-1"
                                                        title="Trừ"
                                                        onClick={() => decreaseQuantity(item.id)}
                                                    >
                                                        <svg
                                                            enableBackground="new 0 0 10 10"
                                                            viewBox="0 0 10 10"
                                                            x="0"
                                                            y="0"
                                                            className="hnc-svg-icon"
                                                        >
                                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                                        </svg>
                                                    </a>
                                                    <input
                                                        className="buy"
                                                        value={item.quantity}
                                                        size="5"
                                                        data-stock="998"
                                                        id={`quantity-${item.id}`}
                                                    />
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="add quantity-change"
                                                        data-value="1"
                                                        title="Thêm"
                                                        onClick={() => increaseQuantity(item.id)}
                                                    >
                                                        <svg
                                                            enableBackground="new 0 0 10 10"
                                                            viewBox="0 0 10 10"
                                                            x="0"
                                                            y="0"
                                                            className="hnc-svg-icon"
                                                        >
                                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="cart-col-total-price">
                                                <b
                                                    className="total-item-price"
                                                    id={`total-price-${item.id}`}
                                                >
                                                    {(item.price * item.quantity).toLocaleString()}₫
                                                </b>
                                            </div>
                                            <div className="cart-col-delete">
                                                <a
                                                    className="new-cart-del-shopping-btn new-2021"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <img
                                                        title="Xóa sản phẩm"
                                                        src="https://hacom.vn/template/july_2021/images/trash.svg"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Modal xác nhận xóa giỏ hàng */}
                                {showClearCartModal && (
                                    <div className="clear-cart-modal">
                                        <div className="modal-content">
                                            <p>
                                                Bạn có chắc chắn muốn xóa toàn bộ sản phẩm trong giỏ
                                                hàng không?
                                            </p>
                                            <div className="modal-buttons">
                                                <button
                                                    onClick={() => {
                                                        setShowClearCartModal(false);
                                                        clearCart();
                                                    }}
                                                >
                                                    Có
                                                </button>
                                                <button onClick={() => setShowClearCartModal(false)}>
                                                    Không
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="benphai">
                                <div className="box-cart-address">
                                    <div className="voucher">
                                        <div className="voucher-ct">
                                            <input
                                                type="text"
                                                className="txt"
                                                id="discount_code"
                                                name="coupon_code"
                                                value={discountCode}
                                                onChange={(e) => setDiscountCode(e.target.value)}
                                                placeholder="Mã giảm giá/ quà tặng"
                                            />
                                            <a
                                                href="javascript:void(0);"
                                                className="button-check-discount"
                                                onClick={applyDiscount}
                                            >
                                                Áp dụng
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-cart-total-price">
                                    <p>
                                        <span>Tạm tính</span>
                                        <span className="total-cart-price">
                                            {calculateTotal().toLocaleString()}₫
                                        </span>
                                    </p>
                                    <p>
                                        <span>Giảm giá</span>
                                        <span id="price-discount">
                                            {calculateDiscountAmount().toLocaleString()}₫
                                        </span>
                                    </p>
                                    <p>
                                        <span>Tổng tiền</span>
                                        <span className="red-b total-cart-payment">
                                            {calculateDiscountedTotal().toLocaleString()}₫
                                        </span>
                                    </p>
                                    <span className="cart-vat">(Đã bao gồm VAT nếu có)</span>
                                </div>
                                <Link to="/payment" className="button-buy-submit-cart">
                                    Xác Nhận Thanh Toán
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

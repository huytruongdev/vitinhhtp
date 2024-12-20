import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { Box, Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";
import RatingShow from "../../components/Star/RatingShow";
import './ProductDetail.scss';
import ProductGallery from "./components/ProductGallery/ProductGallery";
import Spec from "./components/Spec/Spec";

const ProductDetail = () => {
  return (
    <>
      <div className="breadcrumb">
        <Breadcrumb>
          <Link to="/home">
            <i className="fa fa-home px-2" aria-hidden="true"></i> Trang chủ
          </Link>
          <Link to="#">
            Màn Hình Máy Tính, Tay Treo
          </Link>
          <p className="m-0">
            Màn hình LG 24MR400-B (23.8 ...
          </p>
        </Breadcrumb>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <div className="container-main__detail">
            <Grid size={7}>
              <div className="product-gallery">
                <ProductGallery />
              </div>
            </Grid>
            <Grid size={5}>
              <div className="container-right">
                <h1>Màn hình LG 24MR400-B (23.8 inch/FHD/IPS/100Hz/5ms)</h1>
                <p>Mã SP: MOLG253 | Đánh giá: <RatingShow average={0} /> | Bình luận: 2 </p>
                <p>Lượt xem: 27.322</p>
                <div className="summary">
                  <h4>Thông số sản phẩm</h4>
                  <p className="summary__item">Độ phân giải: FHD 1920 x 1080</p>
                  <p className="summary__item">Tấm nền: IPS</p>
                  <p className="summary__item">Tần số quét: 100Hz</p>
                  <p className="summary__item">Thời gian phản hồi: 5ms</p>
                  <p className="summary__item">Độ sáng: 250 nits</p>
                  <p className="summary__item">VESA: 100x100mm</p>
                  <p className="summary__item">Cổng kết nối: HDMI x1, VGA x1</p>
                </div>
                <div className="price">
                  <span className="price_sale">2.179.000₫</span>
                  <span className="price_origin">2.689.000₫</span>
                  <span className="price_saving">Tiết kiệm: 590.000₫</span>
                </div>
                <div className="quantity-container">
                  <div className="quantity-action">
                    <label>Số lượng: </label>
                    <button type="button" className="quantity-btn quantity-btn--left">
                      <i className="fa fa-minus"></i>
                    </button>
                    <input type="text" className="quantity-number" value={1} />
                    <button type="button" className="quantity-btn quantity-btn--right">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                  <button className="add-cart">Thêm vào giỏ hàng</button>
                  <div className="add-wishlist">
                    <i className="fa-solid fa-heart icon-red"></i>
                  </div>
                </div>
                <button className="btn-buy-now">
                  <b>Mua ngay</b>
                  <p>Giao nhanh tận nơi, miễn phí toàn quốc</p>
                </button>
                <div className="upgrade-group">
                  <div className="item-left">
                    <img src="https://hacom.vn/template/2024/images/pd-icon-len-doi.png" alt="" />
                    <div className="text">
                      <p>Chỉ còn:</p>
                      <p className="item-price">
                        1.743.200
                        <u>đ</u>
                      </p>
                      <p>Khi lên đời từ máy cũ</p>
                    </div>
                  </div>
                  <a className="upgrade-btn">
                    Lên Đời Ngay
                  </a>
                </div>
              </div>
            </Grid>
          </div>
          <Grid size={7}>
            <div className="group-container">
              <h2 className="group-title">Video</h2>
              <iframe width="698" height="420" src="https://www.youtube.com/embed/PUVuHX-fyRc"
                title="LG IPS Monitor 24MR400 Full HD 1080p AMD Free Sync - 100Hz | ASMR Unboxing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </Grid>
          <Grid size={5}>
            <div className="group-container">
              <h2 className="group-title">Thông số kỹ thuật</h2>
              <Spec />

            </div>
          </Grid>
          <Grid size={7}>
            <div className="group-container">
              <h2 className="group-title">Nhận xét và đánh giá</h2>

              <div className="review">

              </div>
              <div className="comment-box">
                <textarea id="comment" placeholder="Mời bạn để lại bình luận..." />
                <div className="comment-action">
                  <button>Gửi bình luận</button>
                </div>
              </div>
              <div className="comment-list">
                <div className="comment-item">
                  <div className="comment-item__user">
                    <div className="avatar">A</div>
                    <h4 className="username">Anh Nguyễn Đình Dũng</h4>
                    <p className="date">23/8/2024 14:43</p>
                  </div>
                  <div className="comment-item__info">
                    <p className="comment">màn này lắp được arm đúng ko bạn</p>
                    <p className="action">Trả lời</p>
                  </div>
                </div>
                <div className="comment-item">
                  <div className="comment-item__user">
                    <div className="avatar">A</div>
                    <h4 className="username">User test</h4>
                    <p className="date">23/8/2024 14:43</p>
                  </div>
                  <div className="comment-item__info">
                    <p className="comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="action">Trả lời</p>
                  </div>
                </div>
              </div>

            </div>
          </Grid>
        </Grid>
      </Box>

    </>
  );
}

export default ProductDetail;
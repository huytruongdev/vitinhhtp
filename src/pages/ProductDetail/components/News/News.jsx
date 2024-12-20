import React from "react";
import "./News.scss";
import { Link } from "react-router-dom";
const News = () => {
  return (
    <div className="news-container">
      <div className="item-detail">
        <img
          src="https://hanoicomputercdn.com/media/news/1754_builpc__1_.jpg"
          alt=""
          className="b-img"
        />
        <Link className="title">
          CHƯƠNG TRÌNH KHUYẾN MẠI BUILD PC TẶNG NGAY TIỀN MẶT
        </Link>
        <p>Từ nay cho đến khi có thông báo mới</p>
      </div>
      <div className="item-detail">
        <img
          src="https://hanoicomputercdn.com/media/news/2739_man_hinh_van_phong_lg_hacom.jpg"
          alt=""
          className="b-img"
        />
        <Link className="title">
          Màn hình văn phòng LG hiện đại hóa không gian làm việc của doanh
          nghiệp
        </Link>
        <a href="" className="text">
          Màn hình văn phòng LG hiện đại hóa không gian làm việc của doanh
          nghiệp
        </a>
        <p>
          LG mang đến 20 mô hình màn hình B2B, khẳng định cam kết trong việc
          thiết kế sản phẩm có trách nhiệm.{" "}
        </p>
      </div>
      <div className="item-detail">
        <img
          src="https://hacom.vn/media/lib/23-11-2022/core-cpu.jpg"
          alt=""
          className="b-img"
        />
        <Link className="title">
          Số lõi hay tốc độ xung nhịp quan trọng hơn với CPU?
        </Link>
        <p>
          Bộ xử lý trung tâm (CPU) trên máy tính cho đến nay là một trong những
          yếu tố mạnh nhất quyết định hiệu suất của nó.
        </p>
      </div>
    </div>
  );
};

export default News;

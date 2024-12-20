import React from "react";
import "./Spec.scss";
const Spec = () => {
  return (
    <>
    <table className="spec">
      <tbody>
        <tr>
          <td className="label">THÔNG TIN CHUNG</td>
          <td className="value"></td>
        </tr>
        <tr>
          <td className="label">Nhà sản xuất</td>
          <td className="value">LG</td>
        </tr>
        <tr>
          <td className="label">Tên sản phẩm</td>
          <td className="value">24MR400-B</td>
        </tr>
        <tr>
          <td className="label">Mã sản phẩm (Code/Tag)</td>
          <td className="value">LG</td>
        </tr>
        <tr>
          <td className="label">Loại sản phẩm</td>
          <td className="value">Màn hình phẳng</td>
        </tr>
        <tr>
          <td className="label">Thông SỐ CHI TIẾT</td>
          <td className="value"></td>
        </tr>
        <tr>
          <td className="label">Kích thước hiển thị</td>
          <td className="value">23.8 inch</td>
        </tr>
        <tr>
          <td className="label">Tỉ lệ màn hình</td>
          <td className="value">16:09</td>
        </tr>
        <tr>
          <td className="label">Độ phân giải</td>
          <td className="value">FHD 1920 x 1080</td>
        </tr>
        <tr>
          <td className="label">Tấm nền</td>
          <td className="value">IPS</td>
        </tr>
        <tr>
          <td className="label">Tần số quét</td>
          <td className="value">100Hz</td>
        </tr>
        <tr>
          <td className="label">Thời gian phản hồi</td>
          <td className="value">5ms</td>
        </tr>
        <tr>
          <td className="label">Độ tương phản</td>
          <td className="value">1,300:1 (typ)</td>
        </tr>
        <tr>
          <td className="label">Độ sáng</td>
          <td className="value">250 cd/m² (typ)</td>
        </tr>
        <tr>
          <td className="label">Góc nhìn</td>
          <td className="value">178º horizontal, 178º vertical</td>
        </tr>
        <tr>
          <td className="label">Màu sắc màn hình</td>
          <td className="value">16.7 triệu màu, 99% sRGB </td>
        </tr>
        <tr>
          <td className="label">Bề mặt màn hình</td>
          <td className="value">Anti-Glare, Hard Coating (3H)</td>
        </tr>
      </tbody>
    </table>
    <button className="button-detail">Xem thêm cấu hình chi tiết</button>
    </>
  );
};

export default Spec;

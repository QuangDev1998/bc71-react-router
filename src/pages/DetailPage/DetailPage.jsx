import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { http } from "../../service/config";

export default function DetailPage() {
  let params = useParams();
  // ush
  let [detail, setDetail] = useState({});
  // useParams ~ lấy tham số từ url
  console.log("params:", params);
  // useNaviGate ~ chuyển hướng trang
  let navigate = useNavigate();
  useEffect(() => {
    http
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${params.id}`)
      .then((result) => {
        setDetail(result.data.content);
      })
      .catch((err) => {
        alert("Không tìm thấy phim");
      });
  }, []);
  let handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="p-5">
      <h2>{detail.tenPhim}</h2>
      <img src={detail.hinhAnh} alt="" height={400} />
      <p>{detail.moTa}</p>
      {/* <NavLink to="/" className="btn btn-dark">
        Go Back
      </NavLink> */}
      <button className="btn btn-dark" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}

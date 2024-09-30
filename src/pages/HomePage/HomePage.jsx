import React, { useState, useEffect } from "react";
import { http } from "../../service/config";
import { Card } from "antd";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  let [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    http
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04")
      .then((result) => {
        setListMovie(result.data.content);
      })
      .catch((err) => {});
  }, []);
  let renderListMovie = () => {
    return listMovie.map((item) => {
      return (
        <Card
          className="col-2"
          title={item.tenPhim}
          cover={
            <img
              style={{ height: 300, object: "fit" }}
              alt={item.tenPhim}
              src={item.hinhAnh}
            />
          }
        >
          <NavLink to={`/detail/${item.maPhim}`}>Xem Chi Tiết</NavLink>
        </Card>
      );
    });
  };
  return <div className="row">{renderListMovie()}</div>;
}

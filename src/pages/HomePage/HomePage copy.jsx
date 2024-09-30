import React, { Component } from "react";
import { http } from "../../service/config";
import { Card } from "antd";
import { NavLink } from "react-router-dom";

export default class HomePage extends Component {
  state = {
    lisMovie: [],
  };
  componentDidMount() {
    http
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04")
      .then((result) => {
        console.log("result:", result);
        this.setState({ lisMovie: result.data.content });
      })
      .catch((err) => {});
  }

  renderListMovie = () => {
    return this.state.lisMovie.map((item) => {
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
  render() {
    return <div className="row">{this.renderListMovie()}</div>;
  }
}

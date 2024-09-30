import React from "react";
import { useSelector } from "react-redux";

export default function XucXac() {
  let mangXucXac = useSelector((state) => {
    console.log(state);
    // return state.gameReducer.mangXucXac;
  });
  let rederMangXucXac = () => {
    return mangXucXac?.map((item, index) => {
      return (
        <img
          style={{
            width: 100,
          }}
          key={index}
          src={item.img}
          alt=""
        />
      );
    });
  };
  return (
    <div className="d-flex container justify-content-between aligh-items-center pt-5">
      <button className="btn btn-danger">Tài</button>
      <div>{rederMangXucXac()}</div>
      <button className="btn btn-dark">Xỉu</button>
    </div>
  );
}

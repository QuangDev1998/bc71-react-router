import React from "react";
import { useSelector } from "react-redux";

export default function KetQua() {
  let { luaChon, tongSoLuotChoi, tongSoBanThang } = useSelector((state) => {
    return state.gameReducer;
  });
  return (
    <div className="text-center">
      <button className="btn btn-warning px-5 py-2">Play Game</button>
      <h2>{luaChon}</h2>
      <h2> Tổng Số Bạn Thắng {tongSoBanThang}</h2>
      <h2> Tổng Số Lượt Chơi {tongSoLuotChoi}</h2>
    </div>
  );
}

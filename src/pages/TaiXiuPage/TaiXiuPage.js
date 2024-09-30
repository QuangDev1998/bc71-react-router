import React from "react";
import XucXac from "./XucXac";
import KetQua from "./KetQua";
import "./game.css";

export default function TaiXiuPage() {
  return (
    <div
      className="game_container"
      style={{
        backgroundImage: "./assets",
        width: "100vw",
        height: "100vw",
      }}
    >
      <XucXac />
      <KetQua />
    </div>
  );
}

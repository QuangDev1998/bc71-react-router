import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDownAction, handleUpAction } from "./numberSlice";

export default function ReduxHook() {
  // lấy data từ redux
  //   let number = useSelector((state) => state.numberSlice.number);
  let { number } = useSelector((state) => state.numberSlice);
  let dispatch = useDispatch();
  return (
    <div className="d-flex pt-5">
      <h2>ReduxHook</h2>
      <button
        onClick={() => {
          dispatch(handleUpAction());
        }}
        className="btn btn-danger"
      >
        Up
      </button>
      <h1>{number}</h1>
      <button
        onClick={() => {
          dispatch(handleDownAction(10));
        }}
        className="btn btn-dark"
      >
        Down
      </button>
    </div>
  );
}

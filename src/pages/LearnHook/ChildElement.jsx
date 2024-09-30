import React, { memo } from "react";

function ChildElement({ setNumber }) {
  console.log("child render");

  return (
    <div className="p5 bg-primary">
      ChildElement
      <br />
      <button
        onClick={() => {
          setNumber(0);
        }}
        className="btn btn-danger"
      >
        {" "}
        Reset
      </button>
    </div>
  );
}
export default memo(ChildElement);

// memo ~ PureComponent : nếu props không thay đổi thì không render lại

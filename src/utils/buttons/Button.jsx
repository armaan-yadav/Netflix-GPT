import React from "react";

const Button = ({ style, text }) => {
  return (
    <div
      className={`bg-primary hover:bg-primaryTwo text-white w-fit px-3 py-1 text-md rounded-md cursor-pointer ${style}`}
    >
      {text}
    </div>
  );
};

export default Button;

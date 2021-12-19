import React from "react";

const Owner = ({ owner }) => {
  const { name, price, img, details } = owner;
  return (
    <div>
      {name}
      <img src={img} alt="" />
    </div>
  );
};

export default Owner;

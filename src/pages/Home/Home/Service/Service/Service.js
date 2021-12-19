import React from "react";

const Service = ({ service }) => {
  const { name, price, img, details } = service;

  return <div>{name}</div>;
};

export default Service;

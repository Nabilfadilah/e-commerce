import React from "react";
import Products from "./Products";
import {bestsellers} from "../../data";

const BestSellers = () => {
  return <Products items={bestsellers} heading="Produk Terlaris" />;
};

export default BestSellers;

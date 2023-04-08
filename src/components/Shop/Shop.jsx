import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleShop from "../SingleShop/SingleShop";

const Shop = () => {
  const products = useLoaderData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 container mx-auto mb-10">
      {products.slice(0, 12).map((product) => (
        <SingleShop product={product} key={product.id}></SingleShop>
      ))}
    </div>
  );
};

export default Shop;

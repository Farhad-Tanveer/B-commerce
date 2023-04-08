import React from "react";

const SingleShop = ({ product }) => {
  const { name, img, price } = product;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}</p>
        <div className="card-actions justify-end w-full">
          <button className="btn btn-info w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleShop;

import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["product 1", "Product-2"].map((product) => {
          return product;
        })}
      </div>
      Footer
    </>
  );
};

export default Home;

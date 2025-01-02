import React from "react";

const ProductsPage = async () => {
  const products = await fetch(`${process.env.ENDPOINT}?limit=48`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  const productsData = await products.json();
  console.log(productsData);
  return <div>ProductsPage</div>;
};

export default ProductsPage;

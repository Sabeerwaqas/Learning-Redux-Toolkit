import React, { useEffect, useState } from "react";
import "./product.css";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error occurs while fetching data");
      });
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div>
        {product.map((item) => {
          return (
            <div className="item-parent">
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;

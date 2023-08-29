import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./product.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <h1 className="product-dashboard">Product Dashboard</h1>
      <div className="item-container">
        {product.map((item, index) => {
          return (
            <div key={product.id} className="item">
              <div className="item-parent">
                <div className="image-parent">
                  <img
                    className="product-image"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="item-detail">
                  <h6>{item.title}</h6>
                  <small>
                    This is our pride product and we are offering 50% discount.
                  </small>
                  <p>Price: ${item.price}</p>
                </div>
                <button className="cart-button">Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;

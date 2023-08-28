import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log("Error occurs while fetching data");
      });
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ul>
        {product.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <img src={item.image} alt={item.title} style={{ maxWidth: "100px" }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;

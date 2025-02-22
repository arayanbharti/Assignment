import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";

const API_URL = "http://localhost:5001/api/products";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => setProducts(response.data));
  }, []);

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm setProducts={setProducts} />
      <ProductTable products={products} setProducts={setProducts} />
    </div>
  );
};

export default Product;

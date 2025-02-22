import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const API_URL = "http://localhost:5001/api/products";

const ProductForm = ({ setProducts }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity_available: "",
  });
  const [searchId, setSearchId] = useState("");
  const [searchedProduct, setSearchedProduct] = useState(null);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, product);
      setProducts((prev) => [...prev, response.data]);
      setProduct({
        name: "",
        description: "",
        price: "",
        quantity_available: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleSearchById = async () => {
    try {
      const response = await axios.get(`${API_URL}/${searchId}`);
      setSearchedProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setSearchedProduct(null);
    }
  };

  return (
    <>
      <style>
        {`
          .card {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
          .input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border-radius: 6px;
            border: 1px solid #ccc;
          }
          .button {
            background-color: #4f46e5;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .button:hover {
            background-color: #3b37c2;
          }
        `}
      </style>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="card">
          <CardContent>
            <Typography variant="h5" className="mb-4">
              Add a Product
            </Typography>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={product.name}
                onChange={handleChange}
                required
                className="input"
              />
              <TextField
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
                value={product.description}
                onChange={handleChange}
                required
                className="input"
              />
              <TextField
                name="price"
                type="number"
                label="Price"
                variant="outlined"
                fullWidth
                value={product.price}
                onChange={handleChange}
                required
                className="input"
              />
              <TextField
                name="quantity_available"
                type="number"
                label="Quantity"
                variant="outlined"
                fullWidth
                value={product.quantity_available}
                onChange={handleChange}
                required
                className="input"
              />
              <Button variant="contained" type="submit" className="button">
                Add Product
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default ProductForm;

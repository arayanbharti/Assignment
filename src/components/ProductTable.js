import React, { useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const API_URL = "http://localhost:5001/api/products";

const ProductTable = ({ products, setProducts }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity_available: "",
  });
  const [searchId, setSearchId] = useState("");
  const [searchedProduct, setSearchedProduct] = useState(null);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Function to edit a product
  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setUpdatedProduct(product);
  };

  // Handle the change of inputs while editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to update a product
  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedProduct);
      setProducts(
        products.map((product) => (product.id === id ? response.data : product))
      );
      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleSearchById = async () => {
    if (!searchId) {
      alert("Please enter a product ID.");
      return;
    }

    try {
      const response = await axios.get(`${API_URL}/${searchId}`);
      setSearchedProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setSearchedProduct(null);
      alert("Product not found.");
    }
  };

  return (
    <>
      <style>
        {`
          .card {
            max-width: 900px;
            margin: 20px auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            color:black;
          }
          .input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border-radius: 6px;
            border: 1px solid #ccc;
          }
          .button {
            margin: 5px;
            padding: 8px 16px;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
          }
          .button:hover {
            opacity: 0.8;
          }
          .table-header {
            background: #f4f4f4;
            font-weight: bold;
          }
        `}
      </style>

      {/* Search By ID Section */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h5" className="mb-4">
          Search Product by ID
        </Typography>
        <Box className="flex gap-4">
          <TextField
            type="number"
            label="Enter Product ID"
            variant="outlined"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="input"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearchById}
            className="button"
          >
            Search
          </Button>
        </Box>

        {/* Display searched product */}
        {searchedProduct && (
          <Box className="mt-4 p-4 bg-gray-100 rounded">
            <Typography variant="h6">Product Details</Typography>
            <Typography>
              <strong>ID:</strong> {searchedProduct.id}
            </Typography>
            <Typography>
              <strong>Name:</strong> {searchedProduct.name}
            </Typography>
            <Typography>
              <strong>Description:</strong> {searchedProduct.description}
            </Typography>
            <Typography>
              <strong>Price:</strong> ${searchedProduct.price}
            </Typography>
            <Typography>
              <strong>Quantity:</strong> {searchedProduct.quantity_available}
            </Typography>
          </Box>
        )}
      </motion.div>

      {/* Product Table */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h5" className="mb-4">
          Product List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="table-header">
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.quantity_available}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(product)}
                      className="button"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => deleteProduct(product.id)}
                      className="button"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Edit Form */}
        {editingProduct && (
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h6" className="mb-4">
              Edit Product
            </Typography>
            <Box>
              <TextField
                label="Name"
                variant="outlined"
                name="name"
                value={updatedProduct.name}
                onChange={handleInputChange}
                fullWidth
                className="input"
              />
              <TextField
                label="Description"
                variant="outlined"
                name="description"
                value={updatedProduct.description}
                onChange={handleInputChange}
                fullWidth
                className="input"
                style={{ marginTop: "10px" }}
              />
              <TextField
                label="Price"
                variant="outlined"
                name="price"
                value={updatedProduct.price}
                onChange={handleInputChange}
                fullWidth
                className="input"
                style={{ marginTop: "10px" }}
              />
              <TextField
                label="Quantity Available"
                variant="outlined"
                name="quantity_available"
                value={updatedProduct.quantity_available}
                onChange={handleInputChange}
                fullWidth
                className="input"
                style={{ marginTop: "10px" }}
              />
              <Box className="flex gap-4 mt-4">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleUpdate(updatedProduct.id)}
                  className="button"
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setEditingProduct(null)}
                  className="button"
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default ProductTable;

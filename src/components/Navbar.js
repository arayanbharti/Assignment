import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <style>
        {`
          html, body, #root {
            background-color: #1a1a2e !important;  /* Ensure background is enforced */
            color: white;
            margin: 0;
            padding: 0;
            width: 100%;
          }
          .navbar {
            background: linear-gradient(135deg, #4b0082, #4f46e5);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            width: 100%;
            padding: 10px 0;
          }
          .toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
          }
          .logo {
            color: white;
            font-weight: bold;
            font-size: 1.8rem;
          }
          .nav-links {
            display: flex;
            gap: 25px;
          }
          .nav-button {
            color: white;
            font-size: 1rem;
            padding: 10px 15px;
            border-radius: 6px;
            transition: all 0.3s ease;
            font-weight: bold;
          }
          .nav-button:hover {
            background-color: rgba(255, 255, 255, 0.3);
            color: #f0f0f0;
          }
        `}
      </style>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AppBar position="static" className="navbar">
          <Toolbar className="toolbar">
            <Typography variant="h6" className="logo">
              EMPN1528
            </Typography>
            <div className="nav-links">
              <Button
                color="inherit"
                component={Link}
                to="/"
                className="nav-button"
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/products"
                className="nav-button"
              >
                Products
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </motion.div>
    </>
  );
};

export default Navbar;

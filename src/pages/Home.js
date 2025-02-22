import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <style>
        {`
          .home-container {
            padding: 20px;
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            width: 100%;
            background-color: #1a1a2e;
            color: white;
            text-align: center;
          }
          .home-title {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(to right, #ff0080, #007bff);
            -webkit-background-clip: text;
            color: transparent;
          }
          .home-description {
            font-size: 1.125rem;
            margin-top: 16px;
            color: #a1a1a1;
            max-width: 40rem;
          }
          .home-card {
            margin-top: 32px;
            padding: 24px;
            background-color: #2b2b3d;
            color: #d1d1d1;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            border: 1px solid #444;
          }
          .home-card-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: #ffffff;
          }
          .home-card-text {
            font-size: 1rem;
            font-weight: 500;
          }
          .home-card-highlight {
            font-weight: 700;
            color: #007bff;
          }
        `}
      </style>
      <motion.div
        className="home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="home-title">Welcome to the Product Management System</h1>
        <p className="home-description">
          Use the navigation to manage products.
        </p>
        <div className="home-card">
          <h2 className="home-card-title">
            Extended Bootcamp Frontend - 22 Feb
          </h2>
          <p className="home-card-text">
            Employee ID: <span className="home-card-highlight">EMPN1528</span>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Home;

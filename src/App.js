import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  NavBar,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route
                exact
                path="/crypto/:coinUUID"
                element={<CryptoDetails />}
              ></Route>
              <Route exact path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
            <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
            >
            Copyright © 2021
            <Link to="/">CWA Inc.</Link> <br />
            All Rights Reserved.
            </Typography.Title>
            <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            </Space>
        </div>
      </div>
    </div>
  );
};

export default App;

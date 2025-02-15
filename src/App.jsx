import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Layout>
    </>
  );
}

export default App;

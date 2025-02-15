import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import TopRatePage from "./pages/TopRatePage";
import UpComingPage from "./pages/UpComingPage";

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/top-rated" element ={<TopRatePage/>}/>
        <Route path="/upcoming" element={<UpComingPage/>}/>
      </Routes>
    </Layout>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import TopRatePage from "./pages/TopRatePage";
import UpComingPage from "./pages/UpComingPage";
import MovieDetails from "./components/MovieDetails";
import SearchBarPage from "./pages/SearchBarPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatePage />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/upcoming" element={<UpComingPage />} />
        <Route path="/search" element={<SearchBarPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

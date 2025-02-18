import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const Layout = lazy(() => import("./layout/Layout"));
const TopRatePage = lazy(() => import("./pages/TopRatePage"));
const UpComingPage = lazy(() => import("./pages/UpComingPage"));
const MovieDetails = lazy(() => import("./components/MovieDetails"));
const SearchBarPage = lazy(() => import("./pages/SearchBarPage"));

function App() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatePage />} />
          <Route path="/:id" element={<MovieDetails />} />
          <Route path="/upcoming" element={<UpComingPage />} />
          <Route path="/search" element={<SearchBarPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;

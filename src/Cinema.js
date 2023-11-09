import Navbar from "./Components/Navbar";
import MoviesSection from "./Components/MoviesSection";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import ChoosenMovie from "./Components/ChoosenMovie";

function Cinema() {
  return (
    <section className="cinema">
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="Cinema/" element={<MoviesSection/>} />
          <Route path="Cinema/chosen" element={<ChoosenMovie/>} />
        </Routes>
      </Router>
    </section>
  );
}

export default Cinema;

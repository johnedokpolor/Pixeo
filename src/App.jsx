import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Context } from "./context/Context";
import "./style.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import ChannelDetail from "./components/ChannelDetail";
import VideoDetail from "./components/VideoDetail";
import SearchFeed from "./components/SearchFeed";
import SideBar from "./components/SideBar";
import ScrollToTop from "./ScrollToTop";

function App() {
  const { dark, response } = useContext(Context);

  return (
    <Router>
      <ScrollToTop />

      <div className={dark ? "dark" : "light"}>
        <Navbar />
        <div className="lg:flex">
          <SideBar />

          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:cid/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

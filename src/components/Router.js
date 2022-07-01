import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Series from "./Series";
import Bookmark from "./Bookmark";

const Router = () => (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/bookmarks" element={<Bookmark />} />
        </Routes>
);

export default Router;
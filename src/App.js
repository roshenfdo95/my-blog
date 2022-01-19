import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import About from "./components/About";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/allpost" element={<AllPosts/>} />
          <Route path="/:slug" element={<OnePost/>}/>
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>

      
    </BrowserRouter>
  );
}
export default App;
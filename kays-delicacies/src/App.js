import React from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Reviews from "./Components/Reviews";
import ContactUs from "./Components/ContactUs";
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />}/>
      <Route path="/reviews" element={<Reviews />}/>
      <Route path="/contactus" element={<ContactUs />}/>
      {/* last route to add = error */}
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
    {/* <Footer/> */}
  </Router>
  );
}

export default App;

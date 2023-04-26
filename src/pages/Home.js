import React from "react";

import Navbar from "../components/Navbar"
import Header from "../components/Header"

function HomePage() {
  return (
    <React.Fragment> 
      <Navbar />
      <Header />
      <h1>Home</h1> 
    </React.Fragment>
  );
}
export default HomePage;

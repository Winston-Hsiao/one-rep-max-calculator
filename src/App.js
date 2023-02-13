import "./style.css";
import React from "react";
import Header from "./Header.js";
import Calculator from "./Calculator.js";
import Links from "./Links.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
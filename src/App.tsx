import React from "react";
import "./App.scss";
import About from "./components/about";
import Info from "./components/info";
import Interests from "./components/interests";
import Footer from "./components/footer";

export default function App() {
  return (
    <div id="app-container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

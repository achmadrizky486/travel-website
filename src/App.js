import React from "react";
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
    </div>
  );
}

export default App;

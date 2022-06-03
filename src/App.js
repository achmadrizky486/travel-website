import React from "react";
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import SearchAppBar from "./components/Header/NewBootcamp/searchAppBar";
import Map from "./components/Map";
import SimpleSlider from "./components/SimpleSlider/simpleSlider";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <SimpleSlider />
      <Map />

      {/*Buraya tüm sectionların taglerini oluşturup koyucam ki router çalışsın! */}
    </div>
  );
}

export default App;

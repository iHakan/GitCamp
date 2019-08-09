import React from "react";
import SearchAppBar from "./components/Header/NewBootcamp/searchAppBar";
import Map from "./components/Map";
import SimpleSlider from "./components/SimpleSlider/simpleSlider";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <SimpleSlider />
      <Categories />
      <Map />
      {/*Buraya tüm sectionların taglerini oluşturup koyucam ki router çalışsın! */}
    </div>
  );
}

export default App;

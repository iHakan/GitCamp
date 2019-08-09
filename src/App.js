import React from "react";
import SearchAppBar from "./components/Header/NewBootcamp/searchAppBar";
import Map from "./components/Map";
import SimpleSlider from "./components/SimpleSlider/simpleSlider";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Intro from "./components/Intro/intro";
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <br />
      <br />
      <br />
      <Intro />
      <SimpleSlider />
      <Categories />
      <Features />
      <Map />
      <Footer/>
      {/*Buraya tüm sectionların taglerini oluşturup koyucam ki router çalışsın! */}
    </div>
  );
}

export default App;
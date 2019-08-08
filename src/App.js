import React from "react";
import logo from "./logo.svg";
import SearchAppBar from "./components/Header/NewBootcamp/searchAppBar";
import Map from "./components/Map";
import UpcomingSlider from "./components/Upcomings/upcoming";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <UpcomingSlider />
      <Map />

      {/*Buraya tüm sectionların taglerini oluşturup koyucam ki router çalışsın! */}
    </div>
  );
}

export default App;

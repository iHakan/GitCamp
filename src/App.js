import React from "react";
import logo from "./logo.svg";
import SearchAppBar from "./components/Header/NewBootcamp/searchAppBar";
import Footer from "./components/Footer/footer";
import Contactus from "./components/Footer/contactus";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const title = "React Assignment 6";

  return (
    <>
      <div>
        <Header title={title} />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;

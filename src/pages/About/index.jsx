import React from "react";
import Hero from "./Hero";
import About from "./About";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/about.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Hero />
      <About/>
      <Footer/>
    </div>
  );
};

export default index;

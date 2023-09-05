import React from "react";
import Hero from "./Hero";
import AboutUs from "../About/AboutUs";
import OurService from "../Services/OurService";
import Features from "./Features";
import OurProduct from "../Products/OurProduct";
import Gallery from "./Gallery";
import OurTeam from "../About/OurTeam";

function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurService />
      <Features />
      <OurProduct />
      <Gallery />
      <OurTeam />
    </div>
  );
}

export default Home;

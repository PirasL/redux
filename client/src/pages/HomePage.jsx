import React from "react";
import Features from "../component/Features/Features";
import Footer from "../component/Footer/Footer";

import Hero from "../component/Hero/Hero";
import Navbar from "../component/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

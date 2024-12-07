import React from "react";
import Navbar from "../Components/Navbar";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainContent mainHeading={"Daniel KALUUYA"} />
      <Footer />
    </>
  );
};

export default Home;

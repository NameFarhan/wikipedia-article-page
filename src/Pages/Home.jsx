import React from "react";
import Navbar from "../Components/Navbar";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";

const Home = ({ setMode, mode }) => {
  return (
    <>
      <Navbar />
      <MainContent
        setMode={setMode}
        mode={mode}
        mainHeading={"Daniel KALUUYA"}
      />
      <Footer />
    </>
  );
};

export default Home;

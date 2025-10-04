import React from "react";
import Banner from "./Banner";
import TopCountries from "./TopCountries";
import AboutEduport from "./AboutEduport";

const Home = () => {
  return (
    <div className="mt-10 mb-10">
      <Banner></Banner>
      <TopCountries></TopCountries>
      <AboutEduport></AboutEduport>
    </div>
  );
};

export default Home;

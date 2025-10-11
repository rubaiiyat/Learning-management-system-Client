import React from "react";
import Banner from "./Banner";
import TopCountries from "./TopCountries";
import AboutEduport from "./AboutEduport";
import Join from "./Join";
import Offer from "./Offer";

const Home = () => {
  return (
    <div className="mt-10 mb-10">
      <Banner></Banner>
      <TopCountries></TopCountries>
      <AboutEduport></AboutEduport>
      <Offer></Offer>
      <Join></Join>
    </div>
  );
};

export default Home;

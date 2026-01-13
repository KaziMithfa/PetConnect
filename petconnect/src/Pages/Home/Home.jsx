import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CallAction from "../CallAction/CallAction";
import AboutSection from "../AboutSection/AboutSection";
import FeaturedPets from "../FeaturedPets/FeaturedPets";
import WhyAdopt from "../WhyAdopt/WhyAdopt";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <CallAction></CallAction>
      <AboutSection></AboutSection>
      <FeaturedPets></FeaturedPets>
      <WhyAdopt></WhyAdopt>
    </div>
  );
};

export default Home;

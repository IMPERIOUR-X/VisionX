import React from "react";
import HeroHomePage from "../components/HeroHomePage";
import WhyVisionxHomePage from "../components/WhyVisionxHomePage";
import FeaturesAndTools from "../components/FeaturesAndToolsHomePage";
import HowItWorks from "../components/HowItWorksHomePage";
import AssetsAndRates from "../components/AssetsAndRatesHomePage";
import SecurityAndRegulations from "../components/SecurityAndRegulationsHomePage";
import FAQS from "../components/FAQs";

function HomePage(props) {
  return (
    <div style={{ padding: "0 70px 0" }}>
      <HeroHomePage />
      <WhyVisionxHomePage />
      <FeaturesAndTools />
      <HowItWorks />
      <AssetsAndRates />
      <SecurityAndRegulations />
      <FAQS />
    </div>
  );
}

export default HomePage;

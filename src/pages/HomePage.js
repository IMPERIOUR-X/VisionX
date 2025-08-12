import React, { useEffect, useState } from "react";
import NavBar from "../sections/NavBar";
import HeroHomePage from "../sections/HeroHomePage";
import WhyVisionxHomePage from "../sections/WhyVisionxHomePage";
import FeaturesAndTools from "../sections/FeaturesAndToolsHomePage";
import HowItWorks from "../sections/HowItWorksHomePage";
import AssetsAndRates from "../sections/AssetsAndRatesHomePage";
import SecurityAndRegulations from "../sections/SecurityAndRegulationsHomePage";
import FAQS from "../sections/FAQs";
import Footer from "../sections/Footer";

function HomePage(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bodySidePadding, setBodySidePadding] = useState(70);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const i = windowWidth;
    if (i <= 670) {
      if (i <= 500) {
        setBodySidePadding(30);
      } else {
        setBodySidePadding(50);
      }
    } else {
      setBodySidePadding(70);
    }
  }, [windowWidth]);

  return (
    <div>
      <NavBar windowWidth={windowWidth} bodySidePadding={bodySidePadding} />
      <HeroHomePage />
      <div style={{ padding: `0 ${bodySidePadding}px 0` }}>
        <WhyVisionxHomePage windowWidth={windowWidth} />
        <FeaturesAndTools windowWidth={windowWidth} />
        <HowItWorks windowWidth={windowWidth} />
        <AssetsAndRates windowWidth={windowWidth} />
        <SecurityAndRegulations windowWidth={windowWidth} />
        <FAQS windowWidth={windowWidth} />
      </div>
      <Footer windowWidth={windowWidth} bodySidePadding={bodySidePadding} />
    </div>
  );
}

export default HomePage;

import React from "react";
import CycleLuxuryObjects from "../components/Home/CycleLuxuryObjects";
import StyleLandscapeSection from "../components/Home/StyleLandscapeSection";
import TopCollectionsSection from "../components/Home/TopCollectionsSection";
import StyleHarmonySection from "../components/Home/StyleHarmonySection";
import FeaturedProductsPage from "../components/Home/FeaturedProductsPage";
import ProductShowcase from "../components/Home/ProductShowcase";
import AdvancedLuxuryPage from "../components/Home/AdvancedLuxuryPage";
import MaterialIntegritySection from "../components/Home/MaterialIntegritySection";
import CarouselLuxuryShowcase from "../components/Home/CarouselLuxuryShowcase";
import LuxuryShowcaseSection from "../components/Home/LuxuryShowcaseSection";
import LuxuryFeatureShowcase from "../components/Home/LuxuryFeatureShowcase";
import LuxuryFooter from "../components/Home/LuxuryFooter";

const Home = () => {
  return (
    <>
    <CycleLuxuryObjects/>
  <TopCollectionsSection/>
  <StyleHarmonySection/>
  

  <MaterialIntegritySection/>
 
  
  <LuxuryShowcaseSection/>
  <LuxuryFeatureShowcase/>
   <StyleHarmonySection/>
  <FeaturedProductsPage/>
 <LuxuryFooter/>
    </>
  );
};

export default Home;

import React from "react";
import { PageLayout } from "../components/PageLayout";
import AdvancedLuxuryPage from "../components/Home/AdvancedLuxuryPage";
import MaterialIntegritySection from "../components/Home/MaterialIntegritySection";
import StyleHarmonySection from "../components/Home/StyleHarmonySection";
import TopCollectionsSection from "../components/Home/TopCollectionsSection";
import LuxuryShowcaseSection from "../components/Home/LuxuryShowcaseSection";
import LuxuryFeatureShowcase from "../components/Home/LuxuryFeatureShowcase";
import StyleLandscapeSection from "../components/Home/StyleLandscapeSection";
import LuxuryFooter from "../components/Home/LuxuryFooter";

export const Dashboard = () => (
  
    <>
      <AdvancedLuxuryPage/>
   <MaterialIntegritySection/>
   <StyleHarmonySection/>
  <TopCollectionsSection/>  
  <LuxuryShowcaseSection/>
   <StyleHarmonySection/>
  <LuxuryFeatureShowcase/>
  
  <StyleLandscapeSection/>
 <LuxuryFooter/>
    </>
 
);


import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import { restoreSession, logout } from "./redux/Slice/authSlice";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup  from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
import { Admin } from "./pages/Admin";
import { NotFound } from "./pages/NotFound";
import { PrivateRoute } from "./routes/PrivateRoute";
import { TokenRoute } from "./routes/TokenRoute";
import { AdminRoute } from "./routes/AdminRoute";

import OrderSuccessTracking from "./components/Home/OrderSuccessTracking";
import PremiumAccountHub from "./components/Home/PremiumAccountHub";
import PremiumProductPage from "./components/Home/PremiumProductPage";
import ProductDiscoveryGrid from "./components/Home/ProductDiscoveryGrid";
import TopCollectionsSection from "./components/Home/TopCollectionsSection";
import StyleLandscapeSection from "./components/Home/StyleLandscapeSection";
import StyleHarmonySection from "./components/Home/StyleHarmonySection";
import ProductJourney from "./components/Home/ProductJourney";
import LuxuryFeatureShowcase from "./components/Home/LuxuryFeatureShowcase";
import FeaturedProductsPage from "./components/Home/FeaturedProductsPage";
import CarouselLuxuryShowcase from "./components/Home/CarouselLuxuryShowcase";
import ProductShowcase from "./components/Home/ProductShowcase";
import CelebrationOfPurchase from "./components/Home/CelebrationOfPurchase";
import AICommerceCart from "./components/Home/AICommerceCart";
import AuraWishlistPage from "./components/Home/AuraWishlistPage";
import Login from "./pages/Login";

const AppWrapper = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((s) => s.auth.isLoggedIn);

  // Restore session once on app start
  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <Settings />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Admin />
            </>
          }
        />

        <Route path="/luxury" element={<AICommerceCart />} />
        <Route path="/wishlist" element={<AuraWishlistPage />} />
        <Route path="/carousel" element={<CarouselLuxuryShowcase />} />
        <Route path="/celebration" element={<CelebrationOfPurchase />} />
        <Route path="/featured" element={<FeaturedProductsPage />} />
        <Route path="/feature-showcase" element={<LuxuryFeatureShowcase />} />
        <Route path="/order" element={<OrderSuccessTracking />} />
        <Route path="/premium-account" element={<PremiumAccountHub />} />
        <Route path="/premium-product" element={<PremiumProductPage />} />
        <Route path="/product-discovery" element={<ProductDiscoveryGrid />} />
        <Route path="/product-journey" element={<ProductJourney />} />
        <Route path="/product-showcase" element={<ProductShowcase />} />
        <Route path="/style-harmony" element={<StyleHarmonySection />} />
        <Route path="/style-landscape" element={<StyleLandscapeSection />} />
        <Route path="/top-collections" element={<TopCollectionsSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </Provider>
  );
}

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import "./pages/CropRecommendation.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Challenges from "./components/Challenges";
import Mission from "./components/Mission";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CropRecommendation from "./pages/CropRecommendation";

function HomePage() {
  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
    return () => revealObs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Challenges />
      <Mission />
      <Features />
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crop-recommendation" element={<CropRecommendation />} />
      </Routes>
    </BrowserRouter>
  );
}
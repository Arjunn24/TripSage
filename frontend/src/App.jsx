// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import SignupPage from "./pages/Signup";
import DashboardPage from "./pages/DashboardPage";
import PlanTripPage from "./pages/PlanTripPage";
import DestinationPage from "./pages/DestinationPage";

// Wrapper to hide Navbar on dashboard
function LayoutWrapper({ children }) {
  const location = useLocation();
  const hideNavbarOn = ["/dashboard", "/plan-trip", "/destination"]; 

  const hideNavbar = hideNavbarOn.some(path => location.pathname.startsWith(path));

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="text-center my-6">
                  <button
                    className="bg-green-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:bg-green-700 transition"
                  >
                    Start Planning
                  </button>
                </div>
                <Features />
                <Showcase />
              </>
            }
          />
          
          {/* Signup Page */}
          <Route path="/signup" element={<SignupPage />} />

          {/* Dashboard Page */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Plan Trip Page */}
          <Route path="/plan-trip" element={<PlanTripPage />} />

          {/* Destination Page */}
          <Route path="/destination/:location" element={<DestinationPage />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

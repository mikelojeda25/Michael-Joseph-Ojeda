import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { HeroMusic } from "./components/HeroMusic";
import { MusicPlayerBar } from "./components/MusicPlayerBar";

// Handling Named Exports with Lazy Loading
const TechStack = lazy(() =>
  import("@/app/components/TechStack").then((module) => ({
    default: module.TechStack,
  })),
);
const About = lazy(() =>
  import("@/app/components/About").then((module) => ({
    default: module.About,
  })),
);
const Projects = lazy(() =>
  import("@/app/components/Projects").then((module) => ({
    default: module.Projects,
  })),
);
const Artwork = lazy(() =>
  import("@/app/components/Artwork").then((module) => ({
    default: module.Artwork,
  })),
);
const Contact = lazy(() =>
  import("@/app/components/Contact").then((module) => ({
    default: module.Contact,
  })),
);
const Footer = lazy(() =>
  import("@/app/components/Footer").then((module) => ({
    default: module.Footer,
  })),
);

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-gradient-to-br from-[#0B2F2A] via-[#0a1f1c] to-black overflow-x-hidden">
        <Navigation />

        {/* Suspense handles the "Waiting" phase so you don't get a white screen crash */}
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center text-white">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <TechStack />
                  <About />
                  <Projects />
                  <Artwork />
                  <Footer />
                </>
              }
            ></Route>
            <Route path="/music" element={<HeroMusic />} />
            <Route
              path="/contact"
              element={
                <>
                  <div className="mt-10 px-6 max-w-7xl mx-auto">
                    <Contact />
                  </div>
                  <Footer />
                </>
              }
            />
          </Routes>
          <MusicPlayerBar />
        </Suspense>
      </main>
    </Router>
  );
}

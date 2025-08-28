import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import Plans from "./components/Plans.jsx";
import Transformations from "./components/Transformations.jsx";
import UsingApp from "./components/UsingApp.jsx";
import Reviews from "./components/Reviews.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function Home(){
  return (
    <>
      <Hero />
      <Story />     {/* ⬅ ensure this line exists */}
      <Plans />
      <Transformations />
      <UsingApp />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

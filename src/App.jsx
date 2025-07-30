import { useState } from "react";
import "./App.css";
import { Home, AboutUs, ContactUs, Services, Gallery } from "./pages";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-center text-blue-600 mt-10">
          DreamHome Sofa Website
        </h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="about" element={<AboutUs />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

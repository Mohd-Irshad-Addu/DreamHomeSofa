// App.jsx
import { Routes, Route } from "react-router-dom";  // HashRouter hata diya
import { Home, AboutUs, ContactUs, Services, Gallery } from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="min-h-screen bg-white">
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
  );
}

export default App;

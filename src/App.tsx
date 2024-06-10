import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import { useEffect, useState } from "react";
import LoaderComponent from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to switch to content after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timer if the component is unmounted before the timer completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

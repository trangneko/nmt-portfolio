import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import { useEffect, useState } from "react";
import LoaderComponent from "./components/Loader";
import ProjectPage from "./components/ProjectPage";

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
        <I18nextProvider i18n={i18n}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          </I18nextProvider>
        </>
      )}
    </div>
  );
}

export default App;

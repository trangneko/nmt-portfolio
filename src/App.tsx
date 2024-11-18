import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactPage from "./components/ContactPage";
import { useEffect, useRef, useState } from "react";
import LoaderComponent from "./components/Loader";
import ProjectPage from "./components/ProjectPage";
import ResumePage from "./components/AboutPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Set a timer to switch to content after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timer if the component is unmounted before the timer completes
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const yOffset = -50; // Offset by 50px
        const yPosition =
          aboutRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      // Navigate to root page and then scroll
      navigate("/", { replace: false });
      setTimeout(handleScroll, 100); // Slight delay to ensure page has rendered
    } else {
      // Scroll directly if already on root page
      handleScroll();
    }
  };

  return (
    <div className="App">
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          <I18nextProvider i18n={i18n}>
            <Navbar onAboutClick={scrollToAbout} />
            <Routes>
              <Route
                path="/"
                element={
                  <Home aboutRef={aboutRef} scrollToAbout={scrollToAbout} />
                }
              />
              <Route path="/resume" element={<ResumePage />} />
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

import Home from "./components/home";
import Education from "./components/education";
import Skills from "./components/skills";
import Certification from "./components/certification";
import Contact from "./components/contact";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true"); // Mark that we redirected
      window.location.href = "/"; // Redirect to home
    }
  }, []);
  return (
    <>
      <Home />
      <Education />
      <Skills />
      <Certification />
      <Contact />
    </>   
  );
}

export default App;
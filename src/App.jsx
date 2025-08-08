import { Routes, Route } from "react-router-dom";
import { Component as MyNavbar } from "./components/Navbar";

// Import your pages here
// import HomePage from "./pages/HomePage"; // main page
// import AboutPage from "./pages/AboutPage"; // example second page

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> */}
        {/* Add more routes here */}
      </Routes>
    </>
  );
}

export default App;

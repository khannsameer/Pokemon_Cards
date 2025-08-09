import { Routes, Route } from "react-router-dom";
import { Component as MyNavbar } from "./components/Navbar";
import HomePage from "./components/HomePage";

// Import your pages here
// import HomePage from "./pages/HomePage"; // main page
// import AboutPage from "./pages/AboutPage"; // example second page

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
      </Routes>
    </>
  );
}

export default App;

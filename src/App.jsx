import { Routes, Route } from "react-router-dom";
import { Component as MyNavbar } from "./components/Navbar";
import HomePage from "./components/HomePage";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <>
      <MyNavbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
      </Routes>
    </>
  );
}

export default App;

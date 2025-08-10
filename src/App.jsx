import { Routes, Route } from "react-router-dom";
import { Component as MyNavbar } from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <MyNavbar />
      <main className="pt-12">
        {/* Pushes content below fixed navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here */}
        </Routes>
      </main>
    </>
  );
}

export default App;

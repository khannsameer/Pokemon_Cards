import { Routes, Route } from "react-router-dom";
import { Component as MyNavbar } from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <MyNavbar />
      <main className="pt-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

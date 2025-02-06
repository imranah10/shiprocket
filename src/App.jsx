import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import DomesMain from "./pages/DomesMain";
// import DomesMain from "./pages/Product/DomesticPage/DomesMain";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<DomesMain />} />
        <Route path="/platform" element={<DomesMain />} />
        <Route path="/pricing" element={<DomesMain />} />
        <Route path="/partners" element={<DomesMain />} />
        <Route path="/trackorder" element={<DomesMain />} />
        <Route path="/resources" element={<DomesMain />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

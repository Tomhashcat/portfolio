import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/404/Error";



function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;

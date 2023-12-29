import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/404/Error';

function LocalBusinessScript() {
  const scriptContent = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Thomas Dutourné",
    "description": "Photographe professionnelle",
    "telephone": "0661906998"
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(scriptContent)}
    </script>
  );
}

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
        <LocalBusinessScript />
        </div>
     
    </Router>
  );
}

export default App;

              
             
          
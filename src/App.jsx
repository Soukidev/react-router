// App.js
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //important

import Sidebar from "./SideBar"; // Import Sidebar component
import BMW from "./component/Bmw";
import Ford from "./component/Ford";
import Tesla from "./component/Tesla";
import MercedesGClass from "./component/MercedesGClass";
import Daica from "./component/Dacia";
import Home from "./component/Home";
import NotFoundPage from "./component/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex">
        <Sidebar /> {/* Sidebar for navigation */}
        <div className="ml-64 p-6 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ford" element={<Ford />} />
            <Route path="/bmw" element={<BMW />} />
            <Route path="/tesla" element={<Tesla />} />
            <Route path="/mercedes" element={<MercedesGClass />} />
            <Route path="/dacia" element={<Daica />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import Main from "./components/main";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kedai from "./components/kedai";
import About from "./components/about";
import Find from "./components/find";
import Kontak from "./components/contact";

function App() {
  return (
    <div className="App min-h-screen bg-biru">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/kedai" element={<Kedai />} />
          <Route path="/about" element={<About />} />
          <Route path="/find" element={<Find />} />
          <Route path="/contact" element={<Kontak />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

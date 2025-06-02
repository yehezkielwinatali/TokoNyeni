import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";

function Placeholder({ name }) {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      {name} page coming soon!
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Placeholder name="Blog" />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Placeholder name="Cart" />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";

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
      <Route path="/about" element={<Placeholder name="About" />} />
      <Route path="/contact" element={<Placeholder name="Contact" />} />
      <Route path="/cart" element={<Placeholder name="Cart" />} />
    </Routes>
  );
}

export default App;

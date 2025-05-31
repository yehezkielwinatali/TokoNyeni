import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Blog from "./pages/blog-pages/blog";
import BlogSecond from "./pages/blog-pages/blog-second";

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
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-second" element={<BlogSecond />} />
      <Route path="/about" element={<Placeholder name="About" />} />
      <Route path="/contact" element={<Placeholder name="Contact" />} />
      <Route path="/cart" element={<Placeholder name="Cart" />} />
    </Routes>
  );
}

export default App;

import Layout from "./Layout";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Faculties from "./Faculties";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/faculties" element={<Faculties />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

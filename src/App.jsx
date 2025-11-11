import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import User from "./Pages/User";
import Navbar from "./components/Navbar";
import Error from "./Pages/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:Contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

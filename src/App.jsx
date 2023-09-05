import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//  Components
import Nav from "./components/Home/Nav";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import BackToTop from "./components/Home/BackToTop";

function App() {
  return (
    <>
      <BrowserRouter>
            <Nav/>
       <Routes>
          <Route>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
          </Route>
       </Routes>
      </BrowserRouter>
      <BackToTop/>
      <Footer/>
    </>
  );
}

export default App;

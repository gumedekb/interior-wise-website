import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import NewRelease from "./components/NewRelease";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <header className="border-b shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo links to home */}
          <Link to="/" className="text-2xl font-bold hover:text-yellow-600 transition">
            IW <span className="font-light">INTERIOR WISE</span>
          </Link>
          <br />
          <nav>
            <ul className="flex items-center space-x-6 uppercase text-sm font-light tracking-wide relative">
               <li><Link to="/" className="hover:text-yellow-600">Home</Link></li>
               <li><Link to="/about" className="hover:text-yellow-600">About</Link></li>

               <li className="relative group">
                  <span className="cursor-pointer hover:text-yellow-600 transition">Products ▾</span>
                  <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 min-w-[150px] z-50">
                     <li>
                     <Link to="/products/item1" className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">Interior Decor Planning</Link>
                     </li>
                     <li>
                     <Link to="/products/item2" className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">Re-Upholstery</Link>
                     </li>
                     <li>
                     <Link to="/products/item3" className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">Curtaining & Blinds</Link>
                     </li>
                     <li>
                     <Link to="/products/item4" className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">Carpet & Upholstery Cleaning</Link>
                     </li>
                     <li>
                     <Link to="/products/item5" className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">Wood Restoration</Link>
                     </li>
                     <li>
                     <Link to="/products/item6" className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">Office Furniture</Link>
                     </li>
                  </ul>
               </li>

               <li><Link to="/new-releases" className="hover:text-yellow-600">New Releases</Link></li>
               <li><Link to="/contact" className="hover:text-yellow-600">Get In Touch</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:itemId" element={<Products />} />
        <Route path="/new-releases" element={<NewRelease />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

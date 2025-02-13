import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import CreateProduct from "./pages/CreateProduct";
import HomePage from "./pages/HomePage";
import PageNav from "./components/PageNav";
//import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <PageNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="ProductListing" element={<ProductListing />} />
        <Route path="ProductDetails" element={<ProductDetails />} />
        <Route path="CreateProduct" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

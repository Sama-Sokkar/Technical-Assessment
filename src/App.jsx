//import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import CreateProduct from "./pages/CreateProduct";
import HomePage from "./pages/HomePage";
import PageNav from "./components/PageNav";
import styled from "styled-components";
//import './App.css'

function App() {
  //const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Wrapper>
        <PageNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="ProductListing" element={<ProductListing />} />
          <Route path="ProductDetails" element={<ProductDetails />} />
          <Route path="CreateProduct" element={<CreateProduct />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: #f8f8f8;
  min-height: 97vh;
`;

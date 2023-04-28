import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Nav } from "./components/nav/Nav";
import { Card, CardActions, CardContent, CardMedia, CssBaseline, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { Menu } from "./pages/Menu";
import  ProductItem  from "./pages/ProductItem";
import Slider from "./components/Slider";

function App() {
  const [products, setProducts]= useState([])
  
  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };
  
  useEffect(() =>{
    getProducts();
  },[]);

  return (
    <div className="App">
      <CssBaseline />
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductItem />}/> 
        <Route path="menu" element={<Menu />} />
      </Routes>
      
    </div>
  );
}

export default App;

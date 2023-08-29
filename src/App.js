import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/product" element = {<Product/>}/>
        <Route path = "/" element = {<Dashboard/>}/>
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

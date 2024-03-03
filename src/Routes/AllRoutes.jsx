import { Routes, Route } from "react-router-dom";


// local imports
import Home from "../Pages/Home";
import Product from "../Pages/Product.";
import Product1 from "../Pages/Product1";
import Product2 from "../Pages/Product2";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>} />
            <Route path="/product1" element={<Product1/>} />
            <Route path="/product2" element={<Product2/>} />
        </Routes>
    )
}

export default AllRoutes;
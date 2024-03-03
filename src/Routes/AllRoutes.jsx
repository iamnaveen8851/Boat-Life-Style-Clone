import { Routes, Route } from "react-router-dom";


// local imports
import Home from "../Pages/Home";
import Product from "../Pages/Product.";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>} />
        </Routes>
    )
}

export default AllRoutes;
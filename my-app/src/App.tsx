import Navbar from "./component/navbar"
import Home from "./pages/Home";
import Favorite from "./pages/favorites";
import Product from "./pages/products";
import{Route,Routes} from "react-router-dom";
import Login from "./pages/login";
function App() {
  

  return (
      <>
<Navbar/>
<div className="container">
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/product" element={<Product/>}/>
<Route path="/favorites" element={<Favorite/>}/>
<Route path="/login" element={<Login/>}/>
  
</Routes>

       </div>
       </>
  )
}

export default App

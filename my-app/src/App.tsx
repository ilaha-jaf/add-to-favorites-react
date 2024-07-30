import Navbar from "./component/navbar"
import Home from "./pages/Home";
import Favorite from "./pages/favorites";
import Product from "./pages/products";
import{Route,Routes} from "react-router-dom";

function App() {
  

  return (
      <>
<Navbar/>
<div className="container">
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/product" element={<Product/>}/>
<Route path="/favorite" element={<Favorite/>}/>

  
</Routes>

       </div>
       </>
  )
}

export default App

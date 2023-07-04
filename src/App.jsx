import ItemListContainer from "./pages/ItemListContainer"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Producto from "./pages/Producto"
import Layout from "./Layout"
import Home from "./pages/Home"
import Carrito from "./pages/Carrito"


const App = () => {

    const addToCart = (valor, product) =>{
        
        console.log ("Se agrego correctamente "+ valor + " " + product + " a tu carrito")
        
    }

    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="productos" element={<ItemListContainer/>}/>
                    <Route path="productos/:productoId" element={<Producto addToCart={addToCart}/>}/>
                    <Route path="carrito" element={<Carrito/>}/>
                </Route>  
            </Routes>
        </BrowserRouter>
       
    )
    

}

export default App;
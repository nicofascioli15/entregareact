import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";



const Navbar = () => {

    

    return (
        <nav className="d-flex align-items-center justify-content-around">
            <h1>LAISLA</h1>
        <div className="m-5">

            <ul className="d-flex gap-5">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                <Link to="/quienesSomos">Quienes Somos</Link>
                </li>
                <li>
                <Link to="/contacto">Contacto</Link>
                </li>
                


            </ul>

        
        </div>    

        <Link to="/carrito">
        
        <CartWidget/>
        
        </Link> 

       </nav>


       
    )
}

export default Navbar;
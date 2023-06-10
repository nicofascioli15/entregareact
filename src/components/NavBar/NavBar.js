import CartWidget from "./CartWidget";



const Navbar = () => {
    return (
        <nav className="d-flex align-items-center justify-content-around">
            <h1>LAISLA</h1>
        <div className="m-5">

            <ul className="d-flex gap-5">
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Quienes somos</a>
                </li>
                <li>
                    <a href="">Productos</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>

        
        </div>    

        <CartWidget/>

       </nav>


       
    )
}

export default Navbar;
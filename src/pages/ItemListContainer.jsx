import { Link } from "react-router-dom";
import productos from "../data"


const ItemListContainer = ({greeting}) => {
    
return(
    <div>
    <h3>Productos</h3>

    <section className="container listaProductos">
        {productos.map((producto)=>{
            return(
            <article className="card column is-2 columns is-gapless" key={producto.id}>
                <h5>{producto.title}</h5>
                <div className="card-image">
                <figure className="image is-4by3">
                <img src={producto.image} alt="imagen rota"/>
                </figure>
                </div>
                <Link to={`/productos/${producto.id}`}>Mas Info</Link>
            </article>
        )})}
    </section>

    </div>
)
}


export default ItemListContainer;




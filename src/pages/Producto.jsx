import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import productos from "../data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Producto = ({ addToCart }) => {
  const [count, SetCount] = useState(0);

  const handleCountRest = () => {
    if (count > 0) {
      SetCount(count - 1);
    }
  };
  const handleCountAdd = () => {
    SetCount(count + 1);
  };

  const notify = () => {
    addToCart(count, detalleProducto.title);
    toast.success(count + " items agregados al carrito")
};

  const { productoId } = useParams();

  const detalleProducto = productos.find(
    (producto) => producto.id == productoId
  );

  const { image, title, price } = detalleProducto;

  return (
    <section className="container productDetail ">
        <h2 className="titleProducto">{detalleProducto.title}</h2>
      <article className="card column is-5 columns ">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={detalleProducto.image} alt="imagen rota" />
          </figure>
        </div>
      </article>

    <div className="countProducto">
      <button onClick={handleCountRest}>-</button>
      <p>{count}</p>
      <button onClick={handleCountAdd}>+</button>
      <div>
        <button onClick={notify}>Agregar al Carrito</button>
        <ToastContainer />
      </div>
      </div>
    </section>
  );
};

export default Producto;

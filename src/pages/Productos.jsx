import listaProductos from "../data";
import { Link } from "react-router-dom";
import "./Productos.css";

function Productos(){

    return (
        <div>
            <h2>Productos</h2>
            <div className="galeria">
                {listaProductos.map((producto)=>{
                    return (
                        <article key={producto.id}>
                            <h5>{producto.title}</h5>
                            <img src={producto.image}/>
                            <Link to={`/productos/${producto.id}`}>Mas Info</Link>
                        </article>
                    )
                }
                )}

            </div>
        </div>
    )
}

export default Productos;
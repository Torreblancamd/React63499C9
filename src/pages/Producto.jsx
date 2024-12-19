import { Link , useParams } from "react-router-dom";
import listaProductos from "../data";

function Producto(){

    const {productoId } = useParams();


    const producto = listaProductos.find( (producto)=>producto.id == productoId );

    const { image , title , price} = producto;

    return (
        <div className="galeria">
            <img src={image}/>
            <h2>{title}</h2>
            <h3>Precio {price}$</h3>
            <Link to="/productos">Volver</Link>
        </div>
    )
}


export default Producto;
import { useState } from "react";
import AgregarLibro from "../componentes/libro/AgregarLibro";
import ListaLibrosActivos from "../componentes/libro/TodosLosLibros";


const Libros = () => {
    const [refrescar, setRefrescar] = useState(false);
  
    const actualizarLibros = () => {
      setRefrescar((prev) => !prev); // Cambiar el estado para forzar un nuevo fetch en ListaLibrosActivos
    };
  
    return (
      <div style={{borderStyle: "groove"}}>
        <AgregarLibro actualizarLibros={actualizarLibros} />
        <ListaLibrosActivos key={refrescar} />
        
        </div>
    );
  };

  export default Libros
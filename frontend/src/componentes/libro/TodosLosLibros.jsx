import { useState, useEffect } from "react";
import { useAuth } from "../../Auth";

const ListaLibrosActivos = () => {
  var [libritos, setLibritos] = useState([]);
  const [error, setError] = useState("");
  const {sesion} = useAuth()
  console.log("Libros recibidos:", libritos);
  console.log("Es un arreglo:", Array.isArray(libritos));

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/libros",{
            // method: "GET",
            headers: {Authorization: `Bearer ${sesion.token}`}
        })

        if (!response.ok) {
          throw new Error("Error al obtener los libros activos.");
        }
        const data = await response.json();
        setLibritos(data);
      } catch (error) {
        setError(error.message);
      }
    };
    
    fetchLibros();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  var libritos = libritos.LIBROS || [];git 
  return (
    <div
  style={{
    backgroundColor: "#d8cdc4",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "1200px",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }}
>
  <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
    Libros Activos
  </h2>
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      margin: "0 auto",
      fontSize: "16px",
      color: "#333",
    }}
  >
    <thead>
      <tr
        style={{
          backgroundColor: "#c0b4aa",
          color: "#fff",
          textAlign: "left",
        }}
      >
        <th style={{ padding: "10px", border: "1px solid #bbb" }}>ID</th>
        <th style={{ padding: "10px", border: "1px solid #bbb" }}>Título</th>
        <th style={{ padding: "10px", border: "1px solid #bbb" }}>ISBN</th>
        <th style={{ padding: "10px", border: "1px solid #bbb" }}>Género</th>
        <th style={{ padding: "10px", border: "1px solid #bbb" }}>Autor</th>
        <th style={{ padding: "10px", border: "1px solid #bbb" }}>Editorial</th>
        <th style={{ padding: "10px", border: "1px solid #bbb" }}>Año</th>
        <th style={{ padding: "10px", border: "1px solid #bbb" }}>
          Precio Venta
        </th>
        <th style={{ padding: "10px", border: "1px solid #bbb" }}>
          Precio Alquiler
        </th>
      </tr>
    </thead>
    <tbody>
      {libritos.map((libro, index) => (
        <tr
          key={libro.id}
          style={{
            backgroundColor: index % 2 === 0 ? "#f3eede" : "#e8dfd6",
          }}
        >
          <td style={{ padding: "10px", border: "1px solid #bbb" }}>
            {libro.id}
          </td>
          <td style={{ padding: "10px", border: "1px solid #bbb" }}>
            {libro.titulo}
          </td>
          <td style={{ padding: "10px", border: "1px solid #bbb" }}>
            {libro.isbn}
          </td>
          <td style={{ padding: "10px", border: "1px solid #bbb" }}>
            {libro.genero}
          </td>
          <td style={{ padding: "10px", border: "1px solid #bbb" }}>
            {libro.autor}
          </td>
          <td style={{ padding: "10px", border: "1px solid #bbb" }}>
            {libro.editorial}
          </td>
          <td style={{ padding: "10px", border: "1px solid #bbb" }}>
            {libro.año}
          </td>
          <td style={{ padding: "10px", border: "1px solid #bbb" }}>
            {libro.precio_venta}
          </td>
          <td style={{ padding: "10px", border: "1px solid #bbb" }}>
            {libro.precio_alquiler}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}
export default ListaLibrosActivos;

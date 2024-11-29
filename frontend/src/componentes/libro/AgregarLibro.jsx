import { useState } from "react";
import { useAuth } from "../../Auth";
import { Button } from "@mui/material";

const AgregarLibro = ({ actualizarLibros }) => {
  const { sesion } = useAuth();

  const [formulario, setFormulario] = useState({
    titulo: "",
    isbn: "",
    genero_nombre: "",
    autor_nombre: "",
    editorial_nombre: "",
    año: "",
    stock_inicial: "",
    precio_venta: "",
    precio_alquiler: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/v1/libros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sesion.token}`,
        },
        body: JSON.stringify(formulario),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Libro agregado con éxito: " + JSON.stringify(data));
        actualizarLibros();
      } else {
        alert("Error al agregar el libro.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "6px",
        padding: "20px",
        maxWidth: "600px",
        margin: "20px auto",
      }}
      onSubmit={handleSubmit}
    >
      <h3
        style={{
          textAlign: "center",
          color: "#444",
          marginBottom: "15px",
        }}
      >
        Agregar Libro
      </h3>

      {[
        { label: "Título", name: "titulo", type: "text" },
        { label: "ISBN", name: "isbn", type: "number" },
        { label: "Género", name: "genero_nombre", type: "text" },
        { label: "Autor", name: "autor_nombre", type: "text" },
        { label: "Editorial", name: "editorial_nombre", type: "text" },
        { label: "Año", name: "año", type: "number" },
        { label: "Stock Inicial", name: "stock_inicial", type: "number" },
        { label: "Precio Venta", name: "precio_venta", type: "number" },
        { label: "Precio Alquiler", name: "precio_alquiler", type: "number" },
      ].map(({ label, name, type }, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <label
            htmlFor={name}
            style={{
              display: "block",
              fontWeight: "500",
              fontSize: "14px",
              color: "#555",
              marginBottom: "6px",
            }}
          >
            {label}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            placeholder={`Ingrese ${label.toLowerCase()}`}
            value={formulario[name]}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
              boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
            required
          />
        </div>
      ))}

      <Button
        variant="contained"
        type="submit"
        style={{
          width: "100%",
          backgroundColor: "#inherit",
          color: "#fff",
          fontSize: "16px",
          padding: "10px 0",
          textTransform: "capitalize",
        }}
      >
        Agregar Libro
      </Button>
    </form>
  );
};

export default AgregarLibro;

import React, { useState } from "react";
import { useAuth } from "../../Auth";

const RegistrarVenta = () => {
  const [empleadoId, setEmpleadoId] = useState("");
  const [clienteId, setClienteId] = useState("");
  const [libroId, setLibroId] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [mensaje, setMensaje] = useState("");

  const {sesion} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const ventaData = {
      empleado_id: empleadoId,
      cliente_id: clienteId,
      libro_id: libroId,
      cantidad: cantidad,
    };

    try {
      const response = await fetch("http://localhost:3000/api/v1/ventas", {
        method: "POST",
        headers: {
          Authetication :`Bearer ${sesion.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ventaData),
      });

      const data = await response.json();
      if (response.ok) {
        setMensaje(`Venta registrada con éxito! ID de venta: ${data.venta_id}`);
      } else {
        setMensaje(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error al registrar venta:", error);
      setMensaje("Error al registrar la venta.");
    }
  };

  return (
    <div>
      <h1>Registrar Venta</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Empleado ID</label>
          <input
            type="number"
            value={empleadoId}
            onChange={(e) => setEmpleadoId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cliente ID</label>
          <input
            type="number"
            value={clienteId}
            onChange={(e) => setClienteId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Libro ID</label>
          <input
            type="number"
            value={libroId}
            onChange={(e) => setLibroId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cantidad</label>
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar Venta</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default RegistrarVenta

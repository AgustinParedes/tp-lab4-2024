import React, { useState } from "react";

const GenerarReporteVentas = () => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [reporte, setReporte] = useState([]);
  const [error, setError] = useState("");

  const handleFechaInicioChange = (e) => {
    setFechaInicio(e.target.value);
  };

  const handleFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fechaInicio || !fechaFin) {
      setError("Por favor, ingrese ambas fechas.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/reporte-ventas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fecha_inicio: fechaInicio, fecha_fin: fechaFin }),
      });

      if (!response.ok) {
        throw new Error("No se encontraron ventas para el rango de fechas.");
      }

      const data = await response.json();
      setReporte(data.reporteVentas);
      setError(""); // Limpiar posibles errores previos
    } catch (error) {
      setError("Error al generar el reporte de ventas.");
      setReporte([]); // Limpiar el reporte en caso de error
    }
  };

  return (
    <div>
      <h1>Generar Reporte de Ventas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fecha de Inicio:</label>
          <input
            type="date"
            value={fechaInicio}
            onChange={handleFechaInicioChange}
            required
          />
        </div>

        <div>
          <label>Fecha de Fin:</label>
          <input
            type="date"
            value={fechaFin}
            onChange={handleFechaFinChange}
            required
          />
        </div>

        <button type="submit">Generar Reporte</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {reporte.length > 0 && (
        <div>
          <h3>Reporte de Ventas</h3>
          <table>
            <thead>
              <tr>
                <th>Libro ID</th>
                <th>Título</th>
                <th>Cantidad Vendida</th>
                <th>Total Ventas</th>
              </tr>
            </thead>
            <tbody>
              {reporte.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.titulo}</td>
                  <td>{row.cantidad_vendida}</td>
                  <td>{row.total_ventas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GenerarReporteVentas;

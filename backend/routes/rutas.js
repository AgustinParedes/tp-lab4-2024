import express from "express";
import { bookControl } from "../controladores/librosControl.js";
import userControl from "../controladores/empleadosControl.js";
import login from "../controladores/auth.js";

const Router = express.Router();
Router.get("/ventas-diarias", bookControl.ventasDiarias);
Router.get("/control-stock", bookControl.controlStock);
Router.get("/el-mas-vendido", bookControl.libroMasVendido);
Router.get("/reporte-venta", bookControl.reporteVenta); //agregar fecha a este registro en la respuesta json
Router.get("/ganancias-diaria", bookControl.gananciaDiaria);
Router.get("/todos", bookControl.todos);
Router.post("/nueva-venta", bookControl.nuevaVenta);

// usuarios-empleados
Router.post("/login-empleados", login);
Router.get("/empleados", userControl.empleadosActivos);
Router.get("/empleado/:id", userControl.empleadosPorID);
Router.post("/nuevo-empleado", userControl.crearEmpleado); // Corregido, antes decia 'empelado'

Router.put("/recontratacion-empleado/:empleado_id", userControl.volverContrato);
Router.put("/editar-empleado/:empleado_id", userControl.editarEmpleado);
Router.delete("/despedir-empleado/:empleado_id", userControl.despedirEmpleado);

export default Router;

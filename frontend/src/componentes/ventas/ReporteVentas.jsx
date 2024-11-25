    import { useState } from "react";
    import { Button, Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

    const ReporteVentas = () => {
    const [reportes, setReportes] = useState([]);
    const [error, setError] = useState("");

    const fetchReporteVentas = async () => {
        try {
        const res = await fetch("http://localhost:3000/reporte-venta?fecha_i=2024-11-01&fecha_f=2024-11-25");
        if (!res.ok) throw new Error("Error al obtener el reporte");
        const data = await res.json();
        setReportes(data.reportes);
        } catch (error) {
        console.error(error);
        setError("Error al cargar el reporte de ventas.");
        }
    };

    return (
        <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
            Reporte de Ventas
        </Typography>
        <Button variant="contained" onClick={fetchReporteVentas}>
            Cargar Reporte
        </Button>
        {error && <Typography color="error">{error}</Typography>}
        {reportes.length > 0 && (
            <Table sx={{ mt: 2 }}>
            <TableHead>
                <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Venta ID</TableCell>
                <TableCell>Monto</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {reportes.map((reporte, index) => (
                <TableRow key={index}>
                    <TableCell>{reporte.fecha}</TableCell>
                    <TableCell>{reporte.venta_id}</TableCell>
                    <TableCell>{reporte.monto}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        )}
        </Box>
    );
    };

    export default ReporteVentas;

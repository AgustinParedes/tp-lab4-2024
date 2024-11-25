    import { useState } from "react";
    import { TextField, Button, Box, Typography, Alert } from "@mui/material";

    const VentasForm = () => {
    const [formData, setFormData] = useState({
        empleado_id: "",
        cliente_id: "",
        libro_id: "",
        cantidad: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleVenta = async () => {
        try {
        const res = await fetch("http://localhost:3000/nueva-venta", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            setMessage("Venta registrada exitosamente.");
        } else {
            setMessage("Error al registrar la venta.");
        }
        } catch (error) {
        console.error(error);
        setMessage("Error al conectar con el servidor.");
        }
    };

    return (
        <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
            Registrar Venta
        </Typography>
        <TextField
            fullWidth
            margin="normal"
            label="Empleado ID"
            name="empleado_id"
            onChange={handleChange}
        />
        <TextField
            fullWidth
            margin="normal"
            label="Cliente ID"
            name="cliente_id"
            onChange={handleChange}
        />
        <TextField
            fullWidth
            margin="normal"
            label="Libro ID"
            name="libro_id"
            onChange={handleChange}
        />
        <TextField
            fullWidth
            margin="normal"
            label="Cantidad"
            name="cantidad"
            type="number"
            onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleVenta} fullWidth>
            Registrar Venta
        </Button>
        {message && <Alert severity="info" sx={{ mt: 2 }}>{message}</Alert>}
        </Box>
    );
    };

    export default VentasForm;

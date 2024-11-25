import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PasswordIcon from "@mui/icons-material/Password";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

export default function InputWithIcon() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const localhost = "http://localhost:3000/api/v1";

  const handleSumbit = async () => {
    const respuestas = await fetch(`${localhost}/login-empleados`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, contraseña }),
    });
    const data = await respuestas.json();

    if (respuestas.ok) {
      setMensaje(`Bienvenido, ${usuario}`);
    } else {
      setMensaje(datos.mensaje || "error desconocido");
    }
  };

  return (
    <Box
      sx={{
        borderStyle: "inset",
        textAlign: "center",
        backgroundColor: "#d8cdc4",
        "& > :not(style)": { m: 3, height: 75 },
      }}
    >
      <h1>Iniciar Sesión</h1>
      <FormControl sx={{ width: 500 }} variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">Usuario</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </FormControl>
      <br />
      <FormControl sx={{ width: 500 }} variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">Contraseña</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          }
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </FormControl>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ width: 500, borderRadius: 2 }}
          onClick={handleSumbit}
        >
          Ingresar
        </Button>
      </Box>
    </Box>
  );
}

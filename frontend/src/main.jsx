import  { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import  {ThemeProvider}  from "@mui/material";
import Theme from "../public/Fuentes.jsx"
import Rutas from "./Rutas.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CssBaseline />
        <Rutas/>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);

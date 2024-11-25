import {Routes, Route} from "react-router-dom"
import Layout from "../src/pages/Layout";
import Productos from "../src/pages/Productos";
import Default from "../src/pages/Default";
import Home from "../src/pages/Home";
import Inicio from "../src/pages/Inicio";
import { Container } from "@mui/material";
import NavBar from "../src/componentes/navbar/Navbar";
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import AcercaDe from "../src/pages/AcercaDe";
import fondolibro5 from "../public/img/fondolibro5.jpg"

import VentasForm from "./componentes/ventas/VentasForm.jsx";
import ReporteVentas from "./componentes/ventas/ReporteVentas.jsx";

const hideNavList = [
    {
        path: "reportes",
        icon: <AdminPanelSettingsSharpIcon/>,
        tittle: "Reportes",
    },
    {
        path: "/proveedores",
        icon: <AdminPanelSettingsSharpIcon/>,
        tittle: "Proveedores",
    },
    {
        path: "/ventas/nueva",
        icon: <AdminPanelSettingsSharpIcon/>,
        tittle: "Vender",
    },
    {
        path: "alquilar",
        icon: <AdminPanelSettingsSharpIcon/>,
        tittle: "Alquilar",
    },
    
]
const navLinkList = [
    {
        tittle: "home",
        path: "/home",
    },
    {
        tittle: "productos",
        path: "/productos",
    },
    {
        tittle: "Acerca de ",
        path: "/acerca de",
    },
    {
        path : "/",
        icon: <LogoutIcon/>,
    },
]

const backgroundStyle = {
    backgroundImage: `url(${fondolibro5})`, // URL de la imagen
    backgroundSize: "cover", // Escala la imagen para cubrir todo el contenedor
    backgroundPosition: "center", // Centra la imagen
    backgroundRepeat: "no-repeat", // Evita que se repita
    height: "100vh", // Asegura que cubra toda la pantalla
    width: "100%", // Ocupa todo el ancho
}
const Rutas = () => {
    return (
        <>
            <div style={backgroundStyle}>
                <NavBar navLinkList={navLinkList} hideNavList={hideNavList} />
                <Container sx={{ mt: 5, }}>
                    <Routes >
                        <Route path="/" element={<Layout />} >
                            <Route index element={<Inicio />} />
                            <Route path="/productos" element={<Productos />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/acerca de" element={<AcercaDe />} />
                            <Route path="/*" element={<Default />} />

                            <Route path="/ventas/nueva" element={<VentasForm />} /> 
                            <Route path="/ventas/reporte" element={<ReporteVentas />} />

                        </Route>
                    </Routes>
                </Container>
            </div>
        </>
    );
}

export default Rutas;
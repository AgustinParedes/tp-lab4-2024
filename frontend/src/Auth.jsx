import { createContext, useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const AuthContext = createContext();

// Hook con sesion
export const useAuth = () => {
  return useContext(AuthContext);
};

// Componente principal
export const AuthProvider = ({ children }) => {
  const [sesion, setSesion] = useState(null);

  const login = async (username, password, ok, error) => {
    const response = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      error();
      return;
    }
    const sesion = await response.json();
    // console.log(sesion);
    setSesion(sesion);
    ok();
  };

  const logout = (ok) => {
    setSesion(null);
    ok();
  };

  const value = { sesion, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Autorizar pagina
export const AuthPage = ({ children }) => {
  const { sesion } = useAuth();
  const location = useLocation();

  if (!sesion) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

// Autorizar rol
// export const AuthRol = ({ rol, children }) => {
//   const { sesion } = useAuth();

//   if (!sesion || sesion.rol !== rol) {
//     return null;
//   }

//   return children;
// };
export const AuthRol = ({ roles, children }) => {
  const { sesion } = useAuth();

  // Verifica si la sesión existe y el rol está en el arreglo de roles permitidos
  if (!sesion || !roles.includes(sesion.rol)) {
    return null;
  }

  return children;
};

// Estado de autorizacion
export const AuthStatus = () => {
  const { sesion, logout } = useAuth();
  const navigate = useNavigate();

  if (sesion) {
    
    return <button onClick={() => logout(() => navigate("/"))}><LogoutIcon/></button>
    
  }
}

import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Recompensas from "./pages/Recompensas";

function App() {
  const [page, setPage] = useState("home");
  const [puntos, setPuntos] = useState(() => {
    const puntosGuardados = localStorage.getItem("ecoruta_puntos");
    return puntosGuardados ? parseInt(puntosGuardados) : 0;
  });

  useEffect(() => {
    localStorage.setItem("ecoruta_puntos", puntos.toString());
  }, [puntos]);

  if (page === "home") return <Home setPage={setPage} />;
  if (page === "login") return <Login setPage={setPage} />;
  
  if (page === "dashboard") 
    return <Dashboard setPage={setPage} puntos={puntos} setPuntos={setPuntos} />;
  
  if (page === "recompensas") 
    return <Recompensas setPage={setPage} puntos={puntos} setPuntos={setPuntos} />;

  return null;
}

export default App;
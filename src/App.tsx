import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Recompensas from "./pages/Recompensas";

function App() {
  const [page, setPage] = useState("home");
  const [puntos, setPuntos] = useState(0);
  if (page === "home") return <Home setPage={setPage} />;
  if (page === "login") return <Login setPage={setPage} />;
  if (page === "dashboard") return <Dashboard setPage={setPage} puntos={puntos} setPuntos={setPuntos} />;
  if (page === "recompensas") return <Recompensas setPage={setPage} puntos={puntos} />;

  return null;
}

export default App;
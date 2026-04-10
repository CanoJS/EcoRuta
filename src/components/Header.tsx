import logo from "../assets/logo.jpeg";

type Props = {
  setPage: (page: string) => void;
};

function Header({ setPage }: Props) {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg max-w-5xl w-[92%] mx-auto sticky top-4 z-50 border border-white/20">
      {/* Logo y Nombre - Te lleva al Home al hacer clic */}
      <div 
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => setPage("home")}
      >
        <img src={logo} alt="EcoRuta" className="h-8 md:h-9 rounded-full" />
        <span className="font-bold text-lg md:text-xl text-green-900 tracking-tight">EcoRuta</span>
      </div>

      {/* Botones de Navegación */}
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={() => setPage("dashboard")}
          className="px-3 md:px-5 py-2 text-sm font-semibold text-green-800 hover:bg-green-100/50 rounded-xl transition-colors"
        >
          Panel Principal
        </button>
        
        <button
          onClick={() => setPage("recompensas")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 rounded-xl text-sm font-bold shadow-md shadow-green-200 transition-all active:scale-95"
        >
          Canjear Puntos
        </button>
      </div>
    </nav>
  );
}

export default Header;
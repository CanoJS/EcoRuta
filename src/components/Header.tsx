import logo from "../assets/logo.jpeg";

type Props = {
  setPage: (page: string) => void;
};

function Header({ setPage }: Props) {
  return (
    <nav className="flex justify-between items-center px-3 md:px-8 py-3 md:py-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg max-w-5xl w-[94%] md:w-[92%] mx-auto sticky top-4 z-50 border border-white/20">
      {/* Logo y Nombre - Tamaño reducido en móvil */}
      <div 
        className="flex items-center gap-1.5 md:gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => setPage("home")}
      >
        <img src={logo} alt="EcoRuta" className="h-7 md:h-9 rounded-full" />
        <span className="font-bold text-base md:text-xl text-green-900 tracking-tight">EcoRuta</span>
      </div>

      {/* Botones de Navegación Responsivos */}
      <div className="flex items-center gap-1 md:gap-4">
        <button
          onClick={() => setPage("dashboard")}
          className="px-2 md:px-5 py-1.5 md:py-2 text-[11px] md:text-sm font-semibold text-green-800 hover:bg-green-100/50 rounded-xl transition-colors whitespace-nowrap"
        >
          {/* Texto dinámico: 'Panel' en móvil, 'Panel Principal' en desktop */}
          <span className="md:hidden">Panel</span>
          <span className="hidden md:inline">Panel Principal</span>
        </button>
        
        <button
          onClick={() => setPage("recompensas")}
          className="bg-green-600 hover:bg-green-700 text-white px-3 md:px-6 py-1.5 md:py-2 rounded-xl text-[11px] md:text-sm font-bold shadow-md shadow-green-200 transition-all active:scale-95 whitespace-nowrap"
        >
          {/* Texto dinámico: 'Canjear' en móvil, 'Canjear Puntos' en desktop */}
          <span className="md:hidden">Canjear</span>
          <span className="hidden md:inline">Canjear Puntos</span>
        </button>
      </div>
    </nav>
  );
}

export default Header;